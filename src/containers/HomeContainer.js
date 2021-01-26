import React from 'react';
import UserInput from '../components/UserInput';
import Jumbotron from 'react-bootstrap/Jumbotron';

class HomeContainer extends React.Component {
    
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Get Started</h1>
                    <p>Welcome to DIY Conversation Cards, please enter username to get started.</p>
                    <UserInput/>
                </Jumbotron>
            </div>
        )
    }

}


export default HomeContainer