<template>
<div>
  <Header/> <br>
  <h1>Todo</h1>
    <input type="text" name="todo" id="todo" v-model="todo"
    @keyup.enter="addTodo">
    <button @click="addTodo()">
      Add
    </button>

  <table v-if="todos.length > 0">
    <thead>
      <tr>
        <th scope="col">Number</th>
        <th scope="col">Todo</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody v-for="(todo, index) in todos" :key="index">
      <td scope="row"> {{index}} </td>
      <td> {{todo}} </td>
      <td>
        <button @click="deleteTool(index)">
          Delete
        </button>
      </td>
    </tbody>
  </table>
  <h1 v-else>kosong</h1>
</div>
</template>

<script>
import Header from '@/components/header.vue'

export default {
    components : {
      Header,
    },
  data : () => ({
    todos : [],
    todo : '',
  }),
  methods : {
    addTodo () {
      this.todos.push(this.todo);
      this.todo="";
    },
    deleteTool (index) {
      this.todos.splice(index, 1);
    }
  },

}
</script>

<style>

</style>
