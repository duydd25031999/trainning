<template>
  <div>
    <header class="header">
        <h1>Việc cần làm</h1>
    </header>
  </div>
</template>

<script>
// import axios from 'axios'
// url: 'https://jsonplaceholder.typicode.com/todos?_limit=5'

export default {
  name: 'App',
  setup() {}
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
