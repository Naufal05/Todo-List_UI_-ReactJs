// We are going to built the UI and the logic for a single todo item.
import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <p>{this.props.todoData}</p> */}
        <td style={{ width: 15 }} className="text-center">
          {this.props.number}
        </td>
        <td style={{ width: 15 }} className="text-center">
          <input type="checkBox" />
        </td>
        <td style={{ width: 200 }} className="text-center">
          {this.props.myTodo}
        </td>
        <td style={{ width: 50 }} className="text-center">
          <input
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.myDelete(this.props.myTodo)}
            placeholder="Delete"
          />
        </td>
      </React.Fragment>
    );
  }
}

// Whenever multiple childrens are rendering the data at that time you can use
// the React.Fragments or <> </>

//myTodo is the local variable here
