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
    opt.value = "default";
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