import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import fetchAvatar from "../controller/avatarController";
import { addTodo } from "../controller/todoController";
import Todo from "../models/Todo";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  btn: {
    backgroundColor: "#CDEDF6",
    "&:disabled": {
      color: "gray",
    },
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  error: {
    color: "red",
  },
});

type CreateTodoProps = {
  setTodos: (todos: Todo[]) => void;
  todos: Todo[];
};

const CreateTodo: React.FC<CreateTodoProps> = ({ todos, setTodos }) => {
  const classes = useStyles();
  const [todoMessage, setTodoMessage] = useState<string>("");
  const [hasError, setHasError] = useState(false);

  const addNewTodo = async (): Promise<void> => {
    const newTodo: Todo = {
      completed: false,
      message: todoMessage,
      avatar: await fetchAvatar(),
    };
    const { isSuccess, body } = await addTodo(newTodo);
    if (isSuccess && body) {
      setTodos([...todos, body]);
      setTodoMessage("");
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const addOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };

  return (
    <div className={classes.container}>
      <h1>Add new Todo</h1>
      {hasError && (
        <p className={classes.error}>
          An error occured whild trying to save Todo
        </p>
      )}
      <div className={classes.inputContainer}>
        <input
          type="text"
          placeholder="Add new todo..."
          value={todoMessage}
          onChange={(e) => setTodoMessage(e.target.value)}
          onKeyDown={addOnEnter}
          autoFocus
        />
        <button
          type="button"
          onClick={addNewTodo}
          disabled={todoMessage.length === 0}
          className={classes.btn}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
