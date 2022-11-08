import Todo from "../models/Todo";

const API_PATH = "http://localhost:8080/todos";

const postOptions: RequestInit = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const deleteOptions: RequestInit = {
  method: "DELETE",
};

const changeOptions: RequestInit = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
};

type FetchResponse<T> = {
  body?: T;
  isSuccess: boolean;
};

async function addTodo(todo: Todo): Promise<FetchResponse<Todo>> {
  const response = await fetch(API_PATH, {
    ...postOptions,
    body: JSON.stringify(todo),
  });
  if (response.status === 201) {
    const data = await response.json();
    return {
      body: data,
      isSuccess: true,
    };
  }
  return {
    isSuccess: false,
  };
}

async function deleteTodo(todo: Todo): Promise<boolean> {
  return fetch(`${API_PATH}/${todo.id}`, deleteOptions).then((res) => {
    if (res.status === 200) {
      return true;
    }
    return false;
  });
}

async function getTodos(): Promise<Todo[]> {
  return fetch(API_PATH)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function updateTodo(todo: Todo): Promise<FetchResponse<Todo>> {
  const response = await fetch(`${API_PATH}/${todo.id}`, {
    ...changeOptions,
    body: JSON.stringify(todo),
  });

  if (response.status === 200) {
    const data = await response.json();
    return {
      body: data,
      isSuccess: true,
    };
  }
  return {
    isSuccess: false,
  };
}

export { addTodo, getTodos, deleteTodo, updateTodo };
