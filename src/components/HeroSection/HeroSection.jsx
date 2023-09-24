// import heroImg from "./assets/landing-img.png"
import chain_spark from "./assets/chain_spark.png"
import line from "./assets/curvedline.png"
import timer from "./assets/timer.png"
import bulb from "./assets/bulb.png"
import img from './assets/img.png'
import disco from './assets/disco.png'
import lightstar from './assets/lightstar.png'
import star from './assets/star.png'

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
                        <img src={star} alt="" className="star" />
                        <div className="heresectionheadingtext_chain_spark">
                            <h1>getlinked Tech Hackathon <span>1.0</span>
                                <img className="bulb" src={bulb} alt="" />
                            </h1>
                            <img className="spark_chain" src={chain_spark} alt="" />
                        </div>
                        <div className="heresectionheadingtext_chain_sparkmobile">
                            <h1>getlinked Tech 
                                <img className="bulbmobile" src={bulb} alt="" />
                            </h1>
                            <div>
                                <h1>Hackathon <span>1.0</span>
                                </h1>
                                <img className="spark_chain_mobile" src={chain_spark} alt="" />
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
                        <img src={lightstar} className="lightstar" alt="" />
                        <img src={timer} alt="" />
                    </div>
                </div>
                <div className="herosectionimg">
                    {/* <img src={heroImg} alt="" /> */}
                    <div>
                        <img className="disco" src={disco} alt="" />
                        <img className="landingimg" src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className="circlegradient circlegradient1"></div>
            <div className="circlegradient circlegradient2"></div>
        </section>
    )
}

export default HeroSection

// circlegradient