import React from 'react';
import './Header.css';

class ImageThumbnail extends React.Component 
{
    render(){return(<img src={`${this.props.imgscr}`} alt="" width="10%" height="10%"></img>);}
}

export default ImageThumbnail;