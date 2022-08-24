import React from 'react';

const TodoInput = ({ addNewEntry, todoEntry, setTodoEntry }) => {

    return (

        <div>

            <form>

                <input

                    value={todoEntry}      
                    onChange={e => setTodoEntry(e.target.value)}              
                    type='text'
                    placeholder='Enter new activity' />

                <button

                    onClick={addNewEntry}>Add entry

                </button>

            </form>

        </div>
    );
}

export default TodoInput;
