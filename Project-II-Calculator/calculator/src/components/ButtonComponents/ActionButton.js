import React from 'react';
import './Button.css';


class ActionButton extends React.Component 
{
    render()
    {
        return(
            <div className={`button but-${this.props.name}`}  onClick={() => this.props.callback(this.props.text)}>{this.props.text}</div>
        );
    }
}

export default ActionButton;