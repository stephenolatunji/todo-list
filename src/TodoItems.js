import React, { Component } from "react";


class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.writeTasks = this.writeTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    writeTasks(item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        var todoInputs = this.props.entries;
        var listItems = todoInputs.map(this.writeTasks);

        return (
            <ul className="myList">
                {listItems}
            </ul>
        );
    }
};
export default TodoItems;