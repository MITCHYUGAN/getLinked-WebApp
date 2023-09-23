import { Link } from "react-scroll"
import img from "./assets/logo.png"
import location from "./assets/location.png"
import phone from "./assets/phone.png"
import socials from "./assets/socials.png"

const Foooter = () => {
    return(
        <section className="footer">
            <div className="footerwrapper">
                <div className="footerdiv1">
                    <div>
                        <img src={img} alt="" />
                        <p>
                            Getlinked Tech Hackathon is a technology innovation program 
                            established by a group of organizations with the aim of showcasing 
                            young and talented individuals in the field of technology
                        </p>
                    </div>
                    <p>Terms of Use <span>|</span> Privacy Policy</p>
                </div>
                <div className="footerdiv2">
                    <h2>Useful Links</h2>
                    <Link className="footerlinks">Overview</Link>
                    <Link className="footerlinks">Timeline</Link>
                    <Link className="footerlinks">FAQs</Link>
                    <Link className="footerlinks">Register</Link>
                    <div className="footersocials">
                        <h3>Follow us</h3>
                        <img src={socials} alt="" />
                    </div>
                </div>
                <div className="footerdiv3">
                    <h2>Contact Us</h2>
                    <div>
                        <img src={phone} alt="" />
                        <p>+234 6707653444</p>
                    </div>
                    <div>
                        <img src={location} alt="" />
                        <p>27,Alara Street Yaba 100012 Lagos State</p>
                    </div>
                </div>
            </div>
            <p className="copyright">All rights reserved. © getlinked Ltd.</p>
        </section>
    )
}

export default Foooter