import heroImg from "./assets/landing-img.png"
import chain_spark from "./assets/chain_spark.png"
import line from "./assets/curvedline.png"
import timer from "./assets/timer.png"
import bulb from "./assets/bulb.png"

const HeroSection = () => {
    return(
        <section className="herosection">
            <div className="herosectionwrapper">
                <div className="text-line">
                    <h1>Igniting a Revolution in HR Innovation</h1>
                    <img src={line} alt="Curved Line" />
                </div>
                <div className="herosectioncontents">
                    <div className="herosectioncontent">
                        <div className="heresectionheadingtext_chain_spark">
                            <h1>getlinked Tech Hackathon <span>1.0</span></h1>
                            <img src={chain_spark} alt="" />
                        </div>
                        <div className="heresectionheadingtext_chain_sparkmobile">
                            <h1>getlinked Tech</h1>
                            <div>
                                <h1>Hackathon <span>1.0</span></h1>
                                <img src={chain_spark} alt="" />
                            </div>
                        </div>
                        <p>
                            Participate in getlinked tech Hackathon 2023 stand 
                            a chance to win a Big prize
                        </p>
                        <a href="/register">
                            <button className="button">Register</button>
                        </a>
                    </div>
                    <div className="timer">
                        <img src={timer} alt="" />
                    </div>
                </div>
                <div className="herosectionimg">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection