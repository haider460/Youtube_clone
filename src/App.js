import "./App.css";
import React, { useState } from "react";
import MainNavBar from "./navBar/MainNavBar/MainNavBar";
import SideBar from "./SideBar/SideBar";
import VoicePops from "./Components/voicePops/VoicePops";

function App() {
    const [sideBar, setSideBar] = useState(false);
    const [toggle, setToggle] = useState(false);
    return (
        <div className="App">
            {toggle && <VoicePops setToggle={setToggle} />}
            <MainNavBar setSideBar={setSideBar} setToggle={setToggle} />
            <SideBar SideBar={sideBar} setSideBar={setSideBar} />
        </div>
    );
}

export default App;
