import React from "react";

export default function NavBarContainer(props) {
    return (
        <div id = "navBar">
            <div className = "navLinks">
                <ul>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#projects">Work</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    );



}