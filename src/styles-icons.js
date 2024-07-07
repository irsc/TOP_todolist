import circleAddSvg from './icons/circle-add.svg';
import folderPlusSvg from './icons/folder-plus.svg';
import searchSvg from './icons/search.svg';
import todoTodaySvg from './icons/calendar-today.svg';
import todoAllSvg from './icons/cube-all.svg';
import todoUpcomingSvg from './icons/next.svg';
import './dom-elements';

const iconAddTodo = new Image();
const iconAddProject = new Image();
const iconTodoSearch = new Image();
const iconTodoToday = new Image();
const iconTodoAll = new Image();
const iconTodoUpcoming = new Image();
const iconAddTodoPanel = new Image();
const iconAddProjectPanel = new Image();

iconAddTodo.classList.add("icon");
iconAddProject.classList.add("icon");
iconTodoSearch.classList.add("icon");
iconTodoToday.classList.add("icon");
iconTodoAll.classList.add("icon");
iconTodoUpcoming.classList.add("icon");
iconAddTodoPanel.classList.add("large-icon");
iconAddProjectPanel.classList.add("large-icon");

iconAddTodo.src = circleAddSvg;
iconAddProject.src = folderPlusSvg;
iconTodoSearch.src = searchSvg;
iconTodoToday.src = todoTodaySvg;
iconTodoAll.src = todoAllSvg;
iconTodoUpcoming.src = todoUpcomingSvg;
iconAddTodoPanel.src = circleAddSvg;
iconAddProjectPanel.src = folderPlusSvg;

newTodoBtn.prepend(iconAddTodo);
newProjectBtn.prepend(iconAddProject);
todoSearch.prepend(iconTodoSearch);
todoToday.prepend(iconTodoToday);
todoAll.prepend(iconTodoAll);
todoUpcoming.prepend(iconTodoUpcoming);
newTodoBtnPanel.prepend(iconAddTodoPanel);
newProjectBtnPanel.prepend(iconAddProjectPanel);

