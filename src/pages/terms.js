import Head from 'next/head';
const Terms = () => {
    return (
      <>
      <Head>
        <title>
          <span style={{ fontWeight: "bold", fontSize: 20 }}>Terms and Conditions</span>
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
        <h1><br />Terms and Conditions</h1>
        <p>
        Welcome to Cashflow! These terms and conditions govern your use of 
        our mobile banking application ("Cashflow") and the services provided therein.
        By using the App, you agree to be bound by the following terms and conditions:<br />
        </p>

        <h2><br />1.	Account Access: </h2>
        <p>
        •	You must be a registered user to access and use the App.<br /> 
        •	You are responsible for maintaining the confidentiality 
            of your login credentials and ensuring their security. <br />
        •	You agree not to share your login credentials with any unauthorized person.
        </p>

        <h2><br />2.	Services: </h2>
        <p>
        •	The App allows you to perform various banking services, 
            including but not limited to viewing account balances, transferring 
            funds, and making bill payments. <br />
        •	We strive to provide accurate and up-to-date information through the App,
            but we do not guarantee the accuracy or completeness of the data displayed.<br />
        </p>

        <h2><br />3.	Security: </h2>
        <p>
        •	We employ industry-standard security measures to protect 
            your information and transactions. <br />
        •	You are responsible for ensuring the security of your mobile 
            device and taking appropriate measures to prevent unauthorized access.<br />
        </p>

        <h2><br />4.	Privacy: </h2>
        <p>
        •	We collect and process your personal information in 
            accordance with our privacy policy. <br />
        •	By using the App, you consent to the collection, use, and 
            disclosure of your personal information as described in our privacy policy.<br />
        </p>

        <h2><br />5.	Intellectual Property: </h2>
        <p>
        •	All intellectual property rights in the App and its contents belong to us. <br />
        •	You may not copy, modify, distribute, or reproduce any part of 
            the App without our prior written consent.<br />
        </p>

        <h2><br />6.	Limitation of Liability: </h2>
        <p>
        •	We are not liable for any damages, losses, or expenses arising 
            from your use of the App or any errors or interruptions in its operation. <br />
        •	We do not guarantee the availability or continuous operation of the App.<br />
        </p>

        <h2>7.	Termination:</h2>
        <p>
        •	We reserve the right to terminate or suspend your 
            access to the App at any time without prior notice. 
        •	You may terminate your use of the App by deleting your account.
        </p>

        <h2><br />8.	Amendments: </h2>
        <p>
        •	We may modify these terms and conditions at any time.
            The updated terms will be posted on the App.<br /> 
        •	Your continued use of the App after the modifications 
            constitutes your acceptance of the updated terms.<br />
        </p>

        <h2><br />9.	Governing Law: </h2>
        <p>
        •	These terms and conditions are governed by and construed 
            in accordance with the laws of Pakistan. <br />
        •	Any disputes arising out of or relating to these terms 
            shall be subject to the exclusive jurisdiction of the courts of Pakistan.<br />
        </p>
        <p><br />
        Please read these terms and conditions carefully before using the Banking App. 
        If you do not agree to any of the provisions stated herein, please refrain from using the App.
        If you have any questions or concerns regarding these terms and conditions,
        please contact us at [0315-0144577,0318-015509].
        </p>

        
        <h3><br />Last updated: [Date]</h3>
        
      </div>
      </>
    );
};

export default Terms;
