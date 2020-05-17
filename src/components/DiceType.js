import React from "react";
import {diceTypes} from "../domain/CharacterTemplate";
import { mod } from "../helpers";

class DiceType extends React.Component {

    constructor(props) {
        super(props);

        this.state = {value: props.value};

        this.localDiceTypes = [...diceTypes, ...props.allowBlank ? ['']: []];
    }

    render() {
        return (
            <div className={this.props.className} onClick={(e) => this.increment(e)}
                  onContextMenu={(e) => this.decrement(e)}>{this.state.value}</div>
        );
    }

    increment(event) {
        this.setState({value: this.nextItem(1)});
    }

    decrement(event) {
        event.preventDefault();
        this.setState({value: this.nextItem(-1)});
    }

    nextItem(diff) {
        const nextIndex = this.localDiceTypes.indexOf(this.state.value) + diff;
        const moduloResult = mod(nextIndex, this.localDiceTypes.length);
        const result = this.localDiceTypes[moduloResult];
        return result;
    }

}

export default DiceType;
