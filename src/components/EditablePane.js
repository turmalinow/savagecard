import React from "react";
import './EditablePane.css';

class EditablePane extends React.Component {

    state = {edit: false, value: ''};

    valueChanged = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        const editHidden = this.state.edit ? 'hidden' : '';
        const readHidden = this.state.edit ? '' : 'hidden';
        return <>
            <div className="editable-pane actions">
                <i onClick={() => this.setState({edit: true, wasValue: this.state.value})} className={`icon edit ${editHidden}`} />
                <i onClick={() => this.setState({edit: false})} className={`icon save ${readHidden}`} />
                <i onClick={() => this.setState({edit: false, value: this.state.wasValue})} className={`icon cancel ${readHidden}`} />
            </div>
            <div className="editable-pane">
                <textarea className={readHidden} onChange={this.valueChanged}  value={this.state.value}/>
                <div className={`${editHidden} user-content`}>{this.state.value.split('\n').map((v, i) => <p key={i}>{v}</p>)}</div>
            </div>
        </>;
    }
}

export default EditablePane;
