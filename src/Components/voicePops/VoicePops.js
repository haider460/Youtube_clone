import React, { useState } from "react";
import "./voicepop.css";
import { AiOutlineClose } from "react-icons/ai";

export default function VoicePops({ setToggle }) {
    return (
        <>
            <div
                className="voice__pop-container"
                onClick={() => setToggle(false)}
            ></div>
            <div className="pop-container">
                <div className="close__icon">
                    <AiOutlineClose onClick={() => setToggle(false)} />
                </div>
            </div>
        </>
    );
}
