// Import this if your are using react-bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
