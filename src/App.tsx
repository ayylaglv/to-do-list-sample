// Import this if your are using react-bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Nav from "./components/Navbar";

function App() {
  return (
    <div>
      <Nav />

      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
