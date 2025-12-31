import React from "react";
import "./GlobalPage.css"; 

const TermsAndConditions = () => {
  return (
    <div style={{ padding: "2rem" }} className="page-content">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to WebBook! By using our website, you agree to comply with the 
        following terms and conditions. Please read them carefully.
      </p>

      <h2>1. Use of Website</h2>
      <p>
        You must use the website responsibly and not engage in any activity 
        that may harm the website or other users.
      </p>

      <h2>2. Orders and Payments</h2>
      <p>
        All orders are subject to availability. Payments are processed securely 
        and users are responsible for providing accurate information.
      </p>

      <h2>3. Privacy</h2>
      <p>
        Your personal data will be handled according to our Privacy Policy.
      </p>

      <h2>4. Changes to Terms</h2>
      <p>
        We may update these Terms & Conditions at any time. Continued use of 
        the website constitutes acceptance of the updated terms.
      </p>

      <p>© 2025 WebBook. All Rights Reserved.</p>
    </div>
  );
};

export default TermsAndConditions;
