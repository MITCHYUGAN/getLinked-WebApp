import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"
import img6 from "./assets/img6.png"

// Mobile Images
import imgm1 from "./assets/imgm1.png"
import imgm2 from "./assets/imgm2.png"
import imgm3 from "./assets/imgm3.png"
import imgm4 from "./assets/imgm4.png"
import imgm5 from "./assets/imgm5.png"
import imgm6 from "./assets/imgm6.png"

const TimeLine = () => {
    return(
        <section className="timeline" id="timeline">
            <div className="timelinewrapper">
                <div className="timelineheader">
                    <h1>Timeline</h1>
                    <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                </div>
                <div className="timelinecontents">
                    <div className="timelinecontent timelinecontent1">
                        <div>
                            <h2>Hackathon Announcement</h2>
                            <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                        </div>
                        <img src={img1} alt="" />
                        <div>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                    </div>
                    <div className="timelinecontent timelinecontent2">
                        <div>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                        <img src={img2} alt="" />
                        <div>
                            <h2>Teams Registration begins</h2>
                            <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>
                    </div>
                   <div className="timelinecontent timelinecontent3">
                        <div>
                            <h2>Teams Registration ends</h2>
                            <p>Interested Participants are no longer Allowed to register</p>
                        </div>
                        <img src={img3} alt="" />
                        <div>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                    </div>
                    <div className="timelinecontent timelinecontent4">
                        <div>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                        <img src={img4} alt="" />
                        <div>
                            <h2>Announcement of the accepted teams and ideas</h2>
                            <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                        </div>
                    </div>
                    <div className="timelinecontent timelinecontent5">
                        <div>
                            <h2>Getlinked Hackathon 1.0 Offically Begins</h2>
                            <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                        </div>
                        <img src={img5} alt="" />
                        <div>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                    </div>
                    <div className="timelinecontent timelinecontent6">
                        <div>
                            <h2>November 18, 2023</h2>
                        </div>
                        <img src={img6} alt="" />
                        <div>
                            <h2>Demo Day</h2>
                            <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="timelinecontentsmobile">
                    <div className="timelinecontentmobile timelinecontentsmobile2">
                        <div className="timelinecontentmobileimg">
                            <img src={imgm1} alt="" />
                        </div>
                        <div className="timelinecontentmobiletext">
                            <h2>Hackathon Announcement</h2>
                            <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                    </div>
                    <div className="timelinecontentmobile timelinecontentsmobile2">
                        <div className="timelinecontentmobileimg">
                            <img src={imgm2} alt="" />
                        </div>
                        <div className="timelinecontentmobiletext">
                            <h2>Teams Registration begins</h2>
                            <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                    </div>
                    <div className="timelinecontentmobile timelinecontentmobile3">
                        <div className="timelinecontentmobileimg big-img">
                            <img src={imgm3} alt="" />
                        </div>
                        <div className="timelinecontentmobiletext">
                            <h2>Teams Registration ends</h2>
                            <p>Interested Participants are no longer Allowed to register</p>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                    </div>
                    <div className="timelinecontentmobile timelinecontentmobile4">
                        <div className="timelinecontentmobileimg">
                            <img src={imgm4} alt="" />
                        </div>
                        <div className="timelinecontentmobiletext">
                            <h2>Announcement of the accepted teams and ideas</h2>
                            <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                    </div>
                    <div className="timelinecontentmobile timelinecontentmobile5">
                        <div className="timelinecontentmobileimg big-img">
                            <img src={imgm5} alt="" />
                        </div>
                        <div className="timelinecontentmobiletext">
                            <h2>Getlinked Hackathon 1.0 Offically Begins</h2>
                            <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                            <h2 className="date">November 18, 2023</h2>
                        </div>
                    </div>
                    <div className="timelinecontentmobile timelinecontentmobile6">
                        <div className="timelinecontentmobileimg">
                            <img src={imgm6} alt="" />
                        </div>
                        <div className="timelinecontentmobiletext">
                            <h2>Demo Day</h2>
                            <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                            <h2>November 18, 2023</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimeLine