const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: '',
            toDoList: [
                {
                    content: `Go to the store and buy the ingredient for the cake`,
                    done: false
                },
                {
                    content: `Clean the car`,
                    done: false
                },
                {
                    content: `Bake the cake for the party`,
                    done: false
                }
            ]
        }; 
    },
    methods: {
        addTodo(){
            if (this.newTodo.trim() !== '') {
                this.toDoList.push({ content: this.newTodo, done: false });
                this.newTodo = '';
            }
        },
        toggle(todo) {
            todo.done = !todo.done;
        }
    }
}).mount('#app')