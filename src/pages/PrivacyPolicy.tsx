import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Privacy Policy</h1>
          <p className="text-white/90">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-card">
            <CardContent className="pt-6 prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure 
                of Your information when You use the Service and tells You about Your privacy rights and how the 
                law protects You.
              </p>

              <p className="text-muted-foreground mb-8">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to 
                the collection and use of information in accordance with this Privacy Policy.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8">Interpretation and Definitions</h2>
              
              <h3 className="text-2xl font-bold mb-3 mt-6">Interpretation</h3>
              <p className="text-muted-foreground mb-6">
                The words of which the initial letter is capitalized have meanings defined under the following 
                conditions. The following definitions shall have the same meaning regardless of whether they 
                appear in singular or in plural.
              </p>

              <h3 className="text-2xl font-bold mb-3 mt-6">Definitions</h3>
              <p className="text-muted-foreground mb-4">For the purposes of this Privacy Policy:</p>
              
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li>
                  <strong>Account</strong> means a unique account created for You to access our Service or parts 
                  of our Service.
                </li>
                <li>
                  <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this 
                  Agreement) refers to GI TECHNOLOGIES, 123 Construction Avenue, Builder City, BC 12345.
                </li>
                <li>
                  <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any 
                  other device by a website, containing the details of Your browsing history on that website among 
                  its many uses.
                </li>
                <li>
                  <strong>Country</strong> refers to United States.
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the Service such as a computer, a cell 
                  phone or a digital tablet.
                </li>
                <li>
                  <strong>Personal Data</strong> is any information that relates to an identified or identifiable 
                  individual.
                </li>
                <li>
                  <strong>Service</strong> refers to the Website.
                </li>
                <li>
                  <strong>Service Provider</strong> means any natural or legal person who processes the data on 
                  behalf of the Company.
                </li>
                <li>
                  <strong>Website</strong> refers to GI TECHNOLOGIES, accessible from gitechnologies.com
                </li>
                <li>
                  <strong>You</strong> means the individual accessing or using the Service, or the company, or 
                  other legal entity on behalf of which such individual is accessing or using the Service, as 
                  applicable.
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-8">Collecting and Using Your Personal Data</h2>
              
              <h3 className="text-2xl font-bold mb-3 mt-6">Types of Data Collected</h3>
              
              <h4 className="text-xl font-semibold mb-3 mt-4">Personal Data</h4>
              <p className="text-muted-foreground mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable 
                information that can be used to contact or identify You. Personally identifiable information may 
                include, but is not limited to:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
              </ul>

              <h4 className="text-xl font-semibold mb-3 mt-4">Usage Data</h4>
              <p className="text-muted-foreground mb-6">
                Usage Data is collected automatically when using the Service. Usage Data may include information 
                such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, 
                the pages of our Service that You visit, the time and date of Your visit, the time spent on those 
                pages, unique device identifiers and other diagnostic data.
              </p>

              <h3 className="text-2xl font-bold mb-3 mt-6">Use of Your Personal Data</h3>
              <p className="text-muted-foreground mb-4">The Company may use Personal Data for the following purposes:</p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li>
                  <strong>To provide and maintain our Service</strong>, including to monitor the usage of our 
                  Service.
                </li>
                <li>
                  <strong>To manage Your Account</strong>: to manage Your registration as a user of the Service.
                </li>
                <li>
                  <strong>To contact You</strong>: To contact You by email, telephone calls, SMS, or other 
                  equivalent forms of electronic communication regarding updates or informative communications.
                </li>
                <li>
                  <strong>To provide You</strong> with news, special offers and general information about other 
                  goods, services and events which we offer that are similar to those that you have already 
                  purchased or enquired about unless You have opted not to receive such information.
                </li>
                <li>
                  <strong>To manage Your requests</strong>: To attend and manage Your requests to Us.
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-8">Security of Your Personal Data</h2>
              <p className="text-muted-foreground mb-8">
                The security of Your Personal Data is important to Us, but remember that no method of transmission 
                over the Internet, or method of electronic storage is 100% secure. While We strive to use 
                commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute 
                security.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, You can contact us:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>By email: info@gitechnologies.com</li>
                <li>By phone: +1 (555) 123-4567</li>
                <li>By mail: 123 Construction Avenue, Builder City, BC 12345</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
