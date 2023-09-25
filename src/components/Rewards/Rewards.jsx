import trophyimg from "./assets/trophy.png"
import levelimg from "./assets/levelsimg.png"

const Rewards = () => {
    return(
        <section className="rewards">
            <div className="rewardswrapper">
                <div className="rewardsheader"> 
                    <h1>Prizes and <span>Rewards</span></h1>
                    <p>Highlight of the prizes or rewards for winners and for participants. </p>
                </div>
                <div className="rewardsimages">
                    <div className="rewardstrophyimg">
                        <img src={trophyimg} alt="" />
                    </div>
                    <div className="rewardscontentsimg">
                        <img src={levelimg} alt="" />
                    </div>
                </div>
            </div>
            <div className="rewardsgradient rewardsgradient1"></div>
            <div className="rewardsgradient rewardsgradient2"></div>
        </section>
    )
}

export default Rewards