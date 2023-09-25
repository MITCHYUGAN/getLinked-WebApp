import rulesImg from "./assets/img1.png"
import lightstar from './assets/lightstar.png'
import star from './assets/star.png'

const Rules = () => {
    return(
        <section className="rules">
            {/* <div className="circle-gradient"></div> */}
            <div className="ruleswrapper">
                <div className="rulescontents">
                    <img className="rulesstar" src={lightstar} alt="" />
                    <h1>Rules and <span>Guidelines</span></h1>
                    <p>
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you&apos;re a coding genius, a 
                        design maverick, or a concept wizard, you&apos;ll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that&apos;s what we&apos;re all about!
                    </p>
                    <img className="mobilerulesstar" src={star} alt="" />
                </div>
                <div className="rulesimg">
                    <img src={rulesImg} alt="Rules and Guidelines Image" />
                </div>
            </div>
            <div className="rulesgradient rulesgradient1"></div>
            <div className="rulesgradient rulesgradient2"></div>
        </section>
    )
}

export default Rules