import { test as base, expect, type Locator, type Page } from "@playwright/test";

const test = base.extend<{ localBrowserChecks: void }>({
  localBrowserChecks: [
    async ({ context, page, baseURL }, use) => {
      if (!baseURL) throw new Error("A loopback baseURL is required.");
      const blockedRequests: string[] = [];
      const browserErrors: string[] = [];

      await context.route("**/*", async (route) => {
        const request = route.request();
        if (
          new URL(request.url()).origin !== baseURL ||
          !["GET", "HEAD"].includes(request.method())
        ) {
          blockedRequests.push(`${request.method()} ${request.url()}`);
          await route.abort("blockedbyclient");
          return;
        }
        await route.continue();
      });
      page.on("pageerror", (error) => browserErrors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") browserErrors.push(message.text());
      });
      page.on("response", (response) => {
        if (response.status() >= 400) {
          browserErrors.push(`HTTP ${response.status()} ${response.url()}`);
        }
      });

      await use();

      expect.soft(blockedRequests, "Only local, read-only browser requests are allowed").toEqual([]);
      expect.soft(browserErrors, "No console, page, or HTTP errors during the journey").toEqual([]);
    },
    { auto: true },
  ],
});

async function tabTo(page: Page, target: Locator) {
  await expect(target).toHaveCount(1);
  for (let step = 0; step < 40; step += 1) {
    await page.keyboard.press("Tab");
    if (await target.evaluate((element) => element === document.activeElement)) {
      await expect(target).toBeVisible();
      return;
    }
  }
  await expect(target, "The control must be reachable using native Tab navigation").toBeFocused();
}

test("home to products to contact uses native keyboard links", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page).toHaveTitle("GI Technology - Premium Construction Materials & Services");
  const heroImage = page.getByRole("img", { name: "GI Technology Construction Materials", exact: true });
  await expect.poll(() => heroImage.evaluate((image) =>
    image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0
  )).toBe(true);

  if (testInfo.project.name === "desktop") {
    await page.screenshot({
      path: testInfo.outputPath("home-desktop.jpg"),
      type: "jpeg",
      quality: 70,
      animations: "disabled",
    });
  }

  const explore = page.getByRole("link", { name: "Explore Products", exact: true });
  const quote = page.getByRole("link", { name: "Get a Quote", exact: true });
  await expect(explore).toHaveAttribute("href", "/services");
  await expect(quote).toHaveAttribute("href", "/contact");
  await expect(page.getByRole("link", { name: "View All Products" })).toHaveAttribute("href", "/services");
  await expect(page.getByRole("link", { name: "Contact Us Today" })).toHaveAttribute("href", "/contact");
  await expect(page.locator("a button"), "Navigation links must not contain a second keyboard control").toHaveCount(0);

  await tabTo(page, explore);
  await expect(explore).toBeInViewport({ ratio: 1 });
  await page.keyboard.press("Tab");
  await expect(quote).toBeFocused();
  await expect(quote).toBeInViewport({ ratio: 1 });
  await page.keyboard.press("Shift+Tab");
  await expect(explore).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL("/services");
  await expect(page.getByRole("heading", { name: "Our Products & Services" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Construction Sand", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Gravel & Aggregates", exact: true })).toBeVisible();
  const requestQuote = page.getByRole("link", { name: "Request Quote", exact: true }).first();
  await tabTo(page, requestQuote);
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL("/contact");
  await expect(page.getByRole("heading", { name: "Contact Us", exact: true, level: 1 })).toBeVisible();
});

