import circleAddIcon from './icons/circle-add.svg';

const addTodo = document.getElementById("newTodoBtn");
const addProject = document.getElementById("newProjectBtn");
const circleAddTodo = new Image();
const circleAddProject = new Image();

circleAddTodo.classList.add("icon");
circleAddProject.classList.add("icon");
circleAddTodo.src = circleAddIcon;
circleAddProject.src = circleAddIcon;

addTodo.prepend(circleAddTodo);
addProject.prepend(circleAddProject);

