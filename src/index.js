import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

// const tarea = new Todo('Aprender JS');

// tarea.completado = false;

// todoList.nuevoTodo(tarea);

// console.log(todoList);

//crearTodoHtml(tarea);


