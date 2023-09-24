import img from "./assets/img.png"

const Partners = () => {
    return(
        <section className="partners">
            <div className="partnerswrapper">
                <div className="partnersheader">
                    <h1>Partners and Sponsors</h1>
                    <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </div>
                <div className="partnerscontents">
                    <img className="partnersimg"  src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Partners