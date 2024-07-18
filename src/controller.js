import { TodoList, Project, Task} from "./model";
import { selectProject, showProjects, loadPage, loadProjectsPage} from "./view"; 
import './dom-elements';

/******************************************/
//Variables
const TodoModel = new TodoList();
const tasksProjects = new Project();

//New todo form
const newTodoForm = document.getElementById("newTodoForm");
const addTodoBtn = document.getElementById("addTodoBtn");
const closeBtn = document.getElementById("closeBtn");
const newTodoTitle = document.getElementById("title");
const newTodoDescription = document.getElementById("description");
const newTodoDueDate = document.getElementById("dueDate");
const newTodoPriority = document.getElementById("priority");
const newTodoProject = document.getElementById("project");
const newTodoNotes = document.getElementById("notes");
//New project form
const newProjectForm = document.getElementById("newProjectForm");
const newProjectTitle = document.getElementById("nameProject");
const addProjectBtn = document.getElementById("addProjectBtn");
const closeBtnProjectModal = document.getElementById("closeBtnProjectModal");
//Edittodo form
const saveChangesTodoBtn = document.getElementById("saveChangesTodoBtn");
const closeEditBtn = document.getElementById("closeEditBtn");

/******************************************/
//Listeners
//Actions
newTodoBtn.addEventListener("click", ()=>{
    newTodoModal.showModal();
    newTodoForm.reset();
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
newProjectBtn.addEventListener("click", ()=>{
    newProjectModal.showModal();
    newProjectForm.reset();
});

newTodoBtnPanel.addEventListener("click", ()=>{
    newTodoModal.showModal();
    newTodoForm.reset();
    if(tasksProjects.getAllProjects().includes(headerContent.innerText)){
        console.log
        newTodoProject.value = headerContent.innerText;
    }
});
newProjectBtnPanel.addEventListener("click", ()=>{
    newProjectModal.showModal();
    newProjectForm.reset();
});



//Add task modal
addTodoBtn.addEventListener("click", ()=>{
    if ( newTodoTitle.checkValidity()& newTodoDescription.checkValidity() & newTodoDueDate.checkValidity()){
        addNewTask(newTodoTitle.value, newTodoDescription.value, newTodoDueDate.value, newTodoPriority.value, newTodoProject.value, newTodoNotes.value);
        newTodoModal.close();
        updatePage();
    }
}); 
closeBtn.addEventListener("click", ()=>{
    newTodoModal.close();
});

//Add project & modal
addProjectBtn.addEventListener("click", ()=>{
    if (newProjectTitle.checkValidity()){
        addNewProject(newProjectTitle.value);
        newProjectModal.close();
       
    }
}); 
closeBtnProjectModal.addEventListener("click", ()=>{
    newProjectModal.close();
});

//Edit task modal
saveChangesTodoBtn.addEventListener("click", ()=>{
    if (newTodoDueDate.checkValidity()){
        TodoModel.updateTask(editTitle.innerText, editDueDate.value, editPriority.value, editNotes.value);
        editTodoModal.close();
        updatePage();
    }
}); 
closeEditBtn.addEventListener("click", ()=>{
    editTodoModal.close();
});

/******************************************/ 
//Functions
function addNewTask(title, description, dueDate, priority, project, notes){
    let task = new Task(title, description, dueDate, priority, project, notes)
    TodoModel.addTask(task);
};

function addNewProject(title){
    tasksProjects.addProject(title);
    showProjects(tasksProjects.getAllProjects());
    selectProject(tasksProjects.getAllProjects());
    allProjectsPage();
    updateListenerAsideProject();
};

export function deleteTask(title){
    return TodoModel.removeTask(title);
}

function searchPage(){
    console.log("search something");
};

function todayPage(){
    loadPage(TodoModel.getTodayTasks(),"Today","No tasks for today");
};

function allPage(){
    loadPage(TodoModel.getAllTasks());
};

function upcomingPage(){
    loadPage(TodoModel.getUpcomingTasks(),"Upcoming","No upcoming tasks");
};

function byProjectPage(project){
    let lista = TodoModel.getTaskByProject(project);
    let title = project;
    loadPage(lista,title,"No task assigned to this project");
};

function allProjectsPage(){
    loadProjectsPage(tasksProjects.getAllProjects());
    let projectPanel = document.querySelectorAll(".project-panel");
    projectPanel.forEach(element => {
      element.addEventListener('click', () => {
        byProjectPage(element.innerText)
      });
    });
}

export function updatePage(){
    switch (headerContent.innerText) {
        case "Today":
            todayPage();
            break;
        case "All":
            allPage();
            break;
        case "Upcoming":
            upcomingPage();
            break;
        default:
            byProjectPage(headerContent.innerText);
            break;
    }
}

function updateListenerAsideProject(){
    Array.from(projectList.children).forEach(project =>{
        project.addEventListener("click", ()=>{
            byProjectPage(project.id);
        })
    })
}


/******************************************/
window.addEventListener("load", ()=>{
    showProjects(tasksProjects.getAllProjects());
    selectProject(tasksProjects.getAllProjects());
    loadPage(TodoModel.getAllTasks());
});