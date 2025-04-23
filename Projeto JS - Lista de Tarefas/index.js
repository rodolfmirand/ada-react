const form = document.querySelector('#todo-form')
const taskTitleInput = document.querySelector('#task-title-input')
const addTaskButton = document.querySelector('#add-task-button')
const todoListUl = document.querySelector('#todo-list')

let tasks = []

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

    const li = document.createElement('li')
    
    const input = document.createElement('input')
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

    const button = document.createElement('button')
    button.textContent = 'Remover'
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement

        const titleToRemove = liToRemove.querySelector('span').textContent
        console.log(tasks)
        tasks = tasks.filter(t => t.title !== titleToRemove)

        console.log(tasks)

        todoListUl.removeChild(liToRemove)
        
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    const span = document.createElement('span')
    span.textContent = taskTitle

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(button)

    todoListUl.appendChild(li)

    taskTitleInput.value = ''
})