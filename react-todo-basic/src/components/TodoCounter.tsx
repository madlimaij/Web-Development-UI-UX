import React from "react";
import { createUseStyles } from "react-jss";
import Todo from "../models/Todo";
import Separator from "./Separator";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

type TodoCounterProps = {
  todos: Todo[];
};

const TodoCounter: React.FC<TodoCounterProps> = ({ todos }) => {
  const classes = useStyles();

  const completedTodos: number = todos.filter((el) => el.completed).length;
  const unFinishedTodos: number = todos.filter((el) => !el.completed).length;

  return (
    <>
      <Separator />
      <div className={classes.container}>
        <div>Completed todos: {completedTodos}</div>
        <div>Unfinished todos: {unFinishedTodos}</div>
      </div>
      <Separator />
    </>
  );
};

export default TodoCounter;
