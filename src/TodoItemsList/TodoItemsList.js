import React from 'react';
import './TodoItemsList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoItemsList = ({ data, deleteTodoItem, setTodoDone, setFavorite }) => {

    const todoElements = (

        data.map(item => {

            const { id, ...itemProps } = item;

            return (

                <TodoItem

                    key={id}
                    {...itemProps}
                    deleteTodoItem={() => deleteTodoItem(id)}
                    setTodoDone={() => setTodoDone(id)}
                    setFavorite={() => setFavorite(id)}
                />
            )
        }

        )
    )

    return (

        <div className='todoitemlist__main'>

            {todoElements}

        </div>
    );
}

export default TodoItemsList;
