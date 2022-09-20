import React from 'react';
import './TodoAddForm.css';

import TodoInput from '../TodoInput/TodoInput';

const TodoAddForm = ({ addNewEntry, todoEntry, setTodoEntry }) => {

    return (
        <div className='todoaddform__main'>

            <TodoInput

                addNewEntry={addNewEntry}
                todoEntry={todoEntry}
                setTodoEntry={setTodoEntry}
            />

            {todoEntry.length > 55 && (<h1 style={{ color: 'red', fontSize: 'small', margin: '0 0 5px 0' }}>Too many symbols: {todoEntry.length} instead of 55 maximum</h1>)}

        </div>
    );
}

export default TodoAddForm;
