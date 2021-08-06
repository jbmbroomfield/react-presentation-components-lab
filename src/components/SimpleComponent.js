import React from 'react'

class SimpleComponent extends React.Component {

    state = {
        mood: "happy"
    }

    handleClick = () => {
        const nextMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({
            ...this.state,
            mood: nextMood
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent