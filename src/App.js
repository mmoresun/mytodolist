
import './App.css';
import { useState } from 'react';

import Header from './Header/Header';
import TodoItemsList from './TodoItemsList/TodoItemsList';
import TodoAddForm from './TodoAddForm/TodoAddForm';
import Footer from './Footer/Footer';

function App() {

  const [data, setData] = useState([

    { prodName: 'Make a todo list', done: true, favorite: false, id: 1 },
    { prodName: 'Check off the first thing of todo list', done: false, favorite: true, id: 2 },
    { prodName: 'Realise I have completed 2 things on the list', done: false, favorite: false, id: 3 },
    { prodName: 'Reward myself with a nap', done: true, favorite: false, id: 4 },
    { prodName: 'Do dothing', done: false, favorite: true, id: 5 },

  ]);

  const [todoEntry, setTodoEntry] = useState('');

  const addNewEntry = (e) => {

    e.preventDefault();

    // console.log(todoEntry);

    const newTodoEntry = {

      prodName: todoEntry,
      done: false,
      favorite: false,
      id: Date.now()
    }

    if (todoEntry) {
      setData([...data, newTodoEntry]);
    }

    // console.log(newTodoEntry);

    setTodoEntry('');

  }

  const deleteTodoItem = (id) => {

    console.log('deleted');

    const deleteConfirm = window.confirm('Are you sure?');

    if (deleteConfirm === true) {

      const newTodoArr = data.filter(item => item.id !== id)
      setData(newTodoArr);

    }

  }

  const setTodoDone = (id) => {

    
    const newData = data.map(item => {

      if (item.id === id) {

        return { ...item, done: !item.done }

      }

      return item;

    })

    setData(newData);

  }

  const setFavorite = (id) => {

    console.log(id);

    const newData = data.map(item => {

      if (item.id === id) {

        return { ...item, favorite: !item.favorite }

      }

      return item;

    })

    setData(newData);
  }

  return (

    <div className="App">

      <Header />

      {data.length !== 0

        ? <TodoItemsList

          data={data}
          deleteTodoItem={deleteTodoItem}
          setTodoDone={setTodoDone}
          setFavorite={setFavorite}

        />
        : <h2>No entries</h2>}

      <TodoAddForm

        addNewEntry={addNewEntry}
        todoEntry={todoEntry}
        setTodoEntry={setTodoEntry}

      />

      <Footer />
      <div style={{ width: '700px', textAlign: 'right', fontSize: '.7rem', marginTop: '1rem' }}>Powered by React.js Functional Components</div>

    </div>

  );

}

export default App;
