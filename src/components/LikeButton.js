import React from 'react';

class LikeButton extends React.Component {

    state = {
        likes: 0
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                likes: prevState.likes + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}> Likes: {this.state.likes}</button>
        )
    }

}

export default LikeButton