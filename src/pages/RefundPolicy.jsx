    import React from "react";

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
    lineHeight: "1.7",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "8px",
    fontWeight: 700,
    textAlign: "center",
    background: "linear-gradient(135deg, #4a90e2 0%, #d946ef 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  updated: {
    color: "#777",
    marginBottom: "30px",
  },
  intro: {
    marginTop: "20px",
    marginBottom: "40px",
  },
  sectionTitle: {
    marginTop: "32px",
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  subsectionTitle: {
    marginTop: "20px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  paragraph: {
    marginTop: "12px",
  },
  list: {
    marginTop: "12px",
    marginLeft: "24px",
  },
  sublist: {
    marginTop: "8px",
    marginLeft: "24px",
  },
};

const refundContent = [
  {
    intro: `Welcome to CREAVO! This policy explains everything you need to know about our subscription plans, payments, cancellations, and refunds in simple, easy-to-understand terms. Please read this policy together with our Terms of Service and Privacy Policy.`,
  },
  {
    title: "Our Subscription Plans",
    content: "CREAVO offers flexible subscription plans to suit your creative needs:",
    subsections: [
      {
        subtitle: "Plan Options:",
        list: [
          "Monthly Plan: Access for 30 days - Perfect for short-term projects",
          "Quarterly Plan: Access for 90 days - Great value for ongoing work",
          "Annual Plan: Access for 365 days - Best value with maximum savings",
        ],
      },
      {
        subtitle: "What You Get:",
        list: [
          "Access to premium templates and designs",
          "Advanced editing tools and features",
          "High-resolution downloads",
          "Priority customer support",
          "Regular content updates",
          "Commercial usage rights",
        ],
      },
    ],
  },
  {
    title: "Payment Methods We Accept",
    subsections: [
      {
        subtitle: "Credit/Debit Cards",
        list: [
          "All major cards accepted (Visa, Mastercard, RuPay, American Express)",
          "Secure payment processing through trusted gateways",
          "Instant activation upon successful payment",
        ],
      },
      {
        subtitle: "UPI and Digital Wallets",
        list: [
          "UPI payments (Google Pay, PhonePe, Paytm, etc.)",
          "Popular digital wallets",
          "Bank-to-bank transfers",
        ],
      },
      {
        subtitle: "Net Banking",
        list: [
          "All major Indian banks supported",
          "Secure banking integration",
        ],
      },
    ],
  },
  {
    title: "How Auto-Renewal Works",
    subsections: [
      {
        subtitle: "For Mobile App Users (iOS/Android):",
        list: [
          "Payment: Charged to your Apple ID or Google Play account",
          "Auto-Renewal: Happens automatically unless you cancel 24 hours before your plan expires",
          "Management: Control your subscription through your device's account settings",
          "Timing: Renewal charge may appear up to 24 hours before expiry",
        ],
      },
      {
        subtitle: "For UPI AutoPay Users:",
        list: [
          "Early Renewal: May renew up to 96 hours before expiry to ensure uninterrupted service",
          "Failed Payments: We'll retry for up to 20 days if payment fails",
          "Backup Options: You can always pay manually if AutoPay fails",
          "Control: Disable AutoPay anytime through your UPI app",
        ],
      },
    ],
  },
  {
    title: "How to Cancel Your Subscription",
    content: "Easy Cancellation Options:",
    subsections: [
      {
        subtitle: "Option 1: Through Your Account",
        list: [
          "1. Log into your CREAVO account",
          "2. Go to \"Subscription Settings\"",
          "3. Click \"Cancel Subscription\"",
          "4. Confirm your cancellation",
        ],
      },
      {
        subtitle: "Option 2: Through Payment Provider",
        list: [
          "iOS Users: Apple App Store → Account Settings → Subscriptions",
          "Android Users: Google Play Store → Account → Subscriptions",
          "UPI Users: Your UPI app → AutoPay settings",
        ],
      },
      {
        subtitle: "Option 3: Contact Support",
        list: [
          "Email: support@creavo.com",
          "We'll help you cancel within 24 hours",
        ],
      },
    ],
    extra: "Important Notes:\n• You keep access until your current billing period ends\n• No cancellation fees\n• You can resubscribe anytime\n• No refunds for unused time after cancellation",
  },
  {
    title: "Our Refund Policy",
    subsections: [
      {
        subtitle: "Standard Policy:",
        content: "We maintain a no-refund policy for all subscriptions. This means:\n• No refunds for partial usage\n• No refunds for early cancellation\n• No refunds for duplicate payments",
      },
      {
        subtitle: "Exceptions (We May Offer Refunds):",
        content: "We understand sometimes things go wrong. We may consider refunds in these situations:",
        subcategories: [
          {
            category: "Technical Issues:",
            list: [
              "Service unavailable for more than 72 hours",
              "Major bugs preventing platform use",
              "Payment processing errors",
            ],
          },
          {
            category: "Billing Errors:",
            list: [
              "Duplicate charges for the same service",
              "Incorrect plan charged",
              "Unauthorized transactions",
            ],
          },
          {
            category: "Special Circumstances:",
            list: [
              "Medical emergencies with documentation",
              "Account security breaches",
              "Platform policy violations by CREAVO",
            ],
          },
        ],
      },
      {
        subtitle: "How to Request a Refund Exception:",
        list: [
          "1. Contact support@creavo.com within 7 days",
          "2. Explain your situation clearly",
          "3. Provide relevant documentation",
          "4. We'll review and respond within 3-5 business days",
        ],
      },
    ],
  },
  {
    title: "Invoices and Billing",
    subsections: [
      {
        subtitle: "Getting Your Invoice:",
        list: [
          "Automatic: Emailed after every successful payment",
          "Manual Request: Email support@creavo.com within 30 days",
          "Details Included: Plan type, duration, taxes, payment method",
        ],
      },
      {
        subtitle: "Understanding Your Bill:",
        list: [
          "All prices include applicable GST (where required)",
          "International users may see currency conversion",
          "Payment gateway charges (if any) are clearly shown",
        ],
      },
    ],
  },
  {
    title: "Taxes and Compliance",
    subsections: [
      {
        subtitle: "Indian Users:",
        list: [
          "GST included in all subscription prices",
          "Compliant with RBI and NPCI regulations",
          "Proper tax invoicing provided",
        ],
      },
      {
        subtitle: "International Users:",
        list: [
          "Local taxes may apply based on your location",
          "Currency conversion at current market rates",
          "Compliance with local payment regulations",
        ],
      },
    ],
  },
  {
    title: "Disputes and Chargebacks",
    subsections: [
      {
        subtitle: "Before Filing a Chargeback:",
        list: [
          "1. Contact Us First: Email support@creavo.com",
          "2. Give Us 5 Days: Most issues are resolved quickly",
          "3. Avoid Account Issues: Unjustified chargebacks may lead to account suspension",
        ],
      },
      {
        subtitle: "Dispute Resolution Process:",
        list: [
          "1. Submit your concern with details",
          "2. We investigate within 2 business days",
          "3. Provide resolution or explanation",
          "4. Escalate to management if needed",
        ],
      },
    ],
  },
  {
    title: "Need Help?",
    subsections: [
      {
        subtitle: "Customer Support:",
        list: [
          "Email: support@creavo.com",
          "Response Time: Within 24 hours",
          "Business Hours: Monday-Friday, 9 AM - 6 PM IST",
        ],
      },
      {
        subtitle: "Billing Support:",
        content: "Email: Support@creavo.com\nFor: Payment issues, invoice requests, billing questions",
      },
      {
        subtitle: "Grievance Officer:",
        list: [
          "Name: HCR",
          "Title: Head of Customer Relations",
          "Email: grievance@creavo.com",
          "Phone: 87 507 49 299",
        ],
      },
    ],
  },
  {
    title: "Company Information",
    content: `Karthikeya Business Solutions PRIVATE LIMITED
Address: 1010, Manjeera Trinety corporate, KPHB, JNTU- HITECH CITY ROAD, pin 500072
Email: support@creavo.com
Website: www.creavo.in`,
  },
  {
    title: "Legal Information",
    subsections: [
      {
        subtitle: "Governing Law:",
        content: "This policy is governed by Indian law, specifically:\n• Information Technology Act, 2000\n• Consumer Protection Act, 2019\n• Goods and Services Tax regulations",
      },
      {
        subtitle: "Jurisdiction:",
        content: "Courts in [Insert City], India have exclusive jurisdiction over disputes.",
      },
      {
        subtitle: "Policy Updates:",
        list: [
          "We may update this policy with reasonable notice",
          "Continued use means acceptance of changes",
          "Material changes will be communicated directly",
        ],
      },
    ],
  },
  {
    title: "Important Reminders",
    subsections: [
      {
        subtitle: "Before You Subscribe:",
        list: [
          "Try our free version first",
          "Choose the right plan for your needs",
          "Understand auto-renewal terms",
          "Save your payment confirmation",
        ],
      },
      {
        subtitle: "Managing Your Subscription:",
        list: [
          "Check renewal dates regularly",
          "Update payment methods before expiry",
          "Cancel before renewal if not continuing",
          "Keep invoices for your records",
        ],
      },
      {
        subtitle: "Getting Help:",
        list: [
          "Contact support for any questions",
          "Provide clear details when reporting issues",
          "Check our FAQ section first",
          "Be patient - we're here to help!",
        ],
      },
    ],
  },
  {
    finalNote: `Thank you for choosing CREAVO! We're committed to providing you with the best creative tools and excellent customer service.

This policy should be read together with our Terms of Service and Privacy Policy.

By subscribing to CREAVO, you agree to these terms.

Questions? We're always happy to help at support@creavo.com`,
  },
];

const RefundPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CREAVO Pricing, Payments, and Refund Policy</h1>
      <p style={styles.updated}>
        Effective Date: 26-11-2025<br />
        Last Updated: 21-12-2025
      </p>

      {refundContent.map((section, index) => (
        <section key={index}>
          {section.intro && (
            <p style={styles.intro}>
              {section.intro.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}

          {section.title && <h2 style={styles.sectionTitle}>{section.title}</h2>}

          {section.content && (
            <p style={styles.paragraph}>
              {section.content.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}

          {section.extra && (
            <p style={styles.paragraph}>
              {section.extra.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}

          {section.list && (
            <ul style={styles.list}>
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.subsections &&
            section.subsections.map((sub, subIdx) => (
              <div key={subIdx}>
                <h3 style={styles.subsectionTitle}>{sub.subtitle}</h3>
                {sub.content && (
                  <p style={styles.paragraph}>
                    {sub.content.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                )}
                {sub.list && (
                  <ul style={styles.sublist}>
                    {sub.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

          {section.subcategories && (
            <>
              {section.subcategories.map((cat, catIdx) => (
                <div key={catIdx}>
                  <p style={styles.paragraph}><strong>{cat.category}</strong></p>
                  <ul style={styles.sublist}>
                    {cat.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}

          {section.finalNote && (
            <p style={{ ...styles.paragraph, marginTop: "40px", fontWeight: "bold" }}>
              {section.finalNote.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
        </section>
      ))}
    </div>
  );
};

export default RefundPolicy;