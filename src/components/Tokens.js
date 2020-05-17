import React from "react";
import './Tokens.css';

const Tokens = () => {
    return <div className="tokens">
        <div className="secondaries">
            <i className="pace">6</i>
            <i className="parry">5</i>
            <i className="toughness">9</i>
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

export default Tokens;
