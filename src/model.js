import {format, isFuture} from "../node_modules/date-fns";
//functions

export class TodoList {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }

    getTaskByProject(projectTitle){
        const list = this.getAllTasks();
        return list.filter(task => task.getProject() === projectTitle);
    }

    getTodayTasks(){
        const today = format(new Date(),"yyyy-MM-dd");
        const list = this.getAllTasks();
        return list.filter(task => task.getDueDate() === today);
    }
    getUpcomingTasks(){
        const list = this.getAllTasks();
        return list.filter(task => isFuture(task.getDueDate()));
    }


};

export class Project{
    constructor() {
        this.projects = [];
    }
    getAllProjects() {
        return this.projects;
    }
    addProject(projectName) {
        this.projects.push(projectName);
    }
}

export class Task {
    constructor(title, description, dueDate, priority, project, notes, status = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.notes = notes;
        this.status = status;
    }

    getTitle(){
        return this.title;
    }
    getProject(){
        return this.project;
    }
    getDueDate(){
        return this.dueDate;
    }
    getPriority(){
        return this.priority;
    }
    getStatus(){
        return this.status;
    }

    setStatus(){
        if(this.status){
            this.status = false;
        }else{
            this.status = true;
        }
    }
};


