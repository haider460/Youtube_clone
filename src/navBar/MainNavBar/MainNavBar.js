import React, { useState } from "react";
import "./MainNavBar.css";
import { VscThreeBars } from "react-icons/vsc";
import { ImMic } from "react-icons/im";
import HorizontalScroll from "react-scroll-horizontal";
import {
    BsSearch,
    BsCameraVideo,
    BsGrid3X3Gap,
    BsBell,
    BsFillEmojiNeutralFill,
} from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";

let arry = [
    "All",
    "Mixes",
    "Css",
    "Django",
    "Music",
    "Html",
    "Computer",
    "Mixes",
    "Sales",
    "C++",
    "Cricket",
    "Javascript",
    "Computer",
    "Sales",
    "C++",
    "Cricket",
    "Javascript",
    "Html",
    "Computer",
    "Mixes",
    "Sales",
    "C++",
    "Cricket",
    "Javascript",
    "Computer",
    "Sales",
    "C++",
    "Cricket",
    "Javascript",
    "Html",
    "Computer",
    "Mixes",
    "Sales",
    "C++",
    "Cricket",
    "Javascript",
    "Computer",
    "Sales",
    "C++",
    "Cricket",
    "Javascript",
];

export default function MainNavBar({ setSideBar, setToggle }) {
    const [state, setState] = useState(13);
    const navLinks = [
        { id: 1, Icon: BsCameraVideo },
        { id: 1, Icon: BsGrid3X3Gap },
        { id: 1, Icon: BsBell },
        { id: 1, Icon: BsFillEmojiNeutralFill },
    ];

    const handleScroll = (e) => {
        console.log("in Scroll function", e);
        e.deltaX += 10;
    };
    return (
        <>
            <div className="first__nav">
                <div className="nav-container">
                    <div>
                        <VscThreeBars
                            onClick={() => setSideBar(true)}
                            className="navbars__bar-icon"
                        />
                    </div>
                    <div className="nav_youtube-icon">
                        <img
                            src="./youtube-clone.png"
                            className="youtube-icon"
                        />
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
                        <div onClick={() => setToggle(true)}>
                            <NavLinks Icon={ImMic} />
                        </div>
                    </div>
                    <div className="nav-icons">
                        {navLinks?.map((data) => (
                            <NavLinks key={data?.id} Icon={data.Icon} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="second__nav">
                <HorizontalScroll className="horizentel__scroll">
                    {arry?.map((e) => (
                        <p className="scroll-text">{e}</p>
                    ))}
                </HorizontalScroll>
            </div>
        </>
    );
}

export function NavLinks({ Icon }) {
    return (
        <div className="icon_background">
            {Icon && <Icon className="nav-icon" />}
        </div>
    );
}
