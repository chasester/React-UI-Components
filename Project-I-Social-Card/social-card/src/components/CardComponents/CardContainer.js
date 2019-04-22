import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

class CardContainer extends React.Component 
{
    render(){
        var url = 'reactjs.org';
        var title = 'Get started with React';
        var text = 'React Makes it painless to create interactive uls. Design simple views for each state in your application.';
        var imgurl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';
        return (
            <div class="card-container">
                    <CardBanner imgscr={imgurl} />
                    <CardContent title={title} content={text} url={url} />
            </div>
        );
    }
    
}

export default CardContainer;