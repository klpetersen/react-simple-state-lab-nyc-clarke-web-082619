import React, { Component } from 'react';


export default class Cell extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            color: this.props.value
        }
    }

    setColor = () => { 
        this.setState({ 
            color: '#333'
        })
    }

    render(){ 
        console.log(this.state)
        return (
            <div 
            className='cell'
            style={{backgroundColor: this.state.color}}
            onClick={this.setColor}>
            </div>
        )
       
    }


}