export function creationToDoPoint(text, toDoList) {

  const linePoint = document.createElement('div');
  linePoint.className = 'line_point';
  linePoint.id = text;

  const line = document.createElement('div');
  line.className = 'line';
  linePoint.append(line);

  const changePoint = () => line.classList.toggle('active');

  const toDoPoint = document.createElement('input');
  toDoPoint.type = 'checkbox';
  toDoPoint.id = 'list1';
  toDoPoint.name = 'list';
  toDoPoint.value = `${text}`;
  line.append(toDoPoint);
  toDoPoint.addEventListener('change', changePoint);

  const toDoPointText = document.createElement('label');
  toDoPointText.htmlFor = 'list1';
  toDoPoint.after(toDoPointText);
  toDoPointText.innerHTML = `${text}`;

  const deleteListPoint = (event) =>{ 
    const listClick = event.path.find(el => el.className === 'line_point')
    const deletePoint = toDoList.filter(el => el.UIlinePoint.id == listClick.id);
    toDoList = toDoList.filter(el => el.UIlinePoint.id !== listClick.id);
    removeToDoPoint(deletePoint[0])
   };

  const strikethrough = document.createElement('div');
  strikethrough.className = 'strikethrough';
  linePoint.append(strikethrough);
  strikethrough.innerHTML = 'X';
  strikethrough.addEventListener('click', deleteListPoint);

  return {
    UIlinePoint: linePoint, 
    removeListenerChangePoint: () => {
      toDoPoint.removeEventListener('change', changePoint)
    },
    removeListenerDeleteListPoint: () => {
      strikethrough.removeEventListener('click', deleteListPoint)
    }
  };
}

export function addionToDoPoint(element, toDo, toDoList) {
  if(toDoList.length == 0) {
    element.innerHTML = '';
    element.append(toDo.UIlinePoint);
  } else {
    element.append(toDo.UIlinePoint);
  }
}

function removeToDoPoint(point) {
  point.removeListenerChangePoint();
  point.removeListenerDeleteListPoint();
  point.UIlinePoint.parentNode.removeChild(point.UIlinePoint);
}



