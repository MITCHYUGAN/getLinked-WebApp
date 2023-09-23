import tick from './assets/tick.png'
import img from './assets/img.png'

const PrivacyPolicy = () => {
    return(
        <section className='privacy'>
            <div className='privacywrapper'>
                <div className="privacycontents">
                    <div className='privacyheader'>
                        <h1>Privacy Policy and <span>Terms</span></h1>
                        <p>Last updated on September 12, 2023</p>
                        <p className='privacyheaderparagraph'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                    </div>
                    <div className='privacycontent'>
                        <div className='privacycontentwrapper'>
                            <p className='privacycontentparagraph'>
                                At getlinked tech Hackathon 1.0, we value your privacy
                                and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, disclose, 
                                and safeguard your data when you participate in our tech 
                                hackathon event. By participating in our event, you consent 
                                to the practices described in this policy.
                            </p>
                            <div className='privacycontenttexts'>
                                <div className='privacycontenttext'>
                                    <h3>Licensing Policy</h3>
                                    <h4>Here are terms of our Standard License:</h4>
                                </div>
                                <div className='checks'>
                                    <img src={tick} alt="" />
                                    <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                                </div>
                                <div className='checks'>
                                    <img src={tick} alt="" />
                                    <p>You are licensed to use the item available at any free source sites, for your project developement</p>
                                </div>
                                <button className="button">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='privacyimg'>
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy