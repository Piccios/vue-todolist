const { createApp } = Vue

createApp({
    data() {
        return {
            toDolist: [
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
            if (this.newTodo.trim() === '') {
                this.todo.push({ text: this.newTodo, done: false });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todo.splice(index, 1);
        }
    }
}).mount('#app')