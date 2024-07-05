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
    const headerContent = document.getElementById("headerContent");
    const sectionContent = document.getElementById("sectionContent");
    sectionContent.innerHTML = "";
    headerContent.innerText = title;

    if(taskArray.length == 0) {
      noTasksAvailable(message);
    }else{
        taskArray.forEach(task => {
            let divTask = document.createElement("div");
            let divName = document.createElement("div");
            let divInfo = document.createElement("div");
            let spanCircle = document.createElement("span");
            let spanName = document.createElement("span");
            let spanDueDate = document.createElement("span");
            let spanPriority = document.createElement("span");
            let spanProject = document.createElement("span");
    
            divTask.classList.add("task");
            divName.classList.add("flex-task-name");
            divInfo.classList.add("flex-task-info");
            if(task.getStatus()){
                spanCircle.classList.add("marked");
            }else{
                spanCircle.classList.add("circle-task");
            }
            if(sectionContent.classList.contains("info-message")){
                sectionContent.classList.remove("info-message");
            }
            spanName.innerText = task.getTitle();
            spanDueDate.innerText = task.getDueDate();
            spanPriority.innerText = task.getPriority();
            spanProject.innerText = task.getProject();
    
            divName.appendChild(spanCircle);
            divName.appendChild(spanName);
            divInfo.appendChild(spanDueDate);
            divInfo.appendChild(spanPriority);
            divInfo.appendChild(spanProject);
            divTask.appendChild(divName);
            divTask.appendChild(divInfo);
            sectionContent.appendChild(divTask);

            spanCircle.addEventListener("click",(e)=>{
                markCompleted(e.target);
                task.setStatus();
            })

        });
    }
}

export function loadProjectsPage(projectsArray){
    const headerContent = document.getElementById("headerContent");
    const sectionContent = document.getElementById("sectionContent");
    sectionContent.innerHTML = "";
    headerContent.innerText = "Projects";

    if(projectsArray.length == 0) {
      noTasksAvailable("No projects created");
    }else{
        projectsArray.forEach(task => {
            let divTask = document.createElement("div");
            let divName = document.createElement("div");
            let divInfo = document.createElement("div");
            let spanCircle = document.createElement("span");
            let spanName = document.createElement("span");
            let spanDueDate = document.createElement("span");
            let spanPriority = document.createElement("span");
            let spanProject = document.createElement("span");
    
            divTask.classList.add("task");
            divName.classList.add("flex-task-name");
            divInfo.classList.add("flex-task-info");
            if(task.getStatus()){
                spanCircle.classList.add("marked");
            }else{
                spanCircle.classList.add("circle-task");
            }
            if(sectionContent.classList.contains("info-message")){
                sectionContent.classList.remove("info-message");
            }
            spanName.innerText = task.getTitle();
            spanDueDate.innerText = task.getDueDate();
            spanPriority.innerText = task.getPriority();
            spanProject.innerText = task.getProject();
    
            divName.appendChild(spanCircle);
            divName.appendChild(spanName);
            divInfo.appendChild(spanDueDate);
            divInfo.appendChild(spanPriority);
            divInfo.appendChild(spanProject);
            divTask.appendChild(divName);
            divTask.appendChild(divInfo);
            sectionContent.appendChild(divTask);

            spanCircle.addEventListener("click",(e)=>{
                markCompleted(e.target);
                task.setStatus();
            })

        });
    }
}

function markCompleted(element){
    element.classList.toggle("marked");
    element.classList.toggle("circle-task");
}

function noTasksAvailable (message){
    const sectionContent = document.getElementById("sectionContent");
    sectionContent.innerText = message;
    sectionContent.classList.add("info-message");

}