import React, { Component } from 'react'

export default class Todo extends Component {
    myStyle = () => {
        return {
            background: 'grey',
            padding: '5px',
            borderBottom: '2px black solid',
            position: 'relative',
            textDecoration: this.props.finished ? 'line-through' : 'none'
        }
    }

    buttonStyle = () => {
        return {
            background: 'red', 
            color: 'white', 
            position:'absolute',
             right:'5px', 
             top: '30%',
             padding: '5px'

        }
    }

    render() {
        return (
            <div style={this.myStyle()}>
                <button onClick={this.props.onDelete.bind(this, this.props.id)} style={this.buttonStyle()}>x</button>
                <input type="checkbox" onChange={this.props.onComplete.bind(this,this.props.id)} />
                <h2>{ this.props.title  }</h2>
            </div>
        )
    }
}
