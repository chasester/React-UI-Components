import React from 'react';
import './Header.css';

class HeaderContent extends React.Component 
{
    render()
    {
        return(<div class="content">{this.props.content}</div>)
    }
}

export default HeaderContent;