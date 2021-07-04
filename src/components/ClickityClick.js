// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {

    constructor(){
        super()
        this.state = {
            hasBennClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            hasBennClicked: true
        }, () => console.log(this.state.hasBennClicked) )   
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBennClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }

}