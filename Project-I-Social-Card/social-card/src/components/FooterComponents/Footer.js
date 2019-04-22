import React from 'react';
import './Footer.css';

class FooterContainer extends React.Component 
{
    render(){
        return (
            <div class="footer-container" id="noselect">
                    <span class="icon " onClick=""><i class="far fa-comment"></i> {this.props.comments ? this.props.comments : "" }</span>
                    <span class="icon " onClick=""><i class="fas fa-sync"></i> {this.props.reposts ? this.props.reposts : "" }</span>
                    <span class="icon " onClick=""><i class="far fa-heart"></i> {this.props.likes ? this.props.likes : "" }</span>
                    <span class="icon " onClick=""><i class="far fa-envelope"></i> {this.props.messages ? this.props.messages : "" }</span>
            </div>
        );
    }
    
}

export default FooterContainer;