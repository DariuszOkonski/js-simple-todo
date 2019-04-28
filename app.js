const domElements = {
  buttonAdd: document.querySelector('button'),
  inputAdd: document.querySelector('form input[type="text"]'),
  inputFind: document.getElementById('find'),
  ul: document.querySelector('ul'),
  h1: document.querySelector('h1 span'),
}

let elements = ['one', 'two', 'three', 'four', 'fours', 'fourss', 'five', 'six', 'seven'];

function removeElement() {
  const index = this.parentNode.dataset.id;
  elements.splice(index, 1);
  displayTasks(elements);
}

const displayTasks = (arr) => {
  domElements.ul.textContent = '';
  arr.forEach((element, index) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', index);

    const p = document.createElement('p');
    p.textContent = element;

    li.appendChild(p);

    const button = document.createElement('button');
    button.textContent = 'Usuń';
    button.addEventListener('click', removeElement);

    li.appendChild(button);

    domElements.ul.appendChild(li);
  });
  domElements.h1.textContent = elements.length;
}

const addTask = (e) => {
  e.preventDefault();

  if (domElements.inputAdd.value === '') {
    alert('Uzupełnij pole dodaj zadanie')
    return;
  }

  elements.push(domElements.inputAdd.value);
  displayTasks(elements);
  domElements.inputAdd.value = '';
  domElements.inputFind.value = '';
}

const findElement = (e) => {
  console.log(e.target.value)

  const findArray = elements.filter(item => {
    if (item.includes(e.target.value))
      return item;
  })

  console.log(findArray);
  displayTasks(findArray);
}

displayTasks(elements);
domElements.inputFind.addEventListener('input', findElement);
domElements.buttonAdd.addEventListener('click', addTask);