import React from "react";
import "./Skills.css"
import Attribute from "./Attribute";

const Skills = ({lang}) => {
    return <div className="skills">
        <ul className="level-1">
            <li>
                <Attribute name="strength" lang={lang}/>
            </li>
            <li>
                <Attribute name="vigor" lang={lang}/>
            </li>
            <li>
                <Attribute name="agility" lang={lang}/>
            </li>
            <li >
                <Attribute name="spirit" lang={lang}/>
            </li>
            <li className="column-break">
                <Attribute name="smarts" lang={lang}/>
            </li>
        </ul>
    </div>;
};

export default Skills;
