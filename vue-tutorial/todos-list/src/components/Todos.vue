<template>
  <AddTodo @add-todo="addTodo" />
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todoProps="todo"
    @item-completed="markComplete"
    @delete-item="deleteTodo"
  />
</template>

<script>
import { ref } from 'vue'
// import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import TodoItem from './ToDoItem'
import AddTodo from './AddToDo'
export default {
  name: 'Todos',
  components: { TodoItem, AddTodo },
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

<style></style>