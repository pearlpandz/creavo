import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import PolicyPage, { PolicySection, PolicySubSection, PolicyText, PolicyList } from "../components/PolicyPage";

const refundContent = [
  {
    title: "Our Subscription Plans",
    content: "CREAVO offers flexible subscription plans to suit your creative needs:",
    subsections: [
      { subtitle: "Plan Options", list: ["Monthly Plan: Access for 30 days — Perfect for short-term projects", "Quarterly Plan: Access for 90 days — Great value for ongoing work", "Annual Plan: Access for 365 days — Best value with maximum savings"] },
      { subtitle: "What You Get", list: ["Access to premium templates and designs", "Advanced editing tools and features", "High-resolution downloads", "Priority customer support", "Regular content updates", "Commercial usage rights"] },
    ],
  },
  {
    title: "Payment Methods We Accept",
    subsections: [
      { subtitle: "Credit / Debit Cards", list: ["All major cards accepted (Visa, Mastercard, RuPay, American Express)", "Secure payment processing through trusted gateways", "Instant activation upon successful payment"] },
      { subtitle: "UPI and Digital Wallets", list: ["UPI payments (Google Pay, PhonePe, Paytm, etc.)", "Popular digital wallets", "Bank-to-bank transfers"] },
      { subtitle: "Net Banking", list: ["All major Indian banks supported", "Secure banking integration"] },
    ],
  },
  {
    title: "How Auto-Renewal Works",
    subsections: [
      { subtitle: "For Mobile App Users (iOS / Android)", list: ["Payment: Charged to your Apple ID or Google Play account", "Auto-Renewal: Happens automatically unless you cancel 24 hours before expiry", "Management: Control your subscription through your device's account settings"] },
      { subtitle: "For UPI AutoPay Users", list: ["Early Renewal: May renew up to 96 hours before expiry for uninterrupted service", "Failed Payments: We'll retry for up to 20 days if payment fails", "Control: Disable AutoPay anytime through your UPI app"] },
    ],
  },
  {
    title: "How to Cancel Your Subscription",
    subsections: [
      { subtitle: "Option 1: Through Your Account", list: ["Log into your CREAVO account", "Go to \"Subscription Settings\"", "Click \"Cancel Subscription\" and confirm"] },
      { subtitle: "Option 2: Through Payment Provider", list: ["iOS Users: Apple App Store → Account Settings → Subscriptions", "Android Users: Google Play Store → Account → Subscriptions", "UPI Users: Your UPI app → AutoPay settings"] },
      { subtitle: "Option 3: Contact Support", list: ["Email: support@creavo.com", "We'll help you cancel within 24 hours"] },
    ],
  },
  {
    title: "Our Refund Policy",
    subsections: [
      { subtitle: "Standard Policy", content: "We maintain a no-refund policy for all subscriptions. This means no refunds for partial usage, early cancellation, or unused time after cancellation." },
      {
        subtitle: "Exceptions — We May Offer Refunds",
        content: "We understand sometimes things go wrong. We may consider refunds in these situations:",
        subcategories: [
          { category: "Technical Issues", list: ["Service unavailable for more than 72 hours", "Major bugs preventing platform use", "Payment processing errors"] },
          { category: "Billing Errors", list: ["Duplicate charges for the same service", "Incorrect plan charged", "Unauthorized transactions"] },
          { category: "Special Circumstances", list: ["Medical emergencies with documentation", "Account security breaches", "Platform policy violations by CREAVO"] },
        ],
      },
      { subtitle: "How to Request a Refund Exception", list: ["Contact support@creavo.com within 7 days", "Explain your situation clearly", "Provide relevant documentation", "We'll review and respond within 3–5 business days"] },
    ],
  },
  {
    title: "Invoices and Billing",
    subsections: [
      { subtitle: "Getting Your Invoice", list: ["Automatic: Emailed after every successful payment", "Manual Request: Email support@creavo.com within 30 days", "Details Included: Plan type, duration, taxes, payment method"] },
      { subtitle: "Understanding Your Bill", list: ["All prices include applicable GST (where required)", "International users may see currency conversion", "Payment gateway charges (if any) are clearly shown"] },
    ],
  },
  {
    title: "Need Help?",
    subsections: [
      { subtitle: "Customer Support", list: ["Email: support@creavo.com", "Response Time: Within 24 hours", "Business Hours: Monday–Friday, 9 AM – 6 PM IST"] },
      { subtitle: "Grievance Officer", list: ["Name: HCR — Head of Customer Relations", "Email: grievance@creavo.com", "Phone: 87 507 49 299"] },
    ],
  },
  {
    title: "Company Information",
    content: "Karthikeya Business Solutions Pvt Ltd.\nAddress: 1010, Manjeera Trinety Corporate, KPHB, JNTU-HITECH CITY ROAD, Hyderabad, Telangana 500072\nEmail: support@creavo.com\nWebsite: www.creavo.in",
  },
];

const RefundPolicy = () => (
  <PolicyPage
    title="Refund Policy"
    subtitle="Effective Date: 26-11-2025 · Last Updated: 21-12-2025"
    icon={<FaMoneyCheckAlt size={28} />}
  >
    <PolicySection>
      <PolicyText>
        Welcome to CREAVO! This policy explains everything you need to know about our subscription plans, payments, cancellations, and refunds. Please read this policy together with our Terms of Service and Privacy Policy.
      </PolicyText>
    </PolicySection>

    {refundContent.map((section, i) => (
      <PolicySection key={i} title={section.title}>
        {section.content && section.content.split("\n").map((line, j) => <PolicyText key={j}>{line}</PolicyText>)}
        {section.list && <PolicyList items={section.list} />}
        {section.subsections && section.subsections.map((sub, j) => (
          <PolicySubSection key={j} title={sub.subtitle}>
            {sub.content && sub.content.split("\n").map((line, k) => <PolicyText key={k}>{line}</PolicyText>)}
            {sub.list && <PolicyList items={sub.list} />}
            {sub.subcategories && sub.subcategories.map((cat, k) => (
              <div key={k} style={{ marginTop: 10 }}>
                <p style={{ fontWeight: 700, color: "#4c2978", fontSize: "0.9rem", marginBottom: 4 }}>{cat.category}</p>
                <PolicyList items={cat.list} />
              </div>
            ))}
          </PolicySubSection>
        ))}
      </PolicySection>
    ))}

    <PolicySection>
      <PolicyText>
        Thank you for choosing CREAVO! We're committed to providing you with the best creative tools and excellent customer service. By subscribing to CREAVO, you agree to these terms. Questions? We're always happy to help at support@creavo.com.
      </PolicyText>
    </PolicySection>
  </PolicyPage>
);

export default RefundPolicy;
