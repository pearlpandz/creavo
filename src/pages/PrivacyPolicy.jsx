import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import PolicyPage, { PolicySection, PolicySubSection, PolicyText, PolicyList } from "../components/PolicyPage";

const privacyContent = [
  {
    title: "1. Information We Collect",
    content: "CREAVO collects only the minimum personal information necessary to provide our services effectively.",
    subsections: [
      { subtitle: "1.1 Information You Provide Directly", list: ["Contact Information: Mobile number, email address, and name", "Profile Information: Profile picture, preferences, and account settings", "Content Data: User-generated content, projects, designs, and creative works", "Communication Data: Messages, feedback, support requests, and survey responses"] },
      { subtitle: "1.2 Information Collected Automatically", list: ["Device Information: Device type, model, operating system, browser type", "Technical Data: IP address, device identifiers, app version, crash reports", "Usage Analytics: Feature usage patterns, session duration, click streams", "Location Data: General geographic location (city/region level) from IP address"] },
      { subtitle: "1.3 Third-Party Information", list: ["Payment Data: Transactions processed through Razorpay, PhonePe, etc.", "Social Integration: Information from connected social media accounts (with consent)", "Marketing Data: Information from marketing partners and analytics services"] },
    ],
  },
  {
    title: "2. How We Use Your Information",
    subsections: [
      { subtitle: "2.1 Service Delivery", list: ["Account creation, authentication, and management", "Providing core platform features and functionality", "Processing subscriptions and managing billing", "Personalizing user experience and content recommendations"] },
      { subtitle: "2.2 Communication", list: ["Sending important service notifications and updates", "Providing customer support and technical assistance", "Delivering marketing communications (with consent)"] },
      { subtitle: "2.3 Security and Compliance", list: ["Detecting and preventing fraud, abuse, and security threats", "Ensuring platform integrity and user safety", "Complying with legal obligations and regulatory requirements"] },
    ],
  },
  {
    title: "3. Information Sharing and Disclosure",
    content: "CREAVO limits information sharing to the following circumstances:",
    subsections: [
      { subtitle: "3.1 Service Providers", list: ["Trusted third-party vendors under strict confidentiality agreements", "Cloud hosting providers, payment processors, and analytics services"] },
      { subtitle: "3.2 Legal Requirements", list: ["Government agencies or law enforcement upon valid legal request", "Court orders, subpoenas, or other legal processes"] },
      { subtitle: "3.3 User Consent", list: ["When you explicitly authorize information sharing", "For specific features that require data sharing (e.g., collaboration tools)"] },
    ],
  },
  {
    title: "4. Data Security and Protection",
    subsections: [
      { subtitle: "4.1 Technical Safeguards", list: ["End-to-end encryption for sensitive data transmission", "Secure database storage with advanced encryption protocols", "Multi-factor authentication and access controls", "Regular security audits and vulnerability assessments"] },
      { subtitle: "4.2 Organizational Measures", list: ["Role-based access control with principle of least privilege", "Employee privacy and security training programs", "Incident response and breach notification procedures"] },
    ],
  },
  {
    title: "5. Data Retention and Deletion",
    subsections: [
      { subtitle: "5.1 Retention Period", content: "Personal information is retained only as long as necessary for service provision or as required by law. Active account data is retained during the subscription period and for a reasonable period thereafter." },
      { subtitle: "5.2 Data Deletion", content: "Users may request deletion of their personal information by contacting support@creavo.com. Deletion requests are processed within 15 business days, subject to legal obligations." },
    ],
  },
  {
    title: "6. Your Privacy Rights",
    content: "Subject to applicable law, you have the following rights regarding your personal information:",
    subsections: [
      { subtitle: "6.1 Access and Portability", list: ["Request access to your personal information", "Obtain copies of your data in a portable format"] },
      { subtitle: "6.2 Correction and Update", list: ["Request correction of inaccurate or incomplete information", "Update your account information directly through platform settings"] },
      { subtitle: "6.3 Deletion and Restriction", list: ["Request deletion of your personal information", "Request restriction or objection to specific processing activities"] },
      { subtitle: "6.4 Consent Management", list: ["Withdraw consent for marketing communications", "Modify privacy preferences and data sharing settings"] },
    ],
  },
  {
    title: "7. Cookies and Tracking Technologies",
    subsections: [
      { subtitle: "7.1 Cookie Usage", list: ["Essential Cookies: Required for basic platform functionality and security", "Performance Cookies: Analyze platform usage and performance metrics", "Functionality Cookies: Remember user preferences and settings", "Marketing Cookies: Deliver personalized content and advertisements"] },
      { subtitle: "7.2 Cookie Management", list: ["Users can manage cookie preferences through browser settings", "Disabling certain cookies may affect platform functionality", "Third-party cookies are governed by respective third-party privacy policies"] },
    ],
  },
  {
    title: "8. Children's Privacy",
    content: "CREAVO services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. Parents or guardians should contact us immediately if they believe their child has provided personal information.",
  },
  {
    title: "9. Contact Information",
    content: "For questions, concerns, or requests regarding this Privacy Policy:\n\nEmail: support@creavo.com\nPhone: 87 507 49 299\n\nPostal Address: 1010, Manjeera Trinety Corporate, KPHB, JNTU-HITECH CITY ROAD, Hyderabad, Telangana 500072.",
  },
];

const PrivacyPolicy = () => (
  <PolicyPage
    title="Privacy Policy"
    subtitle="Effective Date: 26-11-2025 · Last Updated: 21-12-2025"
    icon={<FaShieldAlt size={28} />}
  >
    <PolicySection>
      <PolicyText>
        This Privacy Policy describes how Karthikeya Business Solutions Pvt Ltd. ("CREAVO") collects, uses, stores, and discloses personal information of users who access or interact with the CREAVO platform. By using our Platform, you agree to the collection and use of your information in accordance with this Policy.
      </PolicyText>
    </PolicySection>

    {privacyContent.map((section, i) => (
      <PolicySection key={i} title={section.title}>
        {section.content && section.content.split("\n").map((line, j) => <PolicyText key={j}>{line}</PolicyText>)}
        {section.list && <PolicyList items={section.list} />}
        {section.subsections && section.subsections.map((sub, j) => (
          <PolicySubSection key={j} title={sub.subtitle}>
            {sub.content && sub.content.split("\n").map((line, k) => <PolicyText key={k}>{line}</PolicyText>)}
            {sub.list && <PolicyList items={sub.list} />}
          </PolicySubSection>
        ))}
      </PolicySection>
    ))}

    <PolicySection>
      <PolicyText>
        By using CREAVO services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
      </PolicyText>
    </PolicySection>
  </PolicyPage>
);

export default PrivacyPolicy;
