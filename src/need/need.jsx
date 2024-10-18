import React from "react";
import "./need.css"

const Need = () => {
    return (
    <div className="container-N">
        <div className="header-N">
            <h1>Need</h1>
            <button className="view-all">View All</button>
        </div>

        <div className="card-container">
        <div className="card">
                    <h2>Samuel John</h2>
                    <button className="training-btn">See More</button>
            </div>

            <div className="card">
                    <h2>Samuel John</h2>
                    <button className="training-btn">See More</button>
            </div>

        </div>
    </div>
    )
};
export default Need;