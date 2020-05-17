import React from "react";

const DiceTypes = [4, 6, 8, 10, 12];

class DiceType extends React.Component {
    state = {value: DiceTypes[0]};

    onclick(event) {
        event.preventDefault();
        let indexOf = DiceTypes.indexOf(this.state.value) + 1;
        this.setState({value: DiceTypes[indexOf % DiceTypes.length]});
    }

    render() {
        return (
            <span onClick={(e) => this.onclick(e)} onContextMenu={(e) => this.onclick(e)}>k{this.state.value}</span>
        );
    }
}

export default DiceType;
