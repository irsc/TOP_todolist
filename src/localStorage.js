import { addNewProject, addNewTask } from "./controller";

function checkStorage(){
    if (localStorage.getItem("projects")) {
        loadStoredProjects();
      }
    if (localStorage.getItem("tasks")) {
        loadStoredTasks();
    }
}

function addTaskStorage(taskList){
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addProjectStorage(projectList){
    localStorage.setItem("projects", JSON.stringify(projectList));
}

function loadStoredProjects(){
    let listItems = JSON.parse(localStorage.getItem("projects"));
    listItems.forEach(element => {
        addNewProject(element);
    });
}

function loadStoredTasks(){
    let listItems = JSON.parse(localStorage.getItem("tasks"));
    listItems.forEach(element => {
        addNewTask(element.title, element.description, element.dueDate, element.priority, element.project, element.notes, element.status);
    });
}


export {checkStorage, addTaskStorage, addProjectStorage}