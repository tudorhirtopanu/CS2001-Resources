import React, { useRef, useState } from "react";
import './RegistrationForm.css';

function RegistrationForm() {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repPasswordRef = useRef(null);
  const buyerRef = useRef(null);
  const sellerRef = useRef(null);
  const tosRef = useRef(null);

  const [formValid, setFormValid] = useState(false); 
  const [formText, setFormText] = useState("");

  const validateForm = () => {
    const formData = {
      username: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
      buyer: buyerRef.current.checked,
      seller: sellerRef.current.checked
    };

    const repPassword = repPasswordRef.current.value.trim();
    const tosCheckBox = tosRef.current.checked;

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      formData.username.length === 0 ||
      formData.email.length === 0 ||
      formData.password.length === 0 ||
      repPassword.length === 0
    ) {
      alert("Please fill in all text fields.");
      return false;
    } else if (!formData.email.match(mailformat)) {
      alert("Invalid email address. Please enter your email again.");
      return false;
    } else if (formData.password.length < 8) {
      alert("Password is too short. Please select another password.");
      return false;
    } else if (formData.password !== repPassword) {
      alert("Passwords do not match. Please retry.");
      return false;
    } else if (!formData.buyer && !formData.seller) {
      alert("Please check at least one checkbox to be a seller or a buyer.");
      return false;
    } else if (!tosCheckBox) {
      alert("Please agree to the Terms and Conditions, and Privacy Policy.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        username: nameRef.current.value.trim(),
        buyer: buyerRef.current.checked,
        seller: sellerRef.current.checked,
      };

      let formText = `${formData.username} registered as:\n`;
      formText += formData.buyer ? "buyer\n" : "";
      formText += formData.seller ? "seller" : "";

      setFormText(formText);  
      setFormValid(true); 
    }
  };

  return (
    <>
      <form className='center' noValidate onSubmit={handleSubmit}>

        <label className="textInput" htmlFor="name">Name:</label>

        <input type="text" id='name' name='name' ref={nameRef} required maxLength={50} />
        <br /><br />

        <label className='textInput' htmlFor="email">Email:</label>
        <input type="email" id='email' name='email' ref={emailRef} required />
        <br /><br />

        <label className='textInput' htmlFor="password">Password:</label>
        <input type="password" id='password' name='password' ref={passwordRef} required minLength={8} />
        <br /><br />

        <label className='textInput' htmlFor="repPassword">Re-type Password:</label>
        <input type="password" id='repPassword' name='repPassword' ref={repPasswordRef} required minLength={8} />
        <br /><br />

        <input type="checkbox" id="buyer" name="buyer" ref={buyerRef} />
        <label htmlFor="buyer">I want to buy produce directly from allotment owners.</label>
        <br />

        <input type="checkbox" id="seller" name="seller" ref={sellerRef} />
        <label htmlFor="seller">I want to sell produce from my allotment.</label>
        <br /><br />

        <input type="checkbox" id="tos" name="tos" ref={tosRef} required />
        <label htmlFor="tos">I agree to the <a href="">Terms of Use</a> and <a href="">Privacy Policy</a></label>
        <br /><br />

        <input type="submit" id="button" value="Register" />
        <a href="">Learn more</a>
      </form>

      {formValid && (
        <div className="center" id="hiddenSection">
          <p id="hiddenParagraph">{formText}</p>
        </div>
      )}
    </>
  );
}

export default RegistrationForm;
