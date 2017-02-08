import React from "react";

import Todo from "../components/Todo";
// import todo functions
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(), // Gets an array of todos
    };
  }

  // Will Mount only called when DOM is rendered
  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;
    // maps array of todos to list of todo components
    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={TodoActions.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
