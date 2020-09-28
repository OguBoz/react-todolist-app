import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        text: ''
    }


    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    addElement = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.addElement}>
                    <input type="text" placeholder="Enter todo..." onChange={this.onChange} value={this.state.text} />
                </form>
            </div>
        )
    }
}
