import React from "react";
import ProjComponent from "../Components/projectComponent";
export default function ProjectContainer(props) {
    return (
        <div>
            <div id='projects'>
            <ProjComponent imageLink = "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj3/image/split_point.png" title = "Gitlet" content = "Implemented version control system in Java inspired in Git for a Data Structures course.  Supports features including adding and committing files, creating branches, merging branches, and pushing and pulling from remote branches. " ></ProjComponent>
            <ProjComponent imageLink = "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj1/img/figure3.png" title = "Enigma" content = " Developed a digital representation of WWII German Enigma cipher machine in Java enabling encryption and decryption.  Used object-oriented design, string manipulation, and file I/O to replicate mechanical elements of original machine" ></ProjComponent>
            <ProjComponent imageLink = "https://th.bing.com/th/id/R.d72db2c623415f186f297d4caf8daf04?rik=mqRrb%2bbc%2bDogmg&riu=http%3a%2f%2fcaseytakeda.com%2fassets%2fprojimages%2fscheme.png&ehk=ZPETFEUkRZQMOiDPo%2f90khkNLAryCK1HDQaf%2bUOaBHc%3d&risl=&pid=ImgRaw&r=0" title = "Scheme" content = "The Scheme project involves writing an interpreter for the Scheme language. In this project, I developed an interpreter for a subset of the Scheme language." ></ProjComponent>
            </div>
        </div>
    );


}