import React from 'react';
import './TodoItem.css';

const TodoItem = ({ data, ...props }) => {

    // console.log(data.filter(item => item.edit).length);

    return (

        <div

            className={props.favorite

                ? 'todoitem__main favorite'
                : 'todoitem__main'}
        >
            {/* <div style={{ display: 'flex', flexDirection: 'row', border: '1px blue solid', alignItems: 'center' }}>

                <i className={!props.done

                    ? "fa-regular fa-square"
                    : 'fa-regular fa-square-check'}

                    onClick={props.setTodoDone} />

                
                    {!props.done
                        ? 'Done'
                        : "Undone"}



                {props.done

                    ? (<h1 className='done'>{props.prodName}</h1>)
                    : (<h1 className='undone'>{props.prodName}</h1>)}

            </div> */}

            {/* <div style={{ border: '1px red solid' }}>



                <i className="fa fa-star" aria-hidden="true" style={props.favorite ? { color: 'orange' } : { color: '#ccc' }}
                    onClick={props.setFavorite} />


                <i className="fas fa-edit" style={{ color: 'blue' }}
                    onClick={props.editTodoStatus} />



                <i className="fa-solid fa-trash" aria-hidden="true" style={{ color: 'red' }}
                    onClick={props.deleteTodoItem} />


            </div> */}

            {/* <form>

                {props.edit && (

                    <div>

                        <br />

                        <input

                            type="text"
                            defaultValue={props.prodName}
                            onChange={e => props.setEditTodo(e.target.value)}
                            style={{ padding: '0 5px 0 5px' }}

                        />

                        <i className="fa fa-check" aria-hidden="true" style={{ color: 'green' }}
                            type='submit'
                            onClick={props.editTodoItem} />


                    </div>
                )
                }

            </form> */}


            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <div>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                            <i className={!props.done

                                ? "fa-regular fa-square fa-lg"
                                : 'fa-regular fa-square-check fa-lg'}

                                onClick={() => props.setTodoDone()} />

                            {props.done

                                ? (<h1 className='done' onClick={() => props.setTodoDone()} >{props.prodName}</h1>)
                                : (<h1 className='undone' onClick={() => props.setTodoDone()} >{props.prodName}</h1>)}

                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                        <i className="fa fa-star fa-lg" aria-hidden="true" style={props.favorite ? { color: 'orange', transition: '150ms ease' } : { color: '#ccc', transition: '150ms ease' }}
                            onClick={() => props.setFavorite()} />

                        <i className="fas fa-edit fa-lg" style={{ color: 'blue' }}
                            onClick={() => props.editTodoStatus()} />

                        <i className="fa-solid fa-trash fa-lg" aria-hidden="true" style={{ color: 'red' }}
                            onClick={() => props.deleteTodoItem()} /></div>

                </div>

                <div>

                    <br />

                    <form type='submit' style={{ margin: '0 0 0px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                        {props.edit && (

                            <div className='todoItem__editBlock' style={{ transition: '900ms ease' }}>

                                <div>

                                    <input

                                        id='standartInput'
                                        type="text"
                                        defaultValue={props.prodName}
                                        onChange={e => props.setEditTodo(e.target.value)}
                                        style={{ padding: '0 5px 0 5px', margin: '0 0 10px 0' }}

                                    />

                                </div>

                                <div>
                                    <i className="fa fa-check fa-lg" aria-hidden="true" style={{ color: 'green' }}
                                        type='submit'
                                        onClick={() => props.editTodoItem()} />
                                </div>


                            </div>
                        )
                        }

                    </form>

                </div>

            </div>

        </div>
    );
}

export default TodoItem;
