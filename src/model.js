import {format, isFuture} from "../node_modules/date-fns";
//functions

export class TodoList {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        const tasksList = this.tasks.sort((a, b) =>{
            const dateA = a.getDueDate(); 
            const dateB = b.getDueDate(); 
            if (dateA < dateB) {
              return -1;
            }
            if (dateA > dateB) {
              return 1;
            }
            return 0;
        });
        return tasksList;
    }
    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskTitle){
        let index = this.findTaskIndex(taskTitle);
        if (index > -1) { 
            this.tasks.splice(index, 1);
          }
    }

    updateTask(taskTitle, newDueDate, newPriority, newNotes){
        let index = this.findTaskIndex(taskTitle);
        let task = this.tasks[index];
        task.setDueDate(newDueDate);
        task.setPriority(newPriority);
        task.setNotes(newNotes);
    }

    findTaskIndex(taskTitle){
        return this.tasks.findIndex((element) => element.getTitle() == taskTitle);
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
    getDescription(){
        return this.description;
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
    getNotes(){
        return this.notes;
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
    setDueDate(newDueDate){
        this.dueDate = format(newDueDate,"yyyy-MM-dd");
    }
    setPriority(priority){
        this.priority = priority;
    }
    setNotes(notes){
        this.notes = notes;
    }
};


