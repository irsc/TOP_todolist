export function showProjects(projectList){

    const uList = document.getElementById("projectList")
    projectList.forEach(project => {
        let item = document.createElement("li");
        item.innerText = project;
        uList.appendChild(item);
    });
}