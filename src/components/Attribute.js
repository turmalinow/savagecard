import React from "react";
import './Attribute.css'

import {attributes, skills} from "../domain/CharacterTemplate"

const Attribute = ({name, lang}) => {
    const skillNames = skills.filter(i => i.attribute === name)
        .filter(i => i.arcane === false)
        .sort((a, b) => {
            return a.name[lang] > b.name[lang] ? 1 : -1
        });
    return <div className="attributes">
        <h3>
            <div className="name">{attributes[name].name[lang]}</div>
            <div className="value">k4</div>
        </h3>
        <ul className="level-2">
            {skillNames.map(i => <li key={i.key}>
                <div className="name">{i.name[lang]}</div>
                <div className="value">{i.basic ? 'k4' : ''}</div>
            </li>)}
        </ul>
    </div>;
};

export default Attribute;