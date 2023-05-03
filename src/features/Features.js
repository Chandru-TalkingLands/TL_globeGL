import React from "react";
import "../features/features.css"
import Insights from "../assets/Insights.svg"
import Lens from "../assets/Lens.svg"
import Tales from "../assets/Tales.svg"

const Features = () => {
    return (
        <div>
            <section className="lens">
                <p className="feature-title">Magical Lens</p>
                <div className="feature-content">
                    <div>
                        <img className="img" src={Lens} />
                    </div>
                    <div className="feature-description">
                        <p>
                            Lens enables you to discover exciting new properties with unique perspective by providing you with option-based view of multiple choices that you select and filter through. Lens uses custom geo spatial stack and cartographic information along with a buttery smooth maps experience to generate instant views of properties based on myriad.
                        </p>
                    </div>
                </div>
            </section>

            <section className="deep-insights">
                <p className="feature-title">Deep Insights</p>
                <div className="feature-content">
                   
                    <div className="feature-description">
                        <p>
                            Lens enables you to discover exciting new properties with unique perspective by providing you with option-based view of multiple choices that you select and filter through. Lens uses custom geo spatial stack and cartographic information along with a buttery smooth maps experience to generate instant views of properties based on myriad.
                        </p>
                    </div>
                    <div>
                        <img className="img" src={Insights} />
                    </div>
                </div>
            </section>
            
            <section className="tl-tales">
                <p className="feature-title">TL Tales</p>
                <div className="feature-content">
                    <div>
                        <img className="img" src={Tales} />
                    </div>
                    <div className="feature-description">
                        <p>
                            Lens enables you to discover exciting new properties with unique perspective by providing you with option-based view of multiple choices that you select and filter through. Lens uses custom geo spatial stack and cartographic information along with a buttery smooth maps experience to generate instant views of properties based on myriad.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Features;
