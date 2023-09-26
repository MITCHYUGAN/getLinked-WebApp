import img from "./assets/img.png"
import purplestar from './assets/purplestar.png'
import lightstar from './assets/lightstar.png'

const Partners = () => {
    return(
        <section className="partners">
            <div className="partnerswrapper">
                <div className="partnersheader">
                    <h1>Partners and Sponsors</h1>
                    <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </div>
                <div className="partnerscontents">
                    <img src={purplestar} className="purplestar" alt="" />
                    <img className="partnersimg"  src={img} alt="" />
                    <img src={purplestar} className="smallpurplestar" alt="" />
                    <img src={lightstar} className="lightstar" alt="" />
                </div>
            </div>
            <div className="partnersgradient partnersgradient1"></div>
            <div className="partnersgradient partnersgradient2"></div>
        </section>
    )
}

export default Partners