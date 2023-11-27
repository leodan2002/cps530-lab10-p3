import React from "react";
import "./Challenge.css";

function Challenge(props) {
    const challengeHeading = props.challengeHeading; 
    const challengeDescription = props.challengeDescription;
    const challengeSolution = props.challengeSolution;
    return (
        <div className="challenge-container">
            <h3>{challengeHeading}</h3>
            <p>Challenge: {challengeDescription}</p>
            <p>Solution: {challengeSolution}</p>
        </div>
    )
}

export default Challenge;