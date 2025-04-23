const form = document.querySelector('#todo-form')
const taskTitleInput = document.querySelector('#task-title-input')
const addTaskButton = document.querySelector('#add-task-button')
const todoListUl = document.querySelector('#todo-list')

let tasks = []

function renderTaskOnHTML(taskTitle, done = false) {
    const li = document.createElement('li')
    
    const input = document.createElement('input')
    input.className = 'todo-checkbox'
    input.setAttribute('type', 'checkbox')
    input.addEventListener('change', (event) => {
        const liToToggle = event.target.parentElement

        const spanToToggle = liToToggle.querySelector('span')
        const done = event.target.checked
        if(done){
            spanToToggle.style.textDecoration = 'line-through'
        }else{
            spanToToggle.style.textDecoration = 'none'
        }

        tasks = tasks.map(t => {
            if(t.title === spanToToggle.textContent){
                return {
                    title: t.title,
                    done: !t.done
                }
            }
            return t
        })

        localStorage.setItem('tasks', JSON.stringify(tasks))
    })
    input.checked = done

    const span = document.createElement('span')
    span.textContent = taskTitle

    if(done){
        span.style.textDecoration = 'line-through'
    }

    const button = document.createElement('button')
    button.textContent = 'Remover'
    button.className = 'remove-btn'
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement

        const titleToRemove = liToRemove.querySelector('span').textContent
        console.log(tasks)
        tasks = tasks.filter(t => t.title !== titleToRemove)

        console.log(tasks)

        todoListUl.removeChild(liToRemove)
        
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(button)

    todoListUl.appendChild(li)
}

window.onload = () => {
    const tasksOnLocalStorage  = localStorage.getItem('tasks')

    if(!tasksOnLocalStorage) return

    tasks = JSON.parse(tasksOnLocalStorage)

    tasks.forEach(t => {
        renderTaskOnHTML(t.title, t.done)
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault()


    const taskTitle = taskTitleInput.value 

    if(taskTitle.length < 5){
        alert('Sua tarefa deve ter pelo menos 5 caracteres!')
        return
    }

    tasks.push({
        title: taskTitle,
        done: false
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))

    renderTaskOnHTML(taskTitle)

    taskTitleInput.value = ''
})