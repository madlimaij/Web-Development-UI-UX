import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";
import { getTodos } from "../controller/todoController";
import Todo from "../models/Todo";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginBottom: 50,
  },
});

const HomePage: React.FC = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const todos: Todo[] = await getTodos();
      setTodos(todos);
    })();

    return () => {
      setTodos([]);
    };
  }, []);

  return (
    <div className={classes.container}>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default HomePage;
