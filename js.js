// A very simple To Do App
 // It can be bogas for you
  // but for me as a beginner 
  // it's an achievement!!!


// select Html elements
let input_field= document.querySelector('.input_area input[type="text"]');
let addTaskbutton=document.querySelector('.input_area input[type="button"]');
let incomplete_task_area_select= document.querySelector('.incomplete_task_area ul');
let incompleteList= document.querySelectorAll('.incomplete_task_area ul li input[type="checkbox"]');
let completedList= document.querySelectorAll('.completed_task_area ul li input[type="button"]');
let completed_task_area_select= document.querySelector('.completed_task_area ul');
// function to create the New tasks from input
function createtTask(){
    incompleteListItemLi=document.createElement('li');
    incompleteListItemCheckbox=document.createElement('input');
    incompleteListItemCheckbox.type="checkbox";
    incompleteListItemSpan=document.createElement('span');
    incompleteListItemSpan.innerText=input_field.value;

    incompleteListItemLi.appendChild(incompleteListItemCheckbox);
    incompleteListItemLi.appendChild(incompleteListItemSpan);
    if(input_field.value.length == 0 ){
        return ;
    }
    incomplete_task_area_select.appendChild(incompleteListItemLi);
    incompleteListItemCheckbox.onchange= completedTask;
    input_field.value='';
}
// add click event listener to add task button
addTaskbutton.addEventListener('click',createtTask );
// function to complete a task and add it to the completed task list
function completedTask(){
    let completedTask_span= this.nextSibling;
    this.parentNode.remove();
    completedListItemLi=document.createElement('li');
    completedListItemButton=document.createElement('input');
    completedListItemButton.type="button";
    completedListItemButton.value="Delete";
    completedListItemLi.appendChild(completedTask_span);
    completedListItemLi.appendChild(completedListItemButton);
    completed_task_area_select.appendChild(completedListItemLi);

    completedListItemButton.onclick= deleteTask;
}
// function to deleate a completed task from the list
function deleteTask(){
    this.parentNode.remove();
}
// add event listener to existing incomplete task list
for(let i=0;i < incompleteList.length ; i++){
    incompleteList[i].onchange= completedTask;
}
// add event listener to existing completed task list
for(let i=0;i < completedList.length ; i++){
    completedList[i].onclick= deleteTask;
}