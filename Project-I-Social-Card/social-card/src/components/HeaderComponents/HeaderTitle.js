import React from 'react';
import './Header.css';
class HeaderTitle extends React.Component 
{    
    render()
    { 
        return (<div class="header-title"><strong>{this.props.username}</strong> <span class="grayout">@{this.props.handle} • {this.props.date}</span></div>);
    }
}

export default HeaderTitle;