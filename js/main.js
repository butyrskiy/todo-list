const todo = {};

const STATUS = {
  'TODO': 'To do',
  'IN_PROGRESS': 'In progress',
  'DONE': 'Done'
}

function addTask(name) {
  if(typeof(name) !== 'string') {
    console.error('The task name must be a string!');
  } else {
    todo[name] = STATUS.TODO;
  }
}

function changeStatus(name, status) {
  if(name in todo) {
    todo[name] = status;
  } else {
    console.error(`This task: «${name}» is not on this list!`);
  }
}

function deleteTask(name) {
  if(name in todo) {
    delete todo[name];
  } else {
    console.error(`This task: «${name}» is not on this list!`);
  }
}

function showList() {
  let todoStr = '';
  let inProgressStr = '';
  let doneStr = '';

  for(key in todo) {
    if(todo[key] === STATUS.TODO) {
      todoStr += `${key}: ${todo[key]}\n`;
    } else if(todo[key] === STATUS.IN_PROGRESS) {
      inProgressStr += `${key}: ${todo[key]}\n`;
    } else if(todo[key] === STATUS.DONE) {
      doneStr += `${key}: ${todo[key]}\n`;
    }
  }
  
  console.log(`${todoStr}\n${inProgressStr}\n${doneStr}`);
  
  if(todoStr === '') {
    todoStr += `\nNothing is «${STATUS.TODO}»`;
    console.log(todoStr);
  } 
  
  if(inProgressStr === '') {
    inProgressStr += `\nNothing is «${STATUS.IN_PROGRESS}»`;
    console.log(inProgressStr);
  } 
  
  if(doneStr === '') {
    doneStr += `\nNothing is «${STATUS.DONE}»`;
    console.log(doneStr);
  }
}

addTask('walk the dog');
addTask('create a task list');
addTask('read new article');
addTask('buy milk')

changeStatus('walk the dog', STATUS.TODO);
changeStatus('create a task list', STATUS.TODO);
changeStatus('read new article', STATUS.DONE);

deleteTask('buy milk');

showList();