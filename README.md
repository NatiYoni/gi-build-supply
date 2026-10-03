# 🏗️ GI Technology – Construction Materials & Machinery

**Live Website:** [**https://gi-build-supply.vercel.app/**](https://gi-build-supply.vercel.app/)

## 🌐 Project Info
**GI Technology** is a trusted supplier of **construction materials** such as **sand, gravel, and aggregates**.  
We are also expanding into **construction machinery and heavy equipment**, making us a one-stop solution for builders, contractors, and individuals.  

Our mission is to deliver **reliable, high-quality, and affordable materials** that power successful construction projects.  

This website is being developed to represent the company’s products and services online.

---

## ⚡ Website Features
- 🏠 **Homepage** – Highlights our company vision and services  
- 📦 **Products Page** – Browse available construction materials (sand, gravel, aggregates, etc.)  
- 🛠️ **Machinery Section** – Coming soon: heavy equipment and tools  
- 📞 **Contact Page** – Easy access to quotes and customer support  
- 📱 **Responsive Design** – Optimized for mobile and desktop  

---

## 🚀 Getting Started (Development)
Use Node.js 22 or 24 and npm with the checked-in `package-lock.json`.

```sh
git clone https://github.com/NatiYoni/gi-build-supply.git
cd gi-build-supply
npm ci
npm run dev -- --host 127.0.0.1 --port 3012 --strictPort
```

Open `http://127.0.0.1:3012/`. No environment file or credentials are required.
Products are listed at `/services`; quote links lead to `/contact`.

## Local Browser Evidence
See the [website journey evidence guide](docs/website-evidence.md) for reproducible
desktop/mobile checks, a local screenshot, and the limits of this evidence.

```sh
# Stop the development server first; the checks own port 3012.
npx --no-install playwright install chromium --only-shell
npm run test:browser
```

The contact form has no delivery backend. It now reports that limitation and keeps
entered text; use the existing email or phone links for an actual inquiry. The
checks do not activate those links or contact live services.

---

## 🛠️ Technologies Used
- **React** – Modern frontend framework  
- **TypeScript** – Type-safe development  
- **Vite** – Fast dev server & build tool  
- **Tailwind CSS** – Utility-first styling  
- **shadcn/ui** – Pre-built UI components  

---

## 🌍 Deployment
You can deploy GI Technology’s website using:  
- **Vercel**  
- **Netlify**  
- **Render**  
- Or your own hosting / server  

---

## 📞 Contact – GI Technology
For inquiries and orders:  
- **Phone:** +251911711111
- **Email:** gizzetechnology21@gmail.com  
- **Office Address:** [office location]  

---

## 👨‍💻 Developers
This project is being developed by:  
- **Natnael Yonas**  
- **Milkiyas Hailu**  
