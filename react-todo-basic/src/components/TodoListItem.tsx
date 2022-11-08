import classnames from "classnames";
import React from "react";
import { createUseStyles } from "react-jss";
import { updateTodo, deleteTodo } from "../controller/todoController";
import Todo from "../models/Todo";

const useStyles = createUseStyles({
  todo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid transparent",
    borderRadius: 10,
    backgroundColor: "#074446",
    "&:hover": {
      border: "2px solid #5EB1BF",
    },
    padding: [0, 5],
  },
  unfinished: {
    backgroundColor: "#EF7B45",
  },
  todoSection: {
    padding: 10,
  },
  avatar: {
    padding: [5, 0],
    display: "flex",
    borderRadius: 35,
  },
  deleteBtn: {
    color: "#D84727",
    fontWeight: 700,
    border: "1px solid transparent",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    padding: [0, 5],
    width: 35,
    height: 35,
    "&:disabled": {
      opacity: 0.3,
    },
  },
});

type TodoListItemProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  todos,
  setTodos,
}) => {
  const classes = useStyles();

  const completeTodo = async (todo: Todo): Promise<void> => {
    const todoToBeUpdated: Todo = {
      id: todo.id,
      message: todo.message,
      completed: !todo.completed,
      avatar: todo.avatar,
    };
    const { isSuccess, body } = await updateTodo(todoToBeUpdated);
    if (isSuccess && body) {
      const updatedTodos: Todo[] = todos.map((el) => {
        if (el.id === todo.id) {
          return body;
        }
        return el;
      });
      setTodos(updatedTodos);
    }
  };

  const removeTodo = async (e: React.MouseEvent, todo: Todo): Promise<void> => {
    e.stopPropagation();
    if (!todo.completed) {
      const response = await deleteTodo(todo);
      if (response) {
        const updatesTodos: Todo[] = todos.filter((el) => el.id !== todo.id);
        setTodos(updatesTodos);
      }
    }
  };

  return (
    <div
      className={classnames([
        classes.todo,
        !todo.completed && classes.unfinished,
      ])}
      onClick={() => completeTodo(todo)}
      key={todo.id}
    >
      <img
        src={todo.avatar}
        width={45}
        height={45}
        className={classes.avatar}
        alt=""
      />
      <div className={classes.todoSection}>{todo.message}</div>
      <div>
        <button
          onClick={(e) => removeTodo(e, todo)}
          className={classnames([classes.deleteBtn])}
          disabled={todo.completed}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
