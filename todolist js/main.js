window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listEl = document.querySelector("#tasks");
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const task = input.value.trim();
  
      if (!task) {
        return;
      }
  
      const taskEl = document.createElement('div');
      taskEl.classList.add('task');
  
      const taskContentEl = document.createElement('div');
      taskContentEl.classList.add('content');
  
      const taskInputEl = document.createElement('input');
      taskInputEl.classList.add('text');
      taskInputEl.type = 'text';
      taskInputEl.value = task;
      taskInputEl.readOnly = true;
  
      taskContentEl.appendChild(taskInputEl);
      taskEl.appendChild(taskContentEl);
  
      const taskActionsEl = document.createElement('div');
      taskActionsEl.classList.add('actions');
  
      const taskEditEl = document.createElement('button');
      taskEditEl.classList.add('edit');
      taskEditEl.innerText = 'Edit';
  
      const taskDeleteEl = document.createElement('button');
      taskDeleteEl.classList.add('delete');
      taskDeleteEl.innerText = 'Delete';
  
      taskActionsEl.appendChild(taskEditEl);
      taskActionsEl.appendChild(taskDeleteEl);
      taskEl.appendChild(taskActionsEl);
  
      listEl.appendChild(taskEl);
  
      input.value = '';
  
      taskEditEl.addEventListener('click', (e) => {
        if (taskInputEl.readOnly) {
          taskInputEl.readOnly = false;
          taskInputEl.focus();
          taskEditEl.innerText = 'Save';
        } else {
          taskInputEl.readOnly = true;
          taskEditEl.innerText = 'Edit';
        }
      });
  
      taskDeleteEl.addEventListener('click', (e) => {
        listEl.removeChild(taskEl);
      });
    });
  });
  