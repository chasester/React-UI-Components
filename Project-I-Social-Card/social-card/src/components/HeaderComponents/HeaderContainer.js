import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

class HeaderContainer extends React.Component 
{
    render(){
        var text = "Let's Learn Recat by building simple interfaces with componets. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using componets you are well on yoru way to mastering React.";
        return (
            <div class="header-container">
                    <div class="content-container">
                        <HeaderTitle username="Lambda School" handle="LambdaSchool" date="April 22" />
                        <HeaderContent content={text} />
                    </div>
            </div>
        );
    }
    
}

export default HeaderContainer;
