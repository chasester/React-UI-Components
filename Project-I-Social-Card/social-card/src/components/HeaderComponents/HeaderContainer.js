import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

class HeaderContainer extends React.Component 
{
    render(){
        var text = "Let's Learn Recat by building simple interfaces with componets. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using componets you are well on yoru way to mastering React.";
        var imgurl = 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png';
        return (
            <div class="header-container">
                    <ImageThumbnail imgscr={imgurl} />
                    <div class="content-container">
                        <HeaderTitle username="Lambda School" handle="LambdaSchool" date="April 22" />
                        <HeaderContent content={text} />
                    </div>
            </div>
        );
    }
    
}

export default HeaderContainer;
