import React, { Component } from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if (this._inputElement.value !== '') {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        e.preventDefault();
    }


    deleteItem(key) {
        var myItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: myItems
        });
    }



    render() {
        return (
            <div className="todo">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Input Task"></input>
                        <button type="submit">Add</button>
                    </form>

                </div>
                <TodoItems entries={this.state.items}
                    delete={this.deleteItem} />

            </div>
        );
    }

}

export default TodoList;
