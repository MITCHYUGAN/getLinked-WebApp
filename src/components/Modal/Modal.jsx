import modalimg from "./assets/congratulation.png"
import winkemoji from "./assets/winkemoji.png"
import purplestar from './assets/purplestar.png'
import lightpurplestar from './assets/lightpurplestar.png'
import star from './assets/star.png'

// eslint-disable-next-line react/prop-types
const Modal = ({othermodal, othersetModal}) => {
    return(
        <>
            {
            othermodal
            &&  
            <section className="modal">
                <div className="modalwrapper">
                    <img src={purplestar} className="purplestar" alt="" />
                    <div>
                        <img src={star} className="star" alt="" />
                        <img className="modalimg" src={modalimg} alt="" />
                        <h1>Congratulations <br /> you have successfully Registered!</h1>
                        <p>Yes, it was easy and you did it! check your mail box for next step <img src={winkemoji} alt="" /></p>
                        <button className="button" onClick={() => othersetModal(false)}>Back</button>
                    </div>
                    <img src={lightpurplestar} className="lightpurplestar" alt="" />
                </div>
            </section>
            }
        </>
    )
}

export default Modal