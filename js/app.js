const todos = [
    {
        text: 'Fare i compiti',
        done: false
    },
    {
        text: 'Fare la spesa',
        done: false
    },
    {
        text: 'Buttare i pattumi',
        done: true
    },
    {
        text: 'Fare la doccia',
        done: false
    },

]

const app = new Vue({
    el: '#root',
    data: {
        todos,
        classiTodos: 'todo',
        newTodo: '',
    },
    computed: {
        tryComputed() {

            const taskDo = []
            this.todos.forEach(element => {

                if (element.done) {
                    taskDo.push(element.text)
                }

            });


            return taskDo
        }

    },
    methods: {
        toggleDoneOf(todo) {
            // console.log(todo)
            todo.done = !todo.done
        },
        addTodo() {
            this.newTodo = this.newTodo.trim()

            if (!this.newTodo) return

            this.todos.push({
                text: this.newTodo,
                done: false,
            })
            this.newTodo = ''

        },

        enterKey(event) {
            if (event.key === 'Enter') {
                this.addTodo()
                // console.log('Enter')
            }
        },


    },



})

const done = false

const tasks = [
    done ? 'done' : '',
    'todo',
    'altra-classe']