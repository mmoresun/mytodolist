import React from 'react';
import './TodoInput.css';

const TodoInput = ({ addNewEntry, todoEntry, setTodoEntry }) => {

    return (

        <div className='todoinput__main'>

            <form>

                <div>
                    <input

                        id='standartInput'
                        style={{minWidth: '250px'}}
                        value={todoEntry}
                        onChange={e => setTodoEntry(e.target.value)}
                        type='text'
                        placeholder='Add new entry (max 55 symbols)' />

                </div>

                <div>

                    <button

                        onClick={addNewEntry}><i className="fa-light fa-plus"></i>Add entry

                    </button>
                    
                </div>

            </form>

        </div>
    );
}

export default TodoInput;
