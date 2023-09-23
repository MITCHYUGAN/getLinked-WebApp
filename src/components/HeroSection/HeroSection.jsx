import heroImg from "./assets/landing-img.png"
// import gradient from "./assets/gradient.png"
import line from "./assets/curvedline.png"
import timer from "./assets/timer.png"
import bulb from "./assets/bulb.png"

const HeroSection = () => {
    return(
        <section className="herosection">
            {/* <img src={gradient} className="gradient" /> */}
            <div className="text-line">
                <h1>Igniting a Revolution in HR Innovation</h1>
                <img src={line} alt="Curved Line" />
            </div>
            <div className="herosectionwrapper">
                <div className="herosectioncontents">
                    <div className="herosectioncontent">
                        <img src={bulb} className="bulb" alt="" />
                        {/* <h1>getlinked Tech Hackathon <span>1.0</span></h1> */}
                        {/* <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p> */}
                        {/* <button className="button">Register</button> */}
                    </div>
                    <div className="timer">
                        <img src={timer} alt="Timer Image" />
                    </div>
                </div>
                <div className="herosectionimg">
                    <img src={heroImg} alt="Hero Section Image" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection