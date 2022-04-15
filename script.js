import { creationToDoPoint } from './utils.js';
import { addionToDoPoint } from './utils.js'; 

const buttonAdd = document.querySelector('.button_add');
const inputToDo = document.querySelector('.input_to_do');

let toDoList = [];

buttonAdd.addEventListener('click', () => {
  const toDo = creationToDoPoint(inputToDo.value, toDoList);
  if(inputToDo.value) {
  addionToDoPoint(document.querySelector('.list'), toDo, toDoList)
  toDoList.push(toDo);
  inputToDo.value = '';
  }
});








