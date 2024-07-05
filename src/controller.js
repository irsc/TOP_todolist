import { TodoList, Project, Task} from "./model";
import { selectProject, showProjects, loadPage, loadProjectsPage } from "./view"; 
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
//Todos panel
const newTodoBtnPanel = document.getElementById("newTodoBtnPanel");

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

asideProjects.addEventListener("click", ()=>{
    allProjectsPage();
});

newTodoBtnPanel.addEventListener("click", ()=>{
    newTodoModal.showModal();
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
    loadPage(TodoModel.getAllTasks());
    /* printBookCards();
    resetVariables(); */
};

function addNewProject(title){
    tasksProjects.addProject(title);
    showProjects(tasksProjects.getAllProjects());
    selectProject(tasksProjects.getAllProjects());

    const newProject = document.getElementById(title);
    newProject.addEventListener("click", ()=>{
        byProjectPage(title);
    });
};

function searchPage(){
    console.log("search something");
};

function todayPage(){
    let lista = TodoModel.getTodayTasks();
    loadPage(lista,"Today","No tasks for today");
};

function allPage(){
    let lista = TodoModel.getAllTasks();
    loadPage(lista);
};

function upcomingPage(){
    let lista = TodoModel.getUpcomingTasks();
    loadPage(lista,"Upcoming","No upcoming tasks");
};

function byProjectPage(project){
    let lista = TodoModel.getTaskByProject(project);
    let title = "Project " +  project;
    loadPage(lista,title,"No task assigned to this project");
};

function allProjectsPage(){
    loadProjectsPage(tasksProjects);
}


window.addEventListener("load", ()=>{
    showProjects(tasksProjects.getAllProjects());
    selectProject(tasksProjects.getAllProjects());
    loadPage(TodoModel.getAllTasks());
});