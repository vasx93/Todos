
const mainInput = document.querySelector('#main-input')
const ul = document.querySelector('ul')

const form = document.querySelector('form')



function toDo(ev) {
  ev.preventDefault()

  const toDoDiv = document.createElement('div')
  toDoDiv.classList.add('todo-div')

  const li = document.createElement('li')
  li.innerHTML = `
   <input type="text" value="${mainInput.value}">`
  li.classList.add('todo-item')
  toDoDiv.appendChild(li)

  const removeBtn = document.createElement('button')
  removeBtn.innerHTML = '<i class="delete fas fa-minus-square">'
  removeBtn.classList.add('todo-btn')
  toDoDiv.appendChild(removeBtn)
  
  ul.append(toDoDiv)
  mainInput.value = ''

  
}


function removeTask(ev) {
  const item = ev.target
  
   if (item.classList.contains('todo-btn')) {
    const todo = item.parentElement
    todo.classList.add('gone')

    todo.addEventListener('transitionend', function() {
      todo.remove()

    })
  }
  // can use item.classList[0] === 'todo-btn'
}

form.addEventListener('submit', toDo)
ul.addEventListener('click', removeTask)

//TODO        set up a filter for completed tasks

