import React from 'react';
import './Header.css';

class ImageThumbnail extends React.Component 
{
    render(){return(<img class="img-title" src={`${this.props.imgscr}`} alt="" width="9%" height="9%"></img>);}
}

export default ImageThumbnail;