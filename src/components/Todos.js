import React, { Component } from 'react';
import Todo from './Todo';

export default class Todos extends Component {

    render() {
        return this.props.todos.map((list) => {
            return <Todo id={list.id} onComplete={this.props.onComplete} onDelete={this.props.onDelete} title={list.title} key={list.id} finished={list.finished} />
        })
    }
}
