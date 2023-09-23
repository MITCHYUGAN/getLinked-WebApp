import img from "./assets/img.png"

const Criteria = () => {
    return(
        <section className="criteria">
            <div className="criteriawrapper">
                <div className="criteriaimg">
                    <img src={img} alt="" />
                </div>
                <div className="criteriacontents">
                    <h1>Judging Criteria <span>Key attributes</span></h1>
                    <p>
                        <span>Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the
                        solution. Consider whether it addresses a real-world problem in a novel 
                        way or introduces innovative features.
                    </p>
                    <p>
                        <span>Functionality</span>: Assess how well the solution works. Does it perform its 
                        intended functions effectively and without major issues? Judges would
                        consider the completeness and robustness of the solution.
                    </p>
                    <p>
                        <span>Impact and Relevance</span>: Determine the potential impact of the solution 
                        in the real world. Does it address a significant problem, and is it relevant 
                        to the target audience? Judges would assess the potential social, 
                        economic, or environmental benefits.
                    </p>
                    <p>
                        <span>Technical Complexity</span>: Evaluate the technical sophistication of the solution. 
                        Judges would consider the complexity of the code, the use of advanced 
                        technologies or algorithms, and the scalability of the solution.
                    </p>
                    <p>
                        <span>Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered 
                        to the rules and guidelines of the hackathon, including deadlines, use of 
                        specific technologies or APIs, and any other competition-specific requirements.
                    </p>
                    <button className="button">Read More</button>
                </div>
            </div>
        </section>
    )
}

export default Criteria