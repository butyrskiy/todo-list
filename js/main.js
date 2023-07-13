const todo = [];

const STATUS = {
  'TODO': 'To do',
  'IN_PROGRESS': 'In progress',
  'DONE': 'Done'
}

const PRIORITY = {
  'HIGH': 'High',
  'MIDDLE': 'Middle',
  'LOW': 'Low'
}

function addTask(name) {
  if(typeof(name) !== 'string') {
    console.error('The task name must be a string!');
  } else {
    todo.push({
      name: name,
      status: STATUS.TODO,
      priority: PRIORITY.MIDDLE
    });
  }
}

function changeStatus(nameTask, status) {
  let task = findTaskInTodo(nameTask);
  
  if(task) {
    task.status = status;
  } else {
    console.error(`This task: «${nameTask}» is not on this list!`)
  }
}

function deleteTask(nameTask) {
  let task = findTaskIndex(nameTask);

  if(typeof(task) === 'number') {
    todo.splice(task, 1);
  } else {
    console.error(task);
  }
}

function showList() {
  let todoStr = '';
  let inProgressStr = '';
  let doneStr = '';
  
  for(let task of todo) {
    if(task.status === STATUS.TODO) {
      todoStr += `${task.name}\n\t`;
    } else if(task.status === STATUS.IN_PROGRESS) {
      inProgressStr += `${task.name}\n\t`;
    } else if(task.status === STATUS.DONE) {
      doneStr += `${task.name}\n\t`;
    }
  }

    if(todoStr !== '') {
      console.log(`To do:\n\t${todoStr}\n`);
    } else {
      todoStr += `\nNothing is «${STATUS.TODO}»`;
      console.log(todoStr);
    }

    if(inProgressStr !== '') {
      console.log(`In progress:\n\t${inProgressStr}`);
    } else {
      inProgressStr += `\nNothing is «${STATUS.IN_PROGRESS}»`;
      console.log(inProgressStr);
    }

    if(doneStr !== '') {
      console.log(`Done:\n\t${doneStr}`);
    } else {
      doneStr += `\nNothing is «${STATUS.DONE}»`;
      console.log(doneStr);
    }
}

function findTaskInTodo(nameTask) {
  let task = todo.find(item => item.name === nameTask);

  if(task) {
    return task;
  }
}

function findTaskIndex(nameTask) {
  let task = todo.findIndex(item => item.name === nameTask);

  if(task >= 0) {
    return task;
  } else {
    return `This task: «${nameTask}» is not on this list!`
  }
}

addTask('walk the dog');
addTask('create a task list');
addTask('read new article');
addTask('buy milk');

changeStatus('walk the dog', STATUS.TODO);
changeStatus('create a task list', STATUS.IN_PROGRESS);
changeStatus('read new article', STATUS.DONE);

deleteTask('buy milk');

showList();