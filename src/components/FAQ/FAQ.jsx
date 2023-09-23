import faqimg from "./assets/img.png"
import FAQ from "./FAQ.json"

const Faq = () => {
    return(
        <section id="faq" className="faq">
            <div className="faqwrapper">
                <div className="faqheader">
                    <div className="faqheadertext">
                        <h1>Frequently Ask <span>Question</span></h1>
                        <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                    </div>
                    <div className="faqquestions">
                        {
                            FAQ.map(({text, img, id}) => {
                                return(
                                    <div key={id} className="faqquestion">
                                        <p>{text}</p>
                                        <img src={img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="faqimg">
                    <img src={faqimg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Faq 