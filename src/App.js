import './App.css';
import { useState, useEffect } from 'react';

import { v4 as uuid } from 'uuid'
import Header from './Header/Header';
import TodoItemsList from './TodoItemsList/TodoItemsList';
import TodoAddForm from './TodoAddForm/TodoAddForm';
import Footer from './Footer/Footer';
import SearchPanel from './SearchPanel/SearchPanel';
import { todolist } from './Store/todolist';

function App() {

  const [data, setData] = useState(todolist);

// Save todos to localstorage

  useEffect(() => {

    const getTodos = JSON.parse(localStorage.getItem('data'))

    if (getTodos) {
      setData(getTodos)
    }
  }, []);

  useEffect(() => {

    localStorage.setItem('data', JSON.stringify(data))
  }, [data]);

  // Add entry

  const [todoEntry, setTodoEntry] = useState('');

  const addNewEntry = (e) => {

    e.preventDefault();

    const newTodoEntry = {

      prodName: todoEntry,
      done: false,
      favorite: false,
      edit: false,
      id: uuid()
    }


    if (todoEntry.length > 0 && todoEntry.length <= 55) {
      setData([...data, newTodoEntry]);
      setTodoEntry('');
    }

  }

  // Edit entry 

  const [editTodo, setEditTodo] = useState('');

  const editTodoItem = (id) => {


    if (editTodo.length > 0 && editTodo.length <= 55) {

      const newData = data.filter(item => item.id === id);

      newData[0].prodName = editTodo;

    }

    setEditTodo('');

    editTodoStatus(id)

  }

  // Search in entries list

  const [searchValue, setSearchValue] = useState('');

  const searchFilteredTodos = data.filter(item => {

    return item.prodName.toLowerCase().includes(searchValue.toLowerCase());

  })

  // Delete entry 

  const deleteTodoItem = (id) => {

    // console.log('deleted');

    // const deleteConfirm = window.confirm('Are you sure?');

    // if (deleteConfirm) {

    //   const newTodoArr = data.filter(item => item.id !== id)
    //   setData(newTodoArr);

    // }

    const newTodoArr = data.filter(item => item.id !== id)
    
    setData(newTodoArr);

  }

  // Toggle 'edit: true / false'

  const editTodoStatus = (id) => {


    const newData = data.map(item => {

      if (item.id === id) {

        return { ...item, edit: !item.edit }

      }

      return item;

    })

    setData(newData);

  }

  // Setting 'done' flag

  const setTodoDone = (id) => {


    const newData = data.map(item => {

      if (item.id === id) {

        return { ...item, done: !item.done }

      }

      return item;

    })

    setData(newData);

  }

  // Setting 'favorite' flag

  const setFavorite = (id) => {

    const newData = data.map(item => {

      if (item.id === id) {

        return { ...item, favorite: !item.favorite }

      }

      return item;

    })

    setData(newData);
  }

  // Show/hide favorite items

  const [favChecked, setFavChecked] = useState(false);

  const handleChangeFav = () => {

    setFavChecked(!favChecked);

  }

  // Show/hide incomplete items

  const [doneChecked, setDoneChecked] = useState(true);

  const handleChangeDone = () => {

    setDoneChecked(!doneChecked);
  }


  return (

    <div className="App">

      <Header />

      <SearchPanel

        setSearchValue={setSearchValue}
        searchValue={searchValue}
        searchFilteredTodos={searchFilteredTodos}

        handleChangeFav={handleChangeFav}
        favChecked={favChecked}

        handleChangeDone={handleChangeDone}
        doneChecked={doneChecked}

        data={data}

      />

      {data.length !== 0

        ? <TodoItemsList

          data={data}
          deleteTodoItem={deleteTodoItem}
          setTodoDone={setTodoDone}
          setFavorite={setFavorite}
          searchFilteredTodos={searchFilteredTodos}
          editTodoStatus={editTodoStatus}
          editTodoItem={editTodoItem}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
          todoEntry={todoEntry}

          favChecked={favChecked}
          handleChangeFav={handleChangeFav}
          setFavChecked={setFavChecked}

          doneChecked={doneChecked}
          handleChangeDone={handleChangeDone}
          setDoneChecked={setDoneChecked}


        />
        : <h2 className='todoitemlist__main'>No entries</h2>}

      <TodoAddForm

        addNewEntry={addNewEntry}
        todoEntry={todoEntry}
        setTodoEntry={setTodoEntry}

      />

      <Footer />
      <div style={{ width: '100%', maxWidth: '700px', textAlign: 'right', fontSize: '.7rem', margin: '1rem' }}>Fully handmade, powered by React.js functional components <br />(and hooks)</div>

    </div>

  );

}

export default App;
