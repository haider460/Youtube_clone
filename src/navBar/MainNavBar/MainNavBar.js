import React from "react";
import "./MainNavBar.css";
import { VscThreeBars } from "react-icons/vsc";
import { ImMic } from "react-icons/im";
import {
    BsSearch,
    BsCameraVideo,
    BsGrid3X3Gap,
    BsBell,
    BsFillEmojiNeutralFill,
} from "react-icons/bs";

export default function MainNavBar({ setSideBar }) {
    const navLinks = [
        { id: 1, Icon: BsCameraVideo },
        { id: 1, Icon: BsGrid3X3Gap },
        { id: 1, Icon: BsBell },
        { id: 1, Icon: BsFillEmojiNeutralFill },
    ];
    return (
        <div className="nav-container">
            <div>
                <VscThreeBars
                    onClick={() => setSideBar(true)}
                    className="navbars__bar-icon"
                />
            </div>
            <div className="nav_youtube-icon">
                <img src="./youtube-clone.png" className="youtube-icon" />
            </div>
            <div className="nav_youtube-search">
                <input
                    type="text"
                    className="youtube-search_input"
                    placeholder="Search"
                />
                <div className="nav-search-btn">
                    <a href="#">
                        {" "}
                        <BsSearch />
                    </a>
                </div>
                <NavLinks Icon={ImMic} />
            </div>
            <div className="nav-icons">
                {navLinks?.map((data) => (
                    <NavLinks key={data?.id} Icon={data.Icon} />
                ))}
            </div>
        </div>
    );
}

function NavLinks({ Icon }) {
    return (
        <div className="icon_background">
            {Icon && <Icon className="youtube-mic_icon" />}
        </div>
    );
}
