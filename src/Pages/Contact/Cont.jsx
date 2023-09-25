import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import socials from './assets/socials.png';

const Contact = () => {
  // Set up state variables to track form input values and form submission status
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const rejex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i

  // Create a function to handle form submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the formSubmitted state to true when the form is submitted
    setFormSubmitted(true);
  };

  // Use the useEffect hook to make a POST request when formSubmitted is true
  useEffect(() => {
    if (formSubmitted) {
      //Construct the request body
      const requestBody = {
        "email": email,
        "first_name": firstName,
        "message": message
      };

      if(firstName === "" || email === "" || message === ""){
          alert("Please Fill out all inputs correctly")
          setFormSubmitted(false);

      } else if(!rejex.test(email) && rejex !== null){
          alert("Pls Input a Valid Email")
          setFormSubmitted(false);

      } else{
        //Make the POST request
        fetch('https://backend.getlinked.ai/hackathon/contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            console.log('Submitted Successfully!');
            alert("Contact form submitted successfully!")

            //Clear the form inputs after a successful submission
            setFirstName('');
            setEmail('');
            setMessage('');
          })
          .catch((error) => {
            console.error('Error submitting contact form:', error);
          });
      }
    }
  }, [formSubmitted, handleSubmit]);

  return (
    <>
      <Header faq={'#'} />
      <section className="contacts">
        <div className="contactswrapper">
          <div className="contactinfo">
            <h1>Get in touch</h1>
            <p>Contact Information</p>
            <p>27, Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
            <h3>Share on</h3>
            <img src={socials} alt="" />
          </div>
          <div className="contactform">
            <form onSubmit={handleSubmit} className="form">
              <div className="formheader">
                <h3>Questions or need assistance?</h3>
                <h3>Let us know about it!</h3>
              </div>
              <p>Email us below to any question related to our event</p>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
            <div className='mobileformsocials'>
              <p>Share on</p>
              <img src={socials} alt="" />
            </div>
          </div>
        </div>
        <div className="contactgradient contactgradient1"></div>
        <div className="contactgradient contactgradient2"></div>
      </section>
    </>
  );
};

export default Contact;