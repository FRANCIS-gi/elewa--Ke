import React from "react";
import '../../App.css';
import arrow from "../../assets/arrow.svg";

export const ButtonCircle = (): JSX.Element => {
    return (
        <button className="button">
            <div className="frame">
                <div className="group">
                    <img className="img" alt="Arrow" src={arrow} />
                </div>
                <div className="text-wrapper">Join the waiting list</div>
            </div>
        </button>
    );
};
