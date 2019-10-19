import React, { Component } from "react";
import Item from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h1>todo List</h1>
        <Item />
      </section>
    );
  }
}
