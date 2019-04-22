import React from 'react';
import './Card.css';


class CardContent extends React.Component 
{
    render()
    {
        return(<div class="content">
            <strong><div class="">{this.props.title}</div></strong>
            <p>{this.props.content}</p>
            <a class="grayout" href={`https://www.${this.props.url}`} target="tab">{this.props.url}</a>
        </div>)
    }
}

export default CardContent;