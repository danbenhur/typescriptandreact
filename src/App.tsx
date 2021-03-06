import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setListItems((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const onRemoveItem = (todoId: string) => {
    setListItems((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={listItems} onRemoveItem={onRemoveItem} />
    </div>
  );
}

export default App;
