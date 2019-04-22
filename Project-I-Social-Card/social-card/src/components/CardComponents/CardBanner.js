import React from 'react';
import './Card.css';

class CardBanner extends React.Component 
{
    render(){return(<img src={`${this.props.imgscr}`} alt="" width="80%" height="80%"></img>);}
}

export default CardBanner;