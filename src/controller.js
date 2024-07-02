import { TodoList, Task } from "./model";
import { showProjects } from "./view"; 

const TodoModel = new TodoList();

const newTodoBtn = document.getElementById("newTodoBtn");
const newTodoModal = document.getElementById("newTodoModal");
const addTodoBtn = document.getElementById("addTodoBtn");
const closeBtn = document.getElementById("closeBtn");
const newTodoTitle = document.getElementById("title");
const newTodoDescription = document.getElementById("description");
const newTodoDueDate = document.getElementById("dueDate");
const newTodoPriority = document.getElementById("priority");
const newTodoNotes = document.getElementById("notes");


//Listeners
newTodoBtn.addEventListener("click", ()=>{
    newTodoModal.showModal();
});

addTodoBtn.addEventListener("click", ()=>{
    if ( newTodoTitle.checkValidity()& newTodoDescription.checkValidity() & newTodoDueDate.checkValidity()){
        addNewTask(newTodoTitle.value, newTodoDescription.value, newTodoDueDate.value, newTodoPriority.value, newTodoNotes.value);
        newTodoModal.close();
    }
}); 
closeBtn.addEventListener("click", ()=>{
    newTodoModal.close();
});



function addNewTask(title, description, dueDate, priority, notes){
    let task = new Task(title, description, dueDate, priority, notes)
    TodoModel.addTask(task);
    console.log(TodoModel.getAllTasks());
    /* printBookCards();
    resetVariables(); */
};

let list = ["Home", "Sports"];
window.addEventListener("load", ()=>{
    showProjects(list);
});