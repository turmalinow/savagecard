import React from "react";
import './Tokens.css';
import {diceTypeFormat, distanceFormat, numsOnly} from "../helpers";

const Tokens = () => {
    return <div className="tokens">
        <div className="secondaries">
            <i className="pace double">
                <FilteredInput value={'6"'} filter={(value) => distanceFormat(value, '"')} />
                <FilteredInput value="k6" filter={(value) => diceTypeFormat(value)}/>
            </i>
            <i className="parry">
                <FilteredInput value="2" filter={(value) => numsOnly(value)}/>
            </i>
            <i className="toughness">
                <FilteredInput value="4" filter={(value) => numsOnly(value)}/>
            </i>
        </div>
        <div className="wounds">
            <i className="fatigue-1" />
            <i className="fatigue-2" />
            <i className="out" />
            <i className="wound-3" />
            <i className="wound-2" />
            <i className="wound-1" />
        </div>
    </div>;
};

class FilteredInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {value: props.value};
        this.filter = (value) => value;
        if (props.filter) {
            this.filter = props.filter;
        }
    }

    render() {
        return <input onChange={(e) => this.valueChanged(e)} value={this.state.value}/>;
    }

    valueChanged(e) {
        this.setState({value: this.filter(e.target.value)});
    }
}

export default Tokens;
