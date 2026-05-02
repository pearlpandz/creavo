import React from "react";
import { FaFileContract } from "react-icons/fa";
import PolicyPage, { PolicySection, PolicySubSection, PolicyText, PolicyList } from "../components/PolicyPage";

const termsContent = [
  {
    title: "Introduction",
    content: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and Karthikeya Business Solutions Pvt Ltd. ("CREAVO", "we", "our", or "us"). By accessing or using the Platform, you agree to be bound by these Terms and all applicable policies.`,
  },
  {
    title: "1. Eligibility and Account Requirements",
    subsections: [
      { subtitle: "1.1 Legal Eligibility", list: ["You must be at least 18 years of age", "You must have the legal capacity to enter into binding contracts", "All information provided must be accurate and complete"] },
      { subtitle: "1.2 Account Security", content: "Account access is authenticated through OTP verification. You are solely responsible for maintaining confidentiality of your credentials and all activities under your account.", list: ["Maintaining the confidentiality of your login credentials", "All activities conducted under your account", "Immediately notifying us of any unauthorized access"] },
      { subtitle: "1.3 Account Restrictions", list: ["One Account Policy: Each user may maintain only one active account", "No Automated Access: Bots, scripts, or automated tools are strictly prohibited", "Personal Use Only: Accounts are non-transferable"] },
    ],
  },
  {
    title: "2. Services and Subscription",
    subsections: [
      { subtitle: "2.1 Service Availability", list: ["CREAVO provides creative content generation and editing tools", "Certain premium features require an active subscription", "Services are provided on an \"as available\" basis"] },
      { subtitle: "2.2 Subscription Terms", list: ["Non-transferable: Subscriptions cannot be transferred between accounts", "Time-bound: Access is limited to the subscription period purchased", "Auto-renewal: Subscriptions may auto-renew unless cancelled prior to renewal date"] },
      { subtitle: "2.3 Payment Processing", content: "Payments are processed through third-party providers (Razorpay, PhonePe, Paytm, etc.). CREAVO is not liable for payment processor failures or delays." },
      { subtitle: "2.4 Pricing and Taxes", list: ["All fees are inclusive of applicable GST under Indian law", "Prices are subject to change with prior notice"] },
    ],
  },
  {
    title: "3. Acceptable Use Policy",
    subsections: [
      { subtitle: "3.1 Permitted Use", list: ["Create and edit original content for personal or commercial purposes", "Access premium features included in your subscription", "Share content in accordance with these Terms"] },
      { subtitle: "3.2 Prohibited Activities", list: ["Upload content that infringes copyright or intellectual property rights", "Post defamatory, obscene, or unlawful material", "Use automated tools to scrape or extract data without permission", "Create multiple accounts or share account access", "Violate any applicable laws including IT Act or cybercrime laws"] },
    ],
  },
  {
    title: "4. Content Ownership and Licensing",
    subsections: [
      { subtitle: "4.1 Your Content Rights", content: "You retain full ownership of original content you create or upload. By using the Platform, you grant CREAVO a limited, non-exclusive, royalty-free license to store and display your content as necessary to provide our service." },
      { subtitle: "4.2 CREAVO's Content", content: "CREAVO retains all intellectual property rights in templates, tools, AI-generated elements, and platform features. Content created using CREAVO's proprietary elements may not be redistributed commercially without permission." },
    ],
  },
  {
    title: "5. Data Retention and Privacy",
    subsections: [
      { subtitle: "5.1 Retention Periods", content: "User data is retained during active subscription periods, up to 90 days after account deletion, and longer if required by applicable law." },
      { subtitle: "5.2 Deletion Requests", content: "Users may request data deletion by contacting support@creavo.app. Requests will be processed within 15 business days." },
    ],
  },
  {
    title: "6. Disclaimers and Limitation of Liability",
    subsections: [
      { subtitle: "6.1 Service Disclaimers", list: ["The Platform is provided \"AS IS\" without warranties of any kind", "CREAVO does not guarantee uninterrupted or error-free service", "Users assume all risks associated with Platform use"] },
      { subtitle: "6.2 Limitation of Liability", content: "CREAVO's total liability shall not exceed fees paid in the preceding 12 months. We are not liable for indirect, incidental, or consequential damages." },
    ],
  },
  {
    title: "7. Governing Law and Dispute Resolution",
    subsections: [
      { subtitle: "7.1 Governing Law", content: "These Terms are governed by the laws of India, without regard to conflict of law principles." },
      { subtitle: "7.2 Jurisdiction", content: "Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka, India." },
    ],
  },
  {
    title: "8. Contact Information",
    content: "For questions about these Terms, please contact us at legal@creavo.app or support@creavo.app.\n\nAddress: 1010, Manjeera Trinety Corporate, KPHB, JNTU-HITECH CITY ROAD, Hyderabad, Telangana 500072.",
  },
];

const TermsOfService = () => (
  <PolicyPage
    title="Terms of Service"
    subtitle="Last Updated: 21-12-2025"
    icon={<FaFileContract size={28} />}
  >
    <PolicySection>
      <PolicyText>
        These Terms of Service govern your access to and use of CREAVO's platform, including our websites, mobile applications, and related services. By using the Platform, you agree to be bound by these Terms.
      </PolicyText>
    </PolicySection>

    {termsContent.map((section, i) => (
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
      <PolicyText style={{ fontWeight: 700 }}>
        By using CREAVO's Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
      </PolicyText>
    </PolicySection>
  </PolicyPage>
);

export default TermsOfService;
