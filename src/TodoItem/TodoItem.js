import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {

    return (

        <div className={

            props.favorite
            ? 'todoitem__main favorite'
            : 'todoitem__main'

        }>

            {props.done
                ? (<h1 className='undone'>{props.prodName}</h1>)
                : (<h1 className='done'>{props.prodName}</h1>)}

            <div className='todoitem__buttons'>

                <button

                    onClick={props.setTodoDone}>
                    Done / Undone

                </button>

                <button
                    onClick={props.setFavorite}>

                    Add to favorites</button>

                <button

                    onClick={props.deleteTodoItem}>

                    Delete item

                </button>

            </div>

        </div>
    );
}

export default TodoItem;
