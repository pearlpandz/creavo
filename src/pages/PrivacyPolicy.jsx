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
    fontWeight:700,
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

const privacyContent = [
  {
    intro: `This Privacy Policy ("Policy") describes how Karthikeya Business Solutions PRIVATE LIMITED ("CREAVO", "we", "our", or "us") collects, uses, stores, processes, and discloses personal information of users who access or interact with the CREAVO platform, including our mobile applications, websites, (www.creavo.in) and associated services ("Platform").
    
This Policy is issued in compliance with applicable data protection laws, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other relevant regulations. By using our Platform, you acknowledge that you have read, understood, and agree to the collection and use of your information in accordance with this Policy.`,
  },
  {
    title: "1. Information We Collect",
    content: `CREAVO is committed to collecting only the minimum personal information necessary to provide our services effectively. We do not collect sensitive personal data such as financial account details, health records, biometric identifiers, or passwords unless explicitly required for service delivery.`,
    subsections: [
      {
        subtitle: "1.1 Information You Provide Directly:",
        list: [
          "Contact Information: Mobile number (required for account verification), email address, and name",
          "Profile Information: Profile picture, preferences, and account settings",
          "Content Data: User-generated content, projects, designs, text, media files, and creative works",
          "Communication Data: Messages, feedback, support requests, and survey responses",
          "Subscription Information: Plan preferences, usage history, and feature access records",
        ],
      },
      {
        subtitle: "1.2 Information Collected Automatically:",
        list: [
          "Device Information: Device type, model, operating system, browser type and version, screen resolution",
          "Technical Data: IP address, device identifiers, app version, crash reports, and diagnostic information",
          "Usage Analytics: Feature usage patterns, session duration, click streams, and performance metrics",
          "Location Data: General geographic location (city/region level) derived from IP address",
          "Log Data: Access logs, error reports, and system performance data",
        ],
      },
      {
        subtitle: "1.3 Third-Party Information:",
        list: [
          "Payment Data: Payment transactions processed through secure third-party gateways (Razorpay, Phonepe, unlimit etc)",
          "Social Integration: Information from connected social media accounts (with your explicit consent)",
          "Marketing Data: Information from marketing partners and analytics services",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your personal information for the following legitimate purposes:",
    subsections: [
      {
        subtitle: "2.1 Service Delivery:",
        list: [
          "Account creation, authentication, and management",
          "Providing core platform features and functionality",
          "Processing subscriptions and managing billing",
          "Personalizing user experience and content recommendations",
          "Facilitating collaboration and sharing features",
        ],
      },
      {
        subtitle: "2.2 Communication:",
        list: [
          "Sending important service notifications and updates",
          "Providing customer support and technical assistance",
          "Responding to inquiries and feedback",
          "Delivering marketing communications (with consent)",
        ],
      },
      {
        subtitle: "2.3 Platform Improvement:",
        list: [
          "Analyzing usage patterns to enhance user experience",
          "Developing new features and services",
          "Conducting research and analytics",
          "Testing and optimizing platform performance",
        ],
      },
      {
        subtitle: "2.4 Security and Compliance:",
        list: [
          "Detecting and preventing fraud, abuse, and security threats",
          "Ensuring platform integrity and user safety",
          "Complying with legal obligations and regulatory requirements",
          "Protecting intellectual property rights",
        ],
      },
    ],
  },
  {
    title: "3. Legal Basis for Processing",
    content: `Our processing of your personal information is based on:
• Consent: When you voluntarily provide information or agree to specific processing activities
• Contractual Necessity: To fulfill our obligations under our Terms of Service
• Legitimate Interest: For platform improvement, security, and business operations
• Legal Compliance: When required by applicable laws and regulations`,
  },
  {
    title: "4. Information Sharing and Disclosure",
    content: "CREAVO respects your privacy and limits information sharing to the following circumstances:",
    subsections: [
      {
        subtitle: "4.1 Service Providers:",
        list: [
          "Trusted third-party vendors who assist in platform operations under strict confidentiality agreements",
          "Cloud hosting providers, payment processors, and analytics services",
          "Customer support and communication service providers",
        ],
      },
      {
        subtitle: "4.2 Legal Requirements:",
        list: [
          "Government agencies, law enforcement, or regulatory authorities upon valid legal request",
          "Court orders, subpoenas, or other legal processes",
          "Protection of rights, safety, or property of CREAVO, users, or the public",
        ],
      },
      {
        subtitle: "4.3 Business Transfers:",
        list: [
          "In case of merger, acquisition, asset sale, or similar business transaction",
          "Successors or acquirers will be bound by this Privacy Policy",
        ],
      },
      {
        subtitle: "4.4 User Consent:",
        list: [
          "When you explicitly authorize information sharing",
          "For specific features that require data sharing (e.g., collaboration tools)",
        ],
      },
    ],
  },
  {
    title: "5. Data Security and Protection",
    content: "CREAVO implements comprehensive security measures to protect your personal information:",
    subsections: [
      {
        subtitle: "5.1 Technical Safeguards:",
        list: [
          "End-to-end encryption for sensitive data transmission",
          "Secure database storage with advanced encryption protocols",
          "Multi-factor authentication and access controls",
          "Regular security audits and vulnerability assessments",
          "Automated threat detection and response systems",
        ],
      },
      {
        subtitle: "5.2 Organizational Measures:",
        list: [
          "Role-based access control with principle of least privilege",
          "Employee privacy and security training programs",
          "Incident response and breach notification procedures",
          "Regular security policy reviews and updates",
        ],
      },
      {
        subtitle: "5.3 Physical Security:",
        list: [
          "Secure data centers with restricted access",
          "Environmental controls and monitoring systems",
          "Backup and disaster recovery procedures",
        ],
      },
    ],
    extra: "Important Notice: While we implement industry-standard security measures, no system is completely secure. We encourage users to maintain strong passwords and not share account credentials.",
  },
  {
    title: "6. Data Retention and Deletion",
    subsections: [
      {
        subtitle: "6.1 Retention Period:",
        content: `• Personal information is retained only as long as necessary for service provision or as required by law
• Active account data is retained during the subscription period and for a reasonable period thereafter
• Marketing data is retained until consent is withdrawn
• Legal and compliance data may be retained for extended periods as required`,
      },
      {
        subtitle: "6.2 Data Deletion:",
        content: `• Users may request deletion of their personal information by contacting support@creavo.com
• Deletion requests are processed within 15 business days, subject to legal obligations
• Some information may be retained in anonymized or aggregated form for analytical purposes
• Backup systems may retain data for technical recovery purposes for limited periods`,
      },
    ],
  },
  {
    title: "7. Your Privacy Rights",
    content: "Subject to applicable law, you have the following rights regarding your personal information:",
    subsections: [
      {
        subtitle: "7.1 Access and Portability:",
        list: [
          "Request access to your personal information",
          "Obtain copies of your data in a portable format",
        ],
      },
      {
        subtitle: "7.2 Correction and Update:",
        list: [
          "Request correction of inaccurate or incomplete information",
          "Update your account information directly through platform settings",
        ],
      },
      {
        subtitle: "7.3 Deletion and Restriction:",
        list: [
          "Request deletion of your personal information",
          "Request restriction or objection to specific processing activities",
        ],
      },
      {
        subtitle: "7.4 Consent Management:",
        list: [
          "Withdraw consent for marketing communications",
          "Modify privacy preferences and data sharing settings",
        ],
      },
      {
        subtitle: "7.5 Complaint Rights:",
        list: [
          "File complaints with relevant data protection authorities",
          "Seek redress through our internal grievance mechanism",
        ],
      },
    ],
    extra: "To exercise these rights, contact us at support@creavo.com with valid identification.",
  },
  {
    title: "8. Cookies and Tracking Technologies",
    subsections: [
      {
        subtitle: "8.1 Cookie Usage:",
        list: [
          "Essential Cookies: Required for basic platform functionality and security",
          "Performance Cookies: Analyze platform usage and performance metrics",
          "Functionality Cookies: Remember user preferences and settings",
          "Marketing Cookies: Deliver personalized content and advertisements",
        ],
      },
      {
        subtitle: "8.2 Cookie Management:",
        list: [
          "Users can manage cookie preferences through browser settings",
          "Disabling certain cookies may affect platform functionality",
          "Third-party cookies are governed by respective third-party privacy policies",
        ],
      },
      {
        subtitle: "8.3 Do Not Track:",
        list: [
          "We respect browser \"Do Not Track\" signals where technically feasible",
          "Users can opt-out of analytics tracking through platform settings",
        ],
      },
    ],
  },
  {
    title: "9. International Data Transfers",
    content: `• Personal information may be transferred to and processed in countries other than your residence
We ensure adequate protection through appropriate safeguards and agreements
• Transfers comply with applicable data protection laws and regulations`,
  },
  {
    title: "10. Children's Privacy",
    content: `• CREAVO services are not intended for children under 13 years of age
• We do not knowingly collect personal information from children under 13
• Parents or guardians should contact us immediately if they believe their child has provided personal information`,
  },
  {
    title: "11. Policy Updates and Changes",
    subsections: [
      {
        subtitle: "11.1 Modification Rights:",
        content: `• We may update this Privacy Policy periodically to reflect changes in practices or legal requirements
• Material changes will be notified through prominent platform notices or direct communication
• Continued use of the Platform constitutes acceptance of updated terms`,
      },
      {
        subtitle: "11.2 Notification Methods:",
        list: [
          "In-app notifications for significant changes",
          "Email notifications to registered users",
          "Website banner notifications",
        ],
      },
    ],
  },
  {
    title: "12. Grievance Redressal",
    content: `In compliance with applicable data protection regulations, CREAVO designates the following officers:

Data Protection Officer:
Name: CPO
Title: Chief Privacy Officer
Email: support@creavo.com
Phone: 87 507 49 299

Grievance Officer:
Name: [Insert Name]
Title: Head of Customer Relations
Email: support@creavo.com
Phone: 87 507 49 299

CREAVO TECHNOLOGIES PRIVATE LIMITED
Registered Address: 403, Sahasra Heights, Erragada, 500018

Grievance Resolution Process:
1. Submit complaints through designated channels
2. Acknowledgment within 48 hours
3. Investigation and resolution within 15 business days
4. Escalation procedures for unresolved complaints`,
  },
  {
    title: "13. Contact Information",
    content: `For questions, concerns, or requests regarding this Privacy Policy or your personal information:

Email: support@creavo.com

Postal Address: 1010, Manjeera Trinety corporate, KPHB, JNTU- HITECH CITY ROAD, pin 500072`,
  },
  {
    title: "14. Compliance and Jurisdiction",
    content: `• This Privacy Policy is governed by the laws of India
• Any disputes will be subject to the exclusive jurisdiction of courts in Hyderabad, India
• We comply with applicable international data protection standards`,
  },
  {
    finalNote: `This Privacy Policy should be read in conjunction with CREAVO's Terms of Service, Cookie Policy, and other applicable platform policies.

By using CREAVO services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CREAVO Privacy Policy</h1>
      <p style={styles.updated}>
        Effective Date: 26-11-2025<br />
        Last Updated: 21-12-2025
      </p>

      {privacyContent.map((section, index) => (
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

          {section.extra && <p style={styles.paragraph}>{section.extra}</p>}

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

export default PrivacyPolicy;