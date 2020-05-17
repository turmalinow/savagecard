import React from "react";
import './Tokens.css';

const Tokens = () => {
    return <div className="tokens">
        <div className="secondaries">
            <i className="pace double"><input value={'6"'}/><input value="k6"/></i>
            <i className="parry"><input value="2"/></i>
            <i className="toughness"><input value="4"/></i>
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
