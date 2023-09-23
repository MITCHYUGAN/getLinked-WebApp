import introImg from "./assets/ideabulb.png"
import purplestar from "./assets/purplestar.png"
import introimg from "./assets/introimg.png"

const IntroSection = () => {
    return(
        <section className="introsection" id="overview">
            <div className="introwrapper">
                <div className="introimg">
                    <img className="introimgdesk" src={introImg} alt="Idea Image" />
                    <img className="introimgmobile" src={introimg} alt="Idea Image" />
                </div>
                <div className="introcontent">
                    <img src={purplestar} className="purplestar" alt="" />
                    <h1>Introduction to getlinked <span>tech Hackathon 1.0</span></h1>
                    <p>
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you&apos;re a coding genius, a 
                        design maverick, or a concept wizard, you&apos;ll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that&apos;s what we`re all about!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default IntroSection