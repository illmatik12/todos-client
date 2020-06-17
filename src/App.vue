<template>
  <div class="container">
    <h2>Todo List</h2>
    <div class="input-group" style="margin-bottom:10px;">
      <input
        type="text"
        class="form-control"
        placeholder="할일을 입력하세요"
        v-model="name"
        v-on:keyup.enter="createTodo(name)"
      />

      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="createTodo(name)">추가</button>
      </span>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(todo, index) in todos" v-bind:key="todo">
        {{index}} {{todo.name}}
        <div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
          <button
            type="button"
            class="btn-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            더보기
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="#" @click="deleteTodo(index)">삭제</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoPage",
  data() {
    return {
      name:null,
      todos: [],
    }
  },
  methods: {
    deleteTodo(i) {
      if (i != null) {
            var target_name
            console.log(this.todos[i].name)
            target_name = this.todos[i].name
            this.$http.defaults.headers.post['Contents-Type'] = 'application/json';
            this.$http.post('http://localhost:5000/delitem', { name : target_name 
        }).then((result) => {
            console.log(result.data)
            // this.todos.push( {name : name});
            this.todos.splice(i, 1);
        })
      }
    },
    createTodo(name) {
      console.log(name)
      if (name != null) {
            this.$http.defaults.headers.post['Contents-Type'] = 'application/json';
            this.$http.post('http://localhost:5000/additem', { name : name 
        }).then((result) => {
            console.log(result.data)
            this.todos.push( {name : name});
        })
        this.name = null
      }
    },
    getTodos(){
      // var vm = this;
      this.$http.get('http://127.0.0.1:5000/todos')
      .then((result) => {
        console.log(result.data);
        this.todos = result.data;
        // console.log(this.todos)
      })
    }
  },
  mounted(){
    this.getTodos();
  }
};
</script>