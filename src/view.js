import './dom-elements';
import triangleDown  from './icons/triangle-down.svg';
import triangleUp  from './icons/triangle-up.svg';
import { deleteTask, updatePage } from './controller';

export function showProjects(projectList){
    const divList = document.getElementById("projectList")
    divList.innerHTML = ""
    projectList.forEach(project => {
        let item = document.createElement("button");
        item.innerText = project;
        item.setAttribute("id",project);
        divList.appendChild(item);
    });
}

export function selectProject(projectsArray){
    const selectItem = document.getElementById("project");
    selectItem.innerHTML = "";
    let opt = document.createElement("option");
    opt.value = "";
    opt.innerText = "None"
    selectItem.appendChild(opt);

    projectsArray.forEach(element => {
        opt = document.createElement("option");
        opt.value = element;
        opt.innerText = element;
        selectItem.appendChild(opt);
    });

    return selectItem;
}

export function loadPage(taskArray, title="All", message="No tasks pending"){
    sectionContent.innerHTML = "";
    headerContent.innerText = title;

    if(taskArray.length == 0) {
      noTasksAvailable(message);
    }else{
        taskArray.forEach(task => {
            let divTask = document.createElement("div");
            let divName = document.createElement("div");
            let divInfo = document.createElement("div");
            let divDetails = document.createElement("div");
            let divDetailsContent = document.createElement("div");
            let divDetailsButtons = document.createElement("div");
            let spanCircle = document.createElement("span");
            let spanName = document.createElement("span");
            let spanDueDate = document.createElement("span");
            let spanProject = document.createElement("span");
            let spanIcon = document.createElement("span");
            let iconSeeTask = new Image();
            let btnDelete = document.createElement("button");
            let btnEdit = document.createElement("button");
    
            divTask.classList.add("task");
            divTask.classList.add("flex-task");
            divName.classList.add("flex-task-name");
            divInfo.classList.add("flex-task-info");
            divDetails.classList.add("hidden");
            divDetailsContent.classList.add("task-details");
            divDetailsButtons.classList.add("flex-task-btns");
            if(task.getStatus()){
                spanCircle.classList.add("marked");
                spanName.classList.add("text-done");
            }else{
                spanCircle.classList.add("circle-task");
                spanName.classList.add("text-task");
            }
            if(task.getPriority().toLowerCase() == "high"){
                spanCircle.classList.add("task-high-priority");
            }else if(task.getPriority().toLowerCase() == "medium"){
                spanCircle.classList.add("task-medium-priority");
            }
            iconSeeTask.classList.add("icon");
            btnDelete.classList.add("deleteBtn");
            spanName.innerText = task.getTitle();
            spanDueDate.innerText = task.getDueDate();
            spanProject.innerText = task.getProject();
            iconSeeTask.src = triangleDown;
            divDetailsContent.innerHTML = `
            <p>Priority: ${task.getPriority()}</p>
            <p>Description: ${task.getDescription()}</p>
            <p>Other notes: ${task.getNotes()}</p>
            `
            btnEdit.innerText= "Edit";
            btnDelete.innerText = "Delete";
            btnDelete.dataset.title = task.getTitle();

            spanIcon.appendChild(iconSeeTask);
            divDetailsButtons.appendChild(btnEdit);
            divDetailsButtons.appendChild(btnDelete);
            divName.appendChild(spanCircle);
            divName.appendChild(spanName);
            divInfo.appendChild(spanDueDate);
            divInfo.appendChild(spanProject);
            divInfo.appendChild(spanIcon);
            divDetails.appendChild(divDetailsContent);
            divDetails.appendChild(divDetailsButtons);
            divTask.appendChild(divName);
            divTask.appendChild(divInfo);
            //divTask.appendChild(divDetails)
            sectionContent.appendChild(divTask);
            sectionContent.appendChild(divDetails);

            divName.addEventListener("click",(e)=>{
                spanCircle.classList.toggle("marked");
                spanCircle.classList.toggle("circle-task");
                spanName.classList.toggle("text-done");
                task.setStatus();
            })
            spanIcon.addEventListener("click",(e)=>{
                divDetails.classList.toggle("hidden");
                if(iconSeeTask.src == triangleDown){
                    iconSeeTask.src = triangleUp;
                }else{
                    iconSeeTask.src = triangleDown;
                }
            })
            btnDelete.addEventListener("click",()=>{
                deleteTask(task.getTitle());
                updatePage();
            });
            btnEdit.addEventListener("click",()=>{
                editTodoModal.showModal();
                updateTaskData(task.getTitle(), task.getDescription(), task.getProject(), task.getDueDate(), task.getPriority(), task.getNotes());
            });
        

        });
        if(sectionContent.classList.contains("info-message")){
            sectionContent.classList.remove("info-message");
        }
    }
    showTodoBtnPanel(true);
    showProjectBtnPanel(false);
}

export function loadProjectsPage(projectsArray){
    const headerContent = document.getElementById("headerContent");
    const sectionContent = document.getElementById("sectionContent");
    sectionContent.innerHTML = "";
    headerContent.innerText = "Projects";


    if(projectsArray.length == 0) {
      noTasksAvailable("No projects created");
    }else{
        projectsArray.forEach(project => {
            let pProject = document.createElement("p");
            pProject.innerText = project;
            pProject.classList.add("project-panel");
            
            sectionContent.appendChild(pProject);
        });
        if(sectionContent.classList.contains("info-message")){
            sectionContent.classList.remove("info-message");
        }
    }
    showTodoBtnPanel(false);
    showProjectBtnPanel(true); 
}

function showTodoBtnPanel(show = true){
    if(show){
        newTodoBtnPanel.classList.add("visible");
        newTodoBtnPanel.classList.remove("hidden");
    }else{
        newTodoBtnPanel.classList.add("hidden");
        newTodoBtnPanel.classList.remove("visible");
    }
}
function showProjectBtnPanel(show = false){
    if(show){
        newProjectBtnPanel.classList.add("visible");
        newProjectBtnPanel.classList.remove("hidden");
    }else{
        newProjectBtnPanel.classList.add("hidden");
        newProjectBtnPanel.classList.remove("visible");
    }
}

function markCompleted(element){
    console.log(element);
    element.children[0].classList.toggle("marked");
    element.childre[0].classList.toggle("circle-task");
    element.children[1].classList.toggle("text-done");
}

function noTasksAvailable (message){
    const sectionContent = document.getElementById("sectionContent");
    sectionContent.innerText = message;
    sectionContent.classList.add("info-message");

}

function updateTaskData(title, description, project, date, priority, notes){
    editTitle.innerText = title;
    if(description == ""){
        editDescription.innerText = "(None)";
    }else{
        editDescription.innerText = description;
    }
    if(project == ""){
        editProject.innerText = "(None)";
    }else{
        editProject.innerText =  project;
    }
    editDueDate.value = date;
    editPriority.value = priority;
    editNotes.value =  notes;

}

