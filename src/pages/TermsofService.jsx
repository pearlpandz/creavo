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

const termsContent = [
  {
    title: "Introduction",
    content: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and Karthikeya Business Solutions Pvt Ltd., a company incorporated under the Companies Act, 2013 with its registered office at 1010, Manjeera Trinety corporate, KPHB, JNTU- HITECH CITY ROAD, pin 500072. ("CREAVO", "Company", "we", "our", or "us").
    
These Terms govern your access to and use of CREAVO's platform, including our websites, mobile applications, and related services (collectively, the "Platform"). By accessing, registering on, or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable policies, including our Privacy Policy and Payment & Refund Policy. If you do not agree to these Terms, please discontinue use of the Platform immediately.`,
  },
  {
    title: "1. Eligibility and Account Requirements",
    subsections: [
      {
        subtitle: "1.1 Legal Eligibility",
        list: [
          "You must be at least 18 years of age or the age of majority in your jurisdiction",
          "You must have the legal capacity to enter into binding contracts",
          "You represent and warrant that all information provided is accurate and complete",
        ],
      },
      {
        subtitle: "1.2 Account Creation and Security",
        content: `Account access is authenticated through One-Time Password (OTP) verification using your mobile number.
        
You are solely responsible for:`,
        list: [
          "Maintaining the confidentiality of your login credentials",
          "All activities conducted under your account",
          "Ensuring unauthorized persons do not access your account",
        ],
        extra: "You must immediately notify us of any suspected unauthorized access",
      },
      {
        subtitle: "1.3 Account Restrictions",
        list: [
          "One Account Policy: Each user may maintain only one active account",
          "No Automated Access: Use of bots, scripts, or automated tools is strictly prohibited",
          "Personal Use Only: Accounts are non-transferable and for individual use only",
        ],
      },
    ],
  },
  {
    title: "2. Services and Subscription",
    subsections: [
      {
        subtitle: "2.1 Service Availability",
        list: [
          "CREAVO provides creative content generation and editing tools",
          "Certain premium features require an active subscription",
          "Services are provided on an \"as available\" basis",
        ],
      },
      {
        subtitle: "2.2 Subscription Terms",
        list: [
          "Non-transferable: Subscriptions cannot be transferred between accounts",
          "Time-bound: Access is limited to the subscription period purchased",
          "Feature-specific: Access is limited to features outlined at time of purchase",
          "Auto-renewal: Subscriptions may auto-renew unless cancelled prior to renewal date",
        ],
      },
      {
        subtitle: "2.3 Payment Processing",
        content: `Payments are processed through third-party providers (Razorpay, PhonePe, Paytm, etc.).
You agree to comply with the terms and privacy policies of payment processors.
CREAVO is not liable for payment processor failures, delays, or service interruptions.`,
      },
      {
        subtitle: "2.4 UPI AutoPay and Mandates",
        content: `AutoPay mandates are subject to RBI regulations and NPCI guidelines.
You may cancel mandates directly through your banking or UPI application.
CREAVO is not responsible for technical issues arising from mandate setup or cancellation.`,
      },
      {
        subtitle: "2.5 Pricing and Taxes",
        list: [
          "All fees are inclusive of applicable GST and indirect taxes under Indian law",
          "Prices are subject to change with prior notice",
          "Users may not deduct or withhold taxes from amounts payable",
        ],
      },
    ],
  },
  {
    title: "3. Acceptable Use Policy",
    subsections: [
      {
        subtitle: "3.1 Permitted Use",
        content: `You may use CREAVO's Platform to:`,
        list: [
          "Create and edit original content for personal or commercial purposes",
          "Access premium features included in your subscription",
          "Share content in accordance with these Terms",
        ],
      },
      {
        subtitle: "3.2 Prohibited Activities",
        content: "You agree NOT to:",
        subcategories: [
          {
            category: "Content Violations:",
            list: [
              "Upload content that infringes copyright, trademark, or intellectual property rights",
              "Post defamatory, obscene, pornographic, or unlawful material",
              "Share content depicting violence, hate speech, or discriminatory material",
              "Upload morphed, deepfake, or AI-generated explicit content",
            ],
          },
          {
            category: "Platform Misuse:",
            list: [
              "Attempt to disable, impair, or damage our systems or infrastructure",
              "Use automated tools to scrape, harvest, or extract data without permission",
              "Interfere with other users' experiences or platform functionality",
              "Exploit the Platform for unauthorized advertising, phishing, or malware distribution",
            ],
          },
          {
            category: "Account Misuse:",
            list: [
              "Create multiple accounts or share account access",
              "Impersonate others or misrepresent your identity",
              "Use the Platform for harassment, threats, or abusive behavior",
            ],
          },
          {
            category: "Legal Violations:",
            list: [
              "Violate any applicable laws, including IT Act, cybercrime, or intellectual property laws",
              "Engage in fraudulent activities or unauthorized transactions",
            ],
          },
        ],
      },
      {
        subtitle: "3.3 Enforcement",
        content: `CREAVO reserves the right to monitor user activity for compliance and security.
Violations may result in content removal, account suspension, or legal action.
Repeat offenders may face permanent account termination.`,
      },
    ],
  },
  {
    title: "4. Content Ownership and Licensing",
    subsections: [
      {
        subtitle: "4.1 Your Content Rights",
        content: `Ownership: You retain full ownership of original content you create or upload.
        
License to CREAVO: By using the Platform, you grant CREAVO a limited, non-exclusive, royalty-free license to store, display, and distribute your content as necessary to provide our service.
        
Responsibility: You represent that you have all necessary rights to upload content and that it does not infringe third-party rights.`,
      },
      {
        subtitle: "4.2 CREAVO's Content",
        content: `CREAVO retains all intellectual property rights in templates, tools, AI-generated elements, and platform features.
Content created using CREAVO's proprietary elements may not be redistributed for commercial purposes without permission.
You may use CREAVO-generated content in accordance with your subscription terms.`,
      },
      {
        subtitle: "4.3 Content Removal",
        content: `CREAVO may remove or disable content that:
• Violates these Terms or applicable laws
• Is subject to valid takedown requests
• Is flagged by users or automated systems
• Poses security or legal risks`,
      },
    ],
  },
  {
    title: "5. Community Standards",
    content: "All users must maintain respectful and lawful conduct:",
    subsections: [
      {
        subtitle: "5.1 Expected Behavior",
        list: [
          "Treat all users with respect and courtesy",
          "Respect privacy and consent of individuals in your content",
          "Use the Platform for legitimate creative purposes",
          "Report violations or abuse through appropriate channels",
        ],
      },
      {
        subtitle: "5.2 Zero Tolerance Policy",
        content: "CREAVO has zero tolerance for:",
        list: [
          "Hate speech, discrimination, or harassment",
          "Illegal activities or content",
          "Exploitation or abuse of minors",
          "Threats of violence or harm",
        ],
      },
    ],
  },
  {
    title: "6. Content Moderation",
    subsections: [
      {
        subtitle: "6.1 Moderation Systems",
        content: `CREAVO employs:`,
        list: [
          "AI-powered content filtering for explicit or harmful material",
          "Human moderators for complex cases",
          "User reporting mechanisms",
          "Automated detection systems",
        ],
      },
      {
        subtitle: "6.2 Takedown Process",
        content: `Valid takedown requests will be processed within 36-72 hours.
Users may appeal content removal decisions.
Repeat violations may result in account termination.`,
      },
    ],
  },
  {
    title: "7. Data Retention and Privacy",
    subsections: [
      {
        subtitle: "7.1 Data Retention Periods",
        content: `User data is retained:
• During active subscription periods
• Up to 90 days after account deletion
• Longer if required by applicable law or legal proceedings`,
      },
      {
        subtitle: "7.2 Deletion Requests",
        content: `Users may request data deletion by contacting support@creavo.app.
Requests will be processed within 15 business days.
Some data may be retained as required by law.`,
      },
    ],
  },
  {
    title: "8. Intellectual Property Protection",
    subsections: [
      {
        subtitle: "8.1 CREAVO's Rights",
        content: `CREAVO owns all rights to:
• Brand names, logos, and trademarks
• Platform software and source code
• Design templates and creative tools
• AI algorithms and proprietary technology`,
      },
      {
        subtitle: "8.2 Restrictions",
        content: `Users may NOT:`,
        list: [
          "Reverse engineer or copy CREAVO's software",
          "Use CREAVO's trademarks without permission",
          "Redistribute or resell CREAVO's proprietary content",
          "Claim ownership of CREAVO's intellectual property",
        ],
      },
    ],
  },
  {
    title: "9. Account Termination",
    subsections: [
      {
        subtitle: "9.1 Termination by CREAVO",
        content: `We may suspend or terminate your account for:
• Material breach of these Terms
• Illegal activities or content violations
• Payment disputes or fraudulent transactions
• Court orders or regulatory requirements
• Extended account inactivity`,
      },
      {
        subtitle: "9.2 Termination by User",
        content: `Users may delete their accounts at any time via email request.
Paid subscription benefits are forfeited upon termination.
Content may be retained as outlined in our data retention policy.`,
      },
      {
        subtitle: "9.3 Effects of Termination",
        content: `Upon termination:
• Platform access is immediately revoked
• User content may be deleted after the retention period
• Outstanding payment obligations remain due
• These Terms survive termination where applicable`,
      },
    ],
  },
  {
    title: "10. Disclaimers and Limitation of Liability",
    subsections: [
      {
        subtitle: "10.1 Service Disclaimers",
        list: [
          "The Platform is provided \"AS IS\" without warranties of any kind",
          "CREAVO does not guarantee uninterrupted or error-free service",
          "AI-generated content is provided without warranties of accuracy or fitness",
          "Users assume all risks associated with Platform use",
        ],
      },
      {
        subtitle: "10.2 Limitation of Liability",
        content: `CREAVO's liability is limited as follows:
• No Indirect Damages: We are not liable for indirect, incidental, consequential, or punitive damages
• Liability Cap: Total liability shall not exceed fees paid in the preceding 12 months
• Third-Party Services: We are not liable for third-party service failures or interruptions
• User Content: We are not liable for user-generated content or its consequences`,
      },
    ],
  },
  {
    title: "11. Indemnification",
    content: `You agree to indemnify and hold harmless CREAVO and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
• Your use of the Platform
• Your violation of these Terms
• Your infringement of third-party rights
• Your content or conduct on the Platform`,
  },
  {
    title: "12. Force Majeure",
    content: `CREAVO shall not be liable for delays or failures in performance due to circumstances beyond our reasonable control, including:
• Natural disasters or acts of God
• War, terrorism, or civil unrest
• Government actions or regulations
• Internet outages or infrastructure failures
• Third-party service interruptions`,
  },
  {
    title: "13. Governing Law and Dispute Resolution",
    subsections: [
      {
        subtitle: "13.1 Governing Law",
        content: "These Terms are governed by the laws of India, without regard to conflict of law principles.",
      },
      {
        subtitle: "13.2 Jurisdiction",
        content: "Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka, India.",
      },
      {
        subtitle: "13.3 Alternative Dispute Resolution",
        content: "Before initiating legal proceedings, parties agree to attempt resolution through good faith negotiation and, if necessary, binding arbitration under Indian Arbitration and Conciliation Act, 2015.",
      },
    ],
  },
  {
    title: "14. Changes to Terms",
    subsections: [
      {
        subtitle: "14.1 Modification Rights",
        content: "CREAVO reserves the right to modify these Terms at any time.",
      },
      {
        subtitle: "14.2 Notice of Changes",
        content: `Material changes will be communicated via email or in-app notification.
Users will have 30 days to review changes before they take effect.
Continued use after changes constitutes acceptance.`,
      },
      {
        subtitle: "14.3 Rejection of Changes",
        content: "If you do not agree to modified Terms, you must discontinue Platform use before the effective date.",
      },
    ],
  },
  {
    title: "15. Grievance Redressal",
    content: `In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021:

Grievance Officer
• Name: [Name]
• Title: Head of Customer Support
• Email: support@creavo.app
• Response Time: 15 business days

Company Details
Karthikeya Business Solutions Pvt Ltd.
1010, Manjeera Trinety corporate, KPHB, JNTU- HITECH CITY ROAD, pin 500072.

For detailed grievance procedures, please refer to our Grievance Redressal Policy.`,
  },
  {
    title: "16. Miscellaneous Provisions",
    subsections: [
      {
        subtitle: "16.1 Entire Agreement",
        content: "These Terms, together with our Privacy Policy and other referenced policies, constitute the entire agreement between you and CREAVO.",
      },
      {
        subtitle: "16.2 Severability",
        content: "If any provision is deemed unenforceable, the remaining provisions shall remain in full force and effect.",
      },
      {
        subtitle: "16.3 No Waiver",
        content: "Failure to enforce any right or provision does not constitute a waiver of such right or provision.",
      },
      {
        subtitle: "16.4 Assignment",
        content: "These Terms are personal to you and may not be assigned without CREAVO's written consent. CREAVO may assign these Terms without restriction.",
      },
      {
        subtitle: "16.5 Contact Information",
        content: `For questions about these Terms, please contact us at:
• Email: legal@creavo.app
• Support: support@creavo.app

Address: 1010, Manjeera Trinety corporate, KPHB, JNTU- HITECH CITY ROAD, pin 500072.`,
      },
    ],
  },
  {
    finalNote: `By using CREAVO's Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.`,
  },
];

const TermsOfService = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CREAVO Terms and Conditions</h1>
      <p style={styles.updated}>Last Updated: 21-12-2025</p>

      {termsContent.map((section, index) => (
        <section key={index}>
          {section.title && <h2 style={styles.sectionTitle}>{section.title}</h2>}

          {section.content && <p style={styles.paragraph}>{section.content.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>}

          {section.list && (
            <ul style={styles.list}>
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.extra && <p style={styles.paragraph}>{section.extra}</p>}

          {section.subsections &&
            section.subsections.map((sub, subIdx) => (
              <div key={subIdx}>
                <h3 style={styles.subsectionTitle}>{sub.subtitle}</h3>
                {sub.content && <p style={styles.paragraph}>{sub.content.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>}
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

          {section.finalNote && <p style={{ ...styles.paragraph, marginTop: "40px", fontWeight: "bold" }}>{section.finalNote}</p>}
        </section>
      ))}
    </div>
  );
};

export default TermsOfService;