import React from "react";
import "./Step.css";

function Step(props) {
    const stepImage = props.stepImage;
    const stepHeading = props.stepHeading; 
    const stepDescription = props.stepDescription;
    return (
        <div className="step-container">
            <h3>{stepHeading}</h3>
            <p>{stepDescription}</p>
            <img src={stepImage} alt="Step Screenshot"/>
        </div>
    )
}

export default Step;