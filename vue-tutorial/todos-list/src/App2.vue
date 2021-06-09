<template>
  <div>
    <header class="header">
        <h1>Việc cần làm</h1>
    </header>
    <p 
      v-for="todo in todos"
      :key="todo.id"
      :class="['todo-item', todo.completed ? 'is-completed' : '']"
    >
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="markComplete(todo.id)"
      />
      {{ todo.title }}
      <button 
        class="del-btn" 
        @click="deleteTodo(todo.id)"
      >Delete</button>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  name: 'App',
  setup() {
    const todos = ref([])
    // vue.ref thay thế cho data()
    // ref(initValue) return: variable = { value: initValue }
    // khi variable.value change => vue watch => vue update

    const getAllTodos = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        )
        todos.value = res.data
      } catch (error) {
        console.log(error)
      }
    }
    getAllTodos()
    const markComplete = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    }
    const deleteTodo = async id => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        todos.value = todos.value.filter(todo => todo.id !== id)
      } catch (error) {
        console.log(error)
      }
    }
    const addTodo = async newTodo => {
      try {
        const res = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          newTodo
        )
        todos.value.push(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    return {
      todos,
      markComplete,
      deleteTodo,
      addTodo
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  margin: 0;
  border-bottom: 1px #ccc dotted;
}
.is-completed {
  text-decoration: line-through;
}
.del-btn {
  background: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right;
}
</style>
