import "./App.css";
import React, { useState } from "react";
import MainNavBar from "./navBar/MainNavBar/MainNavBar";
import SideBar from "./SideBar/SideBar";

function App() {
    const [sideBar, setSideBar] = useState(false);
    return (
        <div className="App">
            <MainNavBar setSideBar={setSideBar} />
            <SideBar SideBar={sideBar} setSideBar={setSideBar} />
        </div>
    );
}

export default App;
