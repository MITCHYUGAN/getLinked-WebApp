






import Header from "../../components/Header/Header"
import socials from "./assets/socials.png"

const Cont = () => {
    return(
        <>
            <Header faq={'#'} /> 
            <section className="contacts">
                <div className="contactswrapper">
                    <div className="contactinfo">
                        <h1>Get in touch</h1>
                        <p>Contact <br /> Information</p>
                        <p>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
                        <p>Call Us : 07067981819</p>
                        <p>we are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
                        <h3>Share on</h3>
                        <img src={socials} alt="" />
                    </div>
                    <div className="contactform">
                        <form action="" className="form">
                            <div className="formheader">
                                <h3>Questions or need assistance?</h3>
                                <h3>Let us know  about it!</h3>
                            </div>
                            <input type="text" placeholder="First Name" />
                            <input type="text" name="" id="" placeholder="Mail"/>
                            <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                            <button className="button">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cont
