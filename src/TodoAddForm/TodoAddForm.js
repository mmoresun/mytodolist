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

        </div>
    );
}

export default TodoAddForm;
