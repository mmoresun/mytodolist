import { v4 as uuid } from 'uuid'

export const todolist = [

    { prodName: 'Make a todo list', done: true, favorite: false, edit: false, id: uuid() },
    { prodName: 'Check off the first thing of todo list', done: false, favorite: false, edit: false, id: uuid() },
    { prodName: 'Realise I have completed 2 things on the list', done: false, favorite: false, edit: false, id: uuid() },
    { prodName: 'Do nothing', done: true, favorite: true, edit: false, id: uuid() },
    { prodName: 'Do more nothing', done: false, favorite: true, edit: false, id: uuid() },
    { prodName: 'Reward myself with a nap', done: false, favorite: true, edit: false, id: uuid() }

  ]