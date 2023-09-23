import Header from "../../components/Header/Header";
import Modal from '../../components/Modal/Modal';
import registerimg from "./assets/img.png";
import humans from "./assets/humans.png";
import mobileimg from "./assets/imgmobile.png";
import { useEffect, useState } from "react";

const Register = () => {
  const [buttonText, setButtonText] = useState("Register Now");
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    teamName: "",
    groupSize: "",
    projectTopic: "",
    category: "",
    termsAccepted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data here before making the POST request
      if (!formData.email || !formData.phone || !formData.teamName) {
        console.error("Please fill in all required fields.");
        console.log("Response status:", response.status);
        console.log("Response text:", await response.text());
        return;
      }

      // Make the POST request
      const response = await fetch("https://backend.getlinked.ai/hackathon/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (!response.ok) {
        console.error("Error submitting registration form.");
        return;
      }

      const responseData = await response.json();
      console.log("Registration form submitted successfully!", responseData);
      
      // Show the modal after successful submission
      setModal(true);

      // Clear the form data
      setFormData({
        email: "",
        phone: "",
        teamName: "",
        groupSize: "",
        projectTopic: "",
        category: "",
        termsAccepted: false,
      });
    } catch (error) {
      console.error("Error submitting registration form:", error);
    }
  };

  // Update form data when input fields change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  useEffect(() => {
    // Function to handle window resize and update button text
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setButtonText("Submit");
      } else {
        setButtonText("Register Now");
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call the handleResize function once to set the initial button text
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      {modal && <Modal othermodal={modal} othersetModal={setModal} />}
      <section className="register">
        <h1 className="mobileregister">Register</h1>
        <div className="registerwrapper">
          <div className="registerimg">
            <img className="desktopimg" src={registerimg} alt="Register Image" />
            <img className="mobileimg" src={mobileimg} alt="" />
          </div>
          <form onSubmit={handleSubmit} className="registerform">
            <h1 className="formh1">Register</h1>
            <div className="registerformheader">
                <div>
                <p>Be part of this movement!</p>
                <img src={humans} alt="" />
                </div>
                <h1>CREATE YOUR ACCOUNT</h1>
            </div>
            <div className="registerformcontents">
                <div className="teamandphone">
                <div>
                    <p>Team’s Name</p>
                    <input
                    type="text"
                    name="teamName"
                    placeholder="Enter the name of your group"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                    <p>Phone</p>
                    <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                </div>
                <div className="emailandtopic">
                <div>
                    <p>Email</p>
                    <input
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                    <p>Project Topic</p>
                    <input
                    type="text"
                    name="projectTopic"
                    placeholder="What is your group project topic"
                    value={formData.projectTopic}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                </div>
                <div className="selects">
                <div>
                    <p>Category</p>
                    <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    >
                    <option value="">Select your category</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                </div>
                <div>
                    <p>Group Size</p>
                    <select
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleInputChange}
                    required
                    >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>
                </div>
            </div>
            <div className="footerlastdiv">
                <h6>Please review your registration details before submitting</h6>
                <div className="checkbox">
                <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    required
                />
                <p>I agree with the event terms and conditions and privacy policy</p>
                </div>
                <button type="submit" className="button">
                {buttonText}
                </button>
            </div>
            </form>
        </div>
      </section>
    </>
  );
};

export default Register;
