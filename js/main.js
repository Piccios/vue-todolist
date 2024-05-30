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
        }
    }
}).mount('#app')