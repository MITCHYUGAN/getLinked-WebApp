import Header from "../../components/Header/Header"
import Modal from '../../components/Modal/Modal'
import registerimg from "./assets/img.png"
import humans from "./assets/humans.png"
import mobileimg from "./assets/imgmobile.png"
import { useEffect, useState } from "react"

const Register = () => {

    const [buttonText, setButtonText ] = useState("Register Now")
    const [modal, setModal ] = useState(false)

    const [teamName, setTeamName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [category, setCategory] = useState();
    const [groupSize, setGroupSize] = useState();
    const [checked, setChecked] = useState()
    const [formSubmitted, setFormSubmitted] = useState(false);

    const rejex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i

    console.log("Group", groupSize)

    const handleSubmit = (e) => {
        e.preventDefault();
        //Set the formSubmitted state to true when the form is submitted
        setFormSubmitted(true);
        console.log(formSubmitted)
    };

    // My UseUffect ----------
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

    // UseEffect For my form
    useEffect(() => {
        if(formSubmitted){
            //Construct the request body
            const requestBody = {
                "email": email,
                "phone_number": phone,
                "team_name": teamName,
                "group_size": Number(groupSize),
                "project_topic": topic,
                "category": Number(category),
                "privacy_policy_accepted": checked,
            }

            console.log(requestBody)

            if(email === "" || phone === "" || teamName === "" || topic === "" || category === "" || groupSize === "" || checked !== true ){
                alert('Please Fill out all inputs correctly')
                setFormSubmitted(false);
            } else if(!rejex.test(email) && rejex !== null){
                alert("Pls Input a Valid Email")
                setFormSubmitted(false);
            }else{
                
                //make the POST request
                fetch('https://backend.getlinked.ai/hackathon/registration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                })
                .then((response) => {
                    if(!response.ok){
                        throw new Error('Network response was not ok')
                    }
                    console.log('Submitted Successfully!');
                    setModal(true)

                    //Clear the form inputs after a successful submission
                    setTeamName('');
                    setPhone('');
                    setEmail('');
                    setTopic('');
                    setCategory('')
                    setGroupSize('')
                    setChecked(false)
                })
                .catch((error) => {
                    console.error('Error submitting contact form:', error)
                });
            }

        }
    }, [formSubmitted, handleSubmit]);


    return(
        <>
            <Header />
            {
                modal && <Modal othermodal={modal} othersetModal={setModal}/>
            }
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
                                    <input value={teamName} onChange={(e) => setTeamName(e.target.value)} type="text" placeholder="Enter the name of your group"/>
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter your phone number"/>
                                </div>
                            </div>
                            <div className="emailandtopic">
                                <div>
                                    <p>Email</p>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email address"/>
                                </div>
                                <div>
                                    <p>Project Topic</p>
                                    <input value={topic} onChange={(e) => setTopic(e.target.value)} type="text" placeholder="What is your group project topic"/>
                                </div>
                            </div>
                            <div className="selects">
                                <div>
                                    <p>Category</p>
                                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value="">Select your category</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div>
                                    <p>Group Size</p>
                                    <select type="number" value={groupSize} onChange={(e) => setGroupSize(e.target.value)}>
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
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="footerlastdiv">
                            <h6>Please review your registration details before submitting</h6>
                            <div className="checkbox">
                                <input checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" />
                                <p>I agreed with the event terms and conditions  and privacy policy</p>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="button">{buttonText}</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register


// //   // Step 1: Set up state variables to track form input values and form submission status
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   // Step 3: Create a function to handle form submissions
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Step 3a: Set the formSubmitted state to true when the form is submitted
//     setFormSubmitted(true);
//   };

//   // Step 2: Use the useEffect hook to make a POST request when formSubmitted is true
//   useEffect(() => {
//     if (formSubmitted) {
//       // Step 2a: Construct the request body
//       const requestBody = {
//         "email": email,
//         "first_name": firstName,
//         "message": message
//       };

//       // Step 2b: Make the POST request
//       fetch('https://backend.getlinked.ai/hackathon/contact-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           console.log('Submitted Successfully!');
//           alert("Contact form submitted successfully!")

//           // Step 3c: Clear the form inputs after a successful submission
//           setFirstName('');
//           setEmail('');
//           setMessage('');
//         })
//         .catch((error) => {
//           console.error('Error submitting contact form:', error);
//         });
//     }
//   }, [formSubmitted]);