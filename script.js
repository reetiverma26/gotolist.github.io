const addButton = document.querySelector('#push');

addButton.onclick = function() {
  const newTaskInput = document.querySelector('#newtask input');
  
  if (newTaskInput.value.length === 0) {
    alert('Please enter a task');
  } else {
    const taskName = newTaskInput.value;
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <span id="taskname">${taskName}</span>
      <button class="delete">
        <i class="far fa-trash-alt"></i>
      </button>
    `;
    
    document.querySelector('#tasks').appendChild(taskElement);
    
    const currentTasks = document.querySelectorAll('.delete');
    currentTasks.forEach(task => {
      task.onclick = function() {
        this.parentNode.remove();
      }
    });
    
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
      task.onclick = function() {
        this.classList.toggle('completed');
      }
    });
    
    newTaskInput.value = '';
  }
};
