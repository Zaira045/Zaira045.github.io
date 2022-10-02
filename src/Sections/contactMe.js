import React, { useEffect, useState } from "react";

let txt = ''
export default function ContactMe(props) {
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        if (display) {
            txt = "zairafuentes@berkeley.edu";
        } else {
            txt = "";
        }
    });
    return (
        <div id = "contact">
            <p className = "contactMe">Let's get in contact!</p>
            <button className="email" onClick={() => setDisplay(!display)}> <img className = "icon" src = "emailicon.png"></img></button>
            <p className="displayEmail">{txt}</p>
        </div>
    );
}