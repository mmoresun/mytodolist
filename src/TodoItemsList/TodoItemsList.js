import React from "react";
import "./TodoItemsList.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoItemsList = ({

  data,
  deleteTodoItem,
  setTodoDone,
  setFavorite,
  searchFilteredTodos,
  editTodoStatus,
  editTodoItem,
  setEditTodo,
  editTodo,
  favChecked,
  doneChecked,
}) => {


  // Filter by search

  const doneFilteredTodos = searchFilteredTodos.filter((item) =>
    !doneChecked ? !item.done : item
  );

  // Filtering favorite items

  const favFilteredTodos = doneFilteredTodos.filter((item) =>
    favChecked ? item.favorite : item
  );

  // Filtering incomplete items

  const todoElements = favFilteredTodos.map((item) => {

    const { id, ...itemProps } = item;

    return (

      // formatting any item

      <TodoItem
        key={id}
        {...itemProps}
        deleteTodoItem={() => deleteTodoItem(id)}
        setTodoDone={() => setTodoDone(id)}
        setFavorite={() => setFavorite(id)}
        editTodoStatus={() => editTodoStatus(id)}
        editTodoItem={() => editTodoItem(id)}
        setEditTodo={setEditTodo}
        editTodo={editTodo}
        data={data}
      />
    );
  });

  return (

    <div className="todoitemlist__main">

      <h2

        style={{
          textAlign: "left",
          marginLeft: "10px",
          color: "rgba(0, 0, 0, .7)",
        }}
      >
        Done: {data.filter((item) => item.done).length}/{data.length},

        {data.filter((item) => item.favorite).length === 1

          ? ` Favorite: ${data.filter((item) => item.favorite).length}`
          : ` Favorites: ${data.filter((item) => item.favorite).length}`}

      </h2>

      {todoElements}

    </div>
  );
};

export default TodoItemsList;
