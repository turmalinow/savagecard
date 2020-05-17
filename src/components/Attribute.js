import React from "react";
import './Attribute.css'

import {attributes, skills} from "../domain/CharacterTemplate"
import * as PropTypes from "prop-types";
import DiceType from "./DiceType";

class Attribute extends React.Component {

    render() {
        let {name, lang} = this.props;
        const skillNames = skills.filter(i => i.attribute === name)
            .filter(i => i.arcane === false)
            .sort((a, b) => {
                return a.name[lang] > b.name[lang] ? 1 : -1
            });
        return <div className="attributes">
            <h3>
                <div className="name">{attributes[name].name[lang]}</div>
                <DiceType className="value" value="k4" />
            </h3>
            <ul className="level-2">
                {skillNames.map(i => <li key={i.key}>
                    <div className="name">{i.name[lang]}</div>
                    <DiceType className="value" value={i.basic ? 'k4' : ''} allowBlank={!i.basic} />
                </li>)}
            </ul>
        </div>;
    }

}

Attribute.propTypes = {
    name: PropTypes.string,
    lang: PropTypes.string
};

export default Attribute;