test("navigation supports keyboard activation and mobile disclosure", async ({ page }, testInfo) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation");
  const toggle = navigation.getByRole("button", { name: "Toggle menu" });
  const mobile = testInfo.project.name === "mobile";

  if (mobile) {
    await expect(navigation.getByRole("link", { name: "Services", exact: true })).toBeHidden();
    await tabTo(page, toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toHaveAttribute("aria-controls", "mobile-navigation");
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#mobile-navigation")).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(navigation.getByRole("link", { name: "Home", exact: true })).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(toggle).toBeFocused();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("#mobile-navigation")).toBeHidden();
    await page.keyboard.press("Space");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
  } else {
    await expect(toggle).toBeHidden();
  }

  for (const [name, href] of [
    ["Home", "/"],
    ["Services", "/services"],
    ["About Us", "/about"],
    ["Contact", "/contact"],
    ["Privacy Policy", "/privacy-policy"],
    ["Get Quote", "/contact"],
  ]) {
    await expect(navigation.getByRole("link", { name, exact: true })).toHaveAttribute("href", href);
  }
  await expect(navigation.getByRole("link", { name: "Home", exact: true })).toHaveAttribute("aria-current", "page");
  await tabTo(page, navigation.getByRole("link", { name: "Services", exact: true }));
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL("/services");

  if (mobile) {
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("#mobile-navigation")).toBeHidden();
    await tabTo(page, toggle);
    await page.keyboard.press("Enter");
  }
  const getQuote = navigation.getByRole("link", { name: "Get Quote", exact: true });
  await tabTo(page, getQuote);
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL("/contact");
  if (mobile) await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("available quotes are links and coming-soon controls cannot navigate", async ({ page }) => {
  await page.goto("/services");
  const quotes = page.getByRole("link", { name: "Request Quote", exact: true });
  await expect(quotes).toHaveCount(2);
  for (const quote of await quotes.all()) {
    await expect(quote).toHaveAttribute("href", "/contact");
    await expect(quote.locator("button")).toHaveCount(0);
  }
  const unavailable = page.getByRole("button", { name: "Notify Me", exact: true });
  await expect(unavailable).toHaveCount(2);
  for (const button of await unavailable.all()) await expect(button).toBeDisabled();
  await expect(page.getByRole("link", { name: "Notify Me", exact: true })).toHaveCount(0);
  await tabTo(page, quotes.first());
  await page.keyboard.press("Tab");
  await expect(quotes.nth(1)).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("contentinfo").getByRole("link", { name: "Home", exact: true })).toBeFocused();
});

test("contact controls validate locally without pretending to deliver", async ({ page }) => {
  await page.goto("/contact");
  const send = page.getByRole("button", { name: "Send Message", exact: true });
  await tabTo(page, send);
  await page.keyboard.press("Enter");
  await expect(page.getByLabel("Full Name", { exact: true })).toBeFocused();

  const fields = [
    ["Full Name", "Local Reviewer"],
    ["Email Address", "not-an-email"],
    ["Phone Number", "0000000000"],
    ["Subject", "Local browser check"],
    ["Message", "Synthetic browser evidence only. Do not send."],
  ];
  for (const [label, value] of fields) {
    const input = page.getByLabel(label, { exact: true });
    await expect(input).toBeFocused();
    await page.keyboard.insertText(value);
    await page.keyboard.press("Tab");
  }
  await expect(send).toBeFocused();
  await page.keyboard.press("Enter");
  const email = page.getByLabel("Email Address", { exact: true });
  await expect(email).toBeFocused();
  await expect.poll(() => email.evaluate((input) =>
    input instanceof HTMLInputElement && input.validity.typeMismatch
  )).toBe(true);
  await page.keyboard.press("ControlOrMeta+A");
  await page.keyboard.insertText("reviewer@example.test");
  await tabTo(page, send);
  await page.keyboard.press("Enter");

  await expect(page.getByText("Message not sent. Please use the email or phone links on this page.")).toBeVisible();
  await expect(page.getByText("Thank you for your message! We'll get back to you soon.")).toHaveCount(0);
  for (const [label, value] of fields) {
    await expect(page.getByLabel(label, { exact: true })).toHaveValue(
      label === "Email Address" ? "reviewer@example.test" : value
    );
  }
  await expect(page.locator("form")).toHaveAttribute("aria-describedby", "contact-form-note");
  await expect(page.locator("#contact-form-note")).toContainText("not connected");
  await expect(send).toHaveAccessibleDescription(/Online message delivery is not connected/);
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(2);
  for (const link of await page.locator('a[href^="mailto:"]').all()) {
    await expect(link).toHaveAttribute("href", "mailto:gizzetechnology21@gmail.com");
  }
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(3);
  for (const link of await page.locator('a[href^="tel:"]').all()) {
    await expect(link).toHaveAttribute("href", "tel:+251911711111");
  }
  await tabTo(page, page.locator('a[href^="tel:"]').first());
  await tabTo(page, page.locator('a[href^="mailto:"]').first());
  const callNow = page.getByRole("link", { name: "Call Now: +251911711111", exact: true });
  await expect(callNow.locator("button")).toHaveCount(0);
  await tabTo(page, callNow);
  await expect(page.getByRole("contentinfo").getByRole("link", { name: "Contact", exact: true })).toHaveAttribute("href", "/contact");
});
