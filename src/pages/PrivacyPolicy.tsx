import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// --- Define company information here for easy updates ---
const companyInfo = {
    name: "GI Technology",
    email: "gizzetechnology21@gmail.com",
    phone: "+251911711111", // Use a format without spaces for the tel link
    displayPhone: "+251 911 711 111", // A display-friendly version
    address: "Addis Ababa, Ethiopia",
    governingLaw: "the laws of the Federal Democratic Republic of Ethiopia"
};

const PolicySection: React.FC<{ title: string; effectiveDate: string; children: React.ReactNode }> = ({ title, effectiveDate, children }) => (
    <section className="mb-12">
        <header className="border-b pb-4 mb-6">
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
            <p className="text-md text-gray-500 mt-1">Effective Date: {effectiveDate}</p>
        </header>
        <div className="prose prose-lg max-w-none space-y-6">
            {children}
        </div>
    </section>
);

const PolicyPoint: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <div className="text-gray-700">{children}</div>
    </div>
);

export default function PrivacyPolicy(): JSX.Element {
    return (
        <div>
            <Navigation />
            <main className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-8">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10">
                    
                    {/* --- Privacy Policy Section --- */}
                    <PolicySection title="Privacy Policy" effectiveDate="October 8, 2025">
                        <p>Welcome to {companyInfo.name}. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application to buy, sell, and order sand.</p>
                        
                        <PolicyPoint title="1. Information We Collect">
                            <p>We collect information such as your name, phone number, email address, and location when you register or make a transaction.</p>
                        </PolicyPoint>

                        <PolicyPoint title="2. How We Use Your Information">
                            <p>We use your information to process transactions, improve user experience, and ensure platform security.</p>
                        </PolicyPoint>

                        <PolicyPoint title="3. Sharing of Information">
                            <p>We do not sell your data. Information is only shared with logistics partners, payment processors, and legal authorities if required.</p>
                        </PolicyPoint>

                        <PolicyPoint title="4. Data Security">
                            <p>We implement strict security measures to protect your personal data from unauthorized access or misuse.</p>
                        </PolicyPoint>

                        <PolicyPoint title="5. Your Rights">
                            <p>You can request to access, update, or delete your personal data anytime.</p>
                        </PolicyPoint>

                        <PolicyPoint title="6. Contact Us">
                            <p>
                                Email: <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:underline">{companyInfo.email}</a> | 
                                Phone: <a href={`tel:${companyInfo.phone}`} className="text-blue-600 hover:underline">{companyInfo.displayPhone}</a> | 
                                {` ${companyInfo.address}`}
                            </p>
                        </PolicyPoint>
                    </PolicySection>

                    {/* --- Terms & Conditions Section --- */}
                    <PolicySection title="Terms & Conditions" effectiveDate="October 8, 2025">
                        <PolicyPoint title="1. Introduction">
                            <p>These Terms govern your use of the {companyInfo.name} mobile app that enables users to buy, sell, and order sand.</p>
                        </PolicyPoint>

                        <PolicyPoint title="2. Account Registration">
                            <p>You must provide accurate and complete information. You are responsible for maintaining your account credentials.</p>
                        </PolicyPoint>

                        <PolicyPoint title="3. Orders and Payments">
                            <p>Payments can be made via cash on delivery or digital channels. Refunds are processed within 7–10 business days for valid claims.</p>
                        </PolicyPoint>

                        <PolicyPoint title="4. Sellers’ Responsibilities">
                            <p>Sellers must ensure that their listings are accurate and that products meet quality standards.</p>
                        </PolicyPoint>

                        <PolicyPoint title="5. Limitation of Liability">
                            <p>{companyInfo.name} is not responsible for delivery delays or product defects caused by third-party providers.</p>
                        </PolicyPoint>

                        <PolicyPoint title="6. Governing Law">
                            <p>These Terms are governed by {companyInfo.governingLaw}.</p>
                        </PolicyPoint>
                    </PolicySection>

                </div>
            </main>
            <Footer />
        </div>
    );
}