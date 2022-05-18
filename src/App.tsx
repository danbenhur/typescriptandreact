import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const addTodoHandler = (todoText: string) => {};

  const listItems = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={listItems} />
    </div>
  );
}

export default App;
