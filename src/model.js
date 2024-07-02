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
    constructor(title, description, dueDate, priority, notes, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = completed;
    }
    completedStatus() {
        if (this.completed == false) {
            this.completed = true;
        } else if (this.completed == true) {
            this.completed = false;
        }
    }
};


