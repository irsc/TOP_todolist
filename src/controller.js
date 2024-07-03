import { TodoList, Project, Task} from "./model";
import { selectProject, showProjects } from "./view"; 
import './dom-elements';
import {format} from "../node_modules/date-fns";

const TodoModel = new TodoList();
const tasksProjects = new Project();

//New todo modal
const newTodoModal = document.getElementById("newTodoModal");
const addTodoBtn = document.getElementById("addTodoBtn");
const closeBtn = document.getElementById("closeBtn");
const newTodoTitle = document.getElementById("title");
const newTodoDescription = document.getElementById("description");
const newTodoDueDate = document.getElementById("dueDate");
const newTodoPriority = document.getElementById("priority");
const newTodoProject = document.getElementById("project");
const newTodoNotes = document.getElementById("notes");
//New project Modal
const newProjectModal = document.getElementById("newProjectModal");
const newProjectTitle = document.getElementById("nameProject");
const addProjectBtn = document.getElementById("addProjectBtn");
const closeBtnProjectModal = document.getElementById("closeBtnProjectModal");

//Listeners
//Actions
newTodoBtn.addEventListener("click", ()=>{
    newTodoModal.showModal();
});
todoSearch.addEventListener("click", ()=>{
    searchPage();
});
todoToday.addEventListener("click", ()=>{
    todayPage();
});
todoAll.addEventListener("click", ()=>{
    allPage();
});
todoUpcoming.addEventListener("click", ()=>{
    upcomingPage();
});


//Add task modal
addTodoBtn.addEventListener("click", ()=>{
    if ( newTodoTitle.checkValidity()& newTodoDescription.checkValidity() & newTodoDueDate.checkValidity()){
        addNewTask(newTodoTitle.value, newTodoDescription.value, newTodoDueDate.value, newTodoPriority.value, newTodoProject.value, newTodoNotes.value);
        newTodoModal.close();
    }
}); 
closeBtn.addEventListener("click", ()=>{
    newTodoModal.close();
});

//Add project & modal
newProjectBtn.addEventListener("click", ()=>{
    newProjectModal.showModal();
});
addProjectBtn.addEventListener("click", ()=>{
    if (newProjectTitle.checkValidity()){
        addNewProject(newProjectTitle.value);
        newTodoModal.close();
    }
}); 
closeBtnProjectModal.addEventListener("click", ()=>{
    newProjectModal.close();
});

/******************************************/ 
//Functions
function addNewTask(title, description, dueDate, priority, project, notes){
    let task = new Task(title, description, dueDate, priority, project, notes)
    TodoModel.addTask(task);
    console.log(TodoModel.getAllTasks());
    /* printBookCards();
    resetVariables(); */
};

function addNewProject(title){
    tasksProjects.addProject(title);
    showProjects(tasksProjects.getAllProjects());
    selectProject(tasksProjects.getAllProjects());

    const newProject = document.getElementById(title);
    newProject.addEventListener("click", ()=>{
        projectPage(title);
    });
};

function searchPage(){
    console.log("search something");
};

function todayPage(){
    let lista = TodoModel.getTodayTasks();
    if (lista.length == 0){
        console.log("No task assigned today");
    }else{
        console.log(lista);
    }
};

function allPage(){
    let lista = TodoModel.getAllTasks();
    console.log(lista);
};

function upcomingPage(){
    let lista = TodoModel.getUpcomingTasks();
    if (lista.length == 0){
        console.log("No upcoming");
    }else{
        console.log(lista);
    }
};

function projectPage(project){
    let lista = TodoModel.getTaskByProject(project);
    if (lista.length == 0){
        console.log("No task assigned to this project");
    }else{
        console.log(lista);
    }
    
};


window.addEventListener("load", ()=>{
    showProjects(tasksProjects.getAllProjects());
    selectProject(tasksProjects.getAllProjects());
});