import React from 'react';
import './Display.css';

class Display extends React.Component
{
    render()
    {
        return (<div className="display"><div className="text">{this.props.number}</div></div>);
    }
}

export default Display;