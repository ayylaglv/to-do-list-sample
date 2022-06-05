import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getDatabase, ref, push } from "firebase/database";

// Import firebase configuration from firebase.ts file
import firebaseApp from "../firebase";
import "./TodoForm.css";

const TodoForm = () => {
  const db = getDatabase(firebaseApp);

  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
    const todoRef = ref(db, "/todos");
    const todo = {
      title,
      done: false,
    };
    console.log(JSON.stringify(todo));

    push(todoRef, todo);
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Add a task"
        onChange={handleChange}
      />
      <Button className="button" type="submit" onClick={addTodo}>
        push
      </Button>
    </Form>
  );
};

export default TodoForm;
