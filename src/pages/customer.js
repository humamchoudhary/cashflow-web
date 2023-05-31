import Head from 'next/head';

const Privacy = () => {
  return (
    <>
    <Head>
      <title>
        <span style={{ fontWeight: "bold", fontSize: 30, textAlign:'center' }}>Privacy Policy</span>
      </title>
    </Head>

      <div style={{
        
        paddingLeft: '50px',
        paddingRight:'50px',
        paddingTop:'25px',
        backgroundColor: 'black',
        overflow: 'auto',
        maxHeight: '700px',
        
      }}>
        <h1>Privacy Policy</h1>
        <p>
          At Cashflow, we value the privacy and security of our customers' personal information.
          This Privacy Policy outlines how we collect, use, disclose, and protect the information
          you provide to us. By using our banking services, you consent to the practices described 
          in this policy.
        </p>

        <h2><br />1. Information Collection</h2>
        <p>
        •	Contact Information: Name, address, email address, phone number, and other relevant 
          contact details.<br />
        •	Financial Information: Bank account details, transaction history, credit history, 
          and other financial data necessary for providing banking services.<br />
        •	Identification Information: Government-issued identification documents such as 
          passport or driver's license.<br />
        •	Security Information: Usernames, passwords, security questions, and other credentials
          used for authentication.<br />

        </p>

        <h2><br />2. Information Usage</h2>
        <p>
        We use the collected information for the following purposes:<br />
        •	Providing Banking  Services: To process transactions, manage accounts, and 
          facilitate financial services.<br />
        •	Customer Communication: To communicate with customers regarding account updates,
          service inquiries, and marketing offers.<br />
        •	Risk Assessment and Fraud Prevention: To verify identities, assess creditworthiness, 
          detect and prevent fraud, and ensure security.<br />
        •	Legal and Regulatory Compliance: To comply with applicable laws, regulations, 
          and legal obligations.<br />
        </p>

        <h2><br />3. Information Sharing</h2>
        <p>
        We may share your personal information with the following entities:<br />
        •	Affiliates: With our affiliated companies, subsidiaries, or partners for 
          providing integrated services or for marketing purposes with your consent.<br />
        •	Service Providers: With trusted third-party service providers who assist 
          us in delivering banking services and maintaining our systems.<br />
        •	Legal Requirements: When required by law, court orders, or government 
          authorities to comply with legal obligations or protect against fraud.<br />
        •	Consent: With your explicit consent or as otherwise authorized by you.<br />

        </p>

        <h2><br />4. Data Security</h2>
        <p>
          We implement robust security measures to protect your personal information
          from unauthorized access, disclosure, alteration, or destruction. These measures include:
          •	Secure Storage: Storing data on secure servers and using encryption techniques to 
            safeguard sensitive information.<br />
          •	Access Controls: Limiting access to personal data to authorized personnel and 
            implementing strict authentication protocols.<br />
          •	Regular Audits: Conducting security assessments and audits to identify 
            and address potential vulnerabilities.<br />

        </p>

        <h2><br />5. Your Choices and Rights</h2>
        <p>
        You have the following choices and rights regarding your personal information:<br />
        •	Access and Update: You may review, update, or correct your personal information 
          through our online banking portal or by contacting our customer support.<br />
        •	Marketing Communications: You can optout of receiving marketing communications by 
          following the instructions provided in our communications.<br />
        •	Data Retention: We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer retention 
          period is required by law.<br />

        </p>

        <h2><br />6. Changes to Privacy Policy</h2>
        <p>
        We may update this Privacy Policy from time to time. We encourage you to review the latest 
        version on our website. By continuing to use our services, you accept any revised privacy terms.<br />
        </p>

        <h2><br />7. Contact Us</h2>
        <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or the handling 
        of your personal information, please contact our customer support or privacy officer.<br />
        </p>

        <h3><br />Effective Date: [06/01/2023]</h3>
        {/* Add more sections and content as needed */}
      </div>
    </>
  );
};

export default Privacy;
