import React from "react";
import "./SideBar.css";
import { VscThreeBars } from "react-icons/vsc";
import {
    SideBarLinks,
    MainSideBarWrapper,
    SideBarWrapper,
} from "../Components/sideBarLinks/sideBarLinks";

import {
    MdHomeFilled,
    MdOutlineExplore,
    MdOutlineVideoLibrary,
    MdOutlineSubscriptions,
} from "react-icons/md";

export default function LargeSideBar({ SideBar, setSideBar }) {
    const obj = [
        { id: 1, Icon: MdHomeFilled, description: "Home" },
        { id: 2, Icon: MdOutlineExplore, description: "Explore" },
        { id: 3, Icon: MdOutlineSubscriptions, description: "Subscriptions" },
        { id: 4, Icon: MdOutlineVideoLibrary, description: "Library" },
        { id: 5, Icon: MdHomeFilled, description: "History" },
        { id: 6, Icon: MdOutlineSubscriptions, description: "Your Videos" },
        { id: 7, Icon: MdOutlineVideoLibrary, description: "Watch Later" },
        { id: 8, Icon: MdOutlineExplore, description: "Like Videos" },
        { id: 9, Icon: MdHomeFilled, description: "Your Videos" },
    ];
    return (
        <>
            <MainSideBarWrapper SideBar={SideBar}>
                <div className="sidebar__navigation">
                    <VscThreeBars
                        onClick={() => setSideBar(false)}
                        className="sidebar__bars-icon"
                    />
                    <img
                        src="./youtube-clone.png"
                        className="sidebar__youtube-icon"
                    />
                </div>
                <main className="main__sidebar-body ">
                    {obj?.map((data, index) => (
                        <div key={data?.id}>
                            <SideBarLinks
                                Icon={data?.Icon}
                                description={data?.description}
                            />
                            {index === 2 && <hr />}
                        </div>
                    ))}
                </main>
            </MainSideBarWrapper>
            <section
                className={`nav-big_sidebar  ${
                    SideBar && "nav-big_sidebar-active"
                }`}
                onClick={() => setSideBar(false)}
            ></section>

            {!SideBar && (
                <>
                    <SideBarWrapper>
                        {obj?.slice(0, 4)?.map((data) => (
                            <SideBarLinks
                                key={data?.id}
                                Icon={data?.Icon}
                                description={data.description}
                                SideBar={SideBar}
                            />
                        ))}
                    </SideBarWrapper>
                </>
            )}
        </>
    );
}

// React.propTypes = {
//     SideBar: PropTypes.bool,
//     setSideBar: PropTypes.func,
// };
