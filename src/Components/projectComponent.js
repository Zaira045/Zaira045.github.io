import React from "react";

export default function ProjComponent(props) {
    return (
        <div className = "project">
            <img className ="image"src = {props.imageLink}></img>
            <div>
            <div className="title">{props.title}</div>
            <div className="content">{props.content}</div>
            </div>
        
        </div>
    );
}
