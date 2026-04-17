let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const todayList = document.getElementById('todayList');
  const tomorrowList = document.getElementById('tomorrowList');
  const priorityList = document.getElementById('priorityList');
  const overdueList = document.getElementById('overdueList');
  let hasToday = false;
  let hasTomorrow = false;
  let hasPriority = false;
  let hasOverdue = false;

  ['todo','inprogress','done'].forEach(s => document.getElementById(s).innerHTML = '');
  todayList.innerHTML = '';
  tomorrowList.innerHTML = '';
  priorityList.innerHTML = '';
  overdueList.innerHTML = '';

  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate()+1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  tasks.forEach(task => {
    const due = task.date ? new Date(task.date + (task.time ? 'T'+task.time : 'T23:59')) : null;

    const el = document.createElement('div');

    let isOverdue = due && due < now && task.status !== 'done';

    el.className = `card ${task.status} ${isOverdue ? 'overdue' : ''}`;
    el.draggable = true;

    el.innerHTML = `
      <div>${task.text}</div>
      <small>Due: ${task.date || ''} ${task.time || ''}</small>
      <div>Priority: ${task.priority || ''}</div>
      <div class="actions">
        <button onmousedown="event.stopPropagation()" onclick="editTask('${task.id}')">Edit</button>
        <button onmousedown="event.stopPropagation()" onclick="deleteTask('${task.id}')">Delete</button>
      </div>
    `;

    el.ondragstart = e => e.dataTransfer.setData('id', task.id);

    document.getElementById(task.status).appendChild(el);

	if (task.date === today && task.status !== 'done') {
	  hasToday = true;
	  todayList.innerHTML += `<div>${task.text} (${task.time||''})</div>`;
	}

	if (task.date === tomorrowStr && task.status !== 'done') {
	  hasTomorrow = true;
	  tomorrowList.innerHTML += `<div>${task.text} (${task.time||''})</div>`;
	}

	if (task.priority === 'urgent' && task.status !== 'done') {
	  hasPriority = true;
	  priorityList.innerHTML += `<div>${task.text}</div>`;
	}

	if (isOverdue) {
	  hasOverdue = true;
	  overdueList.innerHTML += `<div>${task.text}</div>`;
	}
  });
  document.getElementById('todaySection').style.display = hasToday ? 'block' : 'none';
  document.getElementById('tomorrowSection').style.display = hasTomorrow ? 'block' : 'none';
  document.getElementById('prioritySection').style.display = hasPriority ? 'block' : 'none';
  document.getElementById('overdueSection').style.display = hasOverdue ? 'block' : 'none';
}

function createTask() {
  const text = document.getElementById('text').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const priority = document.getElementById('priority').value;

  if (!text) return;

  tasks.push({ id: Date.now().toString(), text, status:'todo', date, time, priority });

  document.getElementById('text').value='';
  document.getElementById('date').value='';
  document.getElementById('time').value='';

  save();
  loadTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id===id);
  const newText = prompt('Edit task:', task.text);
  if(newText){ task.text=newText; save(); loadTasks(); }
}

function deleteTask(id) {
  if(confirm('Delete?')){
    tasks = tasks.filter(t=>t.id!==id);
    save(); loadTasks();
  }
}

function allow(e){ e.preventDefault(); }

function drop(e,status){
  e.preventDefault();
  const id = e.dataTransfer.getData('id');
  tasks = tasks.map(t=> t.id===id ? {...t,status} : t);
  save();
  loadTasks();
}

loadTasks();