<template>
  <div id="app">
      <h1>todos</h1>
      <div class="ipt">
          <span class="point" :class='{show:isShow,completed:isCompleted}' @click='allChangeCompleted'></span>
          <input type="text" placeholder="What needs to be done?" @keyup.enter='addTodo'>
      </div>
      <Items  class="Items" 
              :allTodos='allTodos' 
              :deleteTodo='deleteTodo' 
              :changeCompleted='changeCompleted'
      >
      </Items>
      <div class="status">
          <span class="num">{{num}} items</span>
          <span class="all" :class="[tag==='all'?'isActive':'']" @click='toggleStatus("all")'>all</span>
          <span class="active" :class="[tag==='active'?'isActive':'']" @click='toggleStatus("active")'>active</span>
          <span class="completed" :class="[tag==='completed' ? 'isActive' : '']" @click='toggleStatus("completed")'>completed</span>
      </div>
      <p class="deck"></p>
      <p class="deck"></p>
  </div>
</template>

<script>

import Items from './components/Items' 

var filter={
   all:
      function(todos){
          return todos;
      }
   ,
   active:
     function(todos){
          return todos.filter(val=>val.completed==false);
     }
   ,
   completed:
     function(todos){
       return todos.filter(val=>val.completed==true);
     }
   
}

export default {
  name: 'app',
  components: {
     Items
  },
  data(){
    return {
        isShow:true,
        isCompleted:true,
        todos:[
          {id:0,text:'000',completed:true},
          {id:1,text:'111',completed:true},
          {id:2,text:'222',completed:true}
        ],
        total:3,
        num:3,
        tag:'all'
    }
  },
  computed:{
        allTodos:function(){
          console.log(filter[this.tag])
          return filter[this.tag](this.todos);
        }
  },
  watch:{
    todos: {
      // 深度watch
      handler:function(val){
          var isFlag=val.some(val => val.completed==false);
          this.isCompleted=!isFlag;
          if(val.length==0){
            this.isShow=false;
          }else{
            this.isShow=true;
          };
          this.num=val.filter(val => val.completed==false).length;
      },
      deep:true
    }
  },
  methods:{
    // 点击改变单个complete状态
    changeCompleted(index){
        this.todos[index].completed=!this.todos[index].completed;
    },
    // 点击改变全部completed状态
    allChangeCompleted(){
      this.isCompleted=!this.isCompleted;
      this.todos.forEach(val=>val.completed=this.isCompleted);
    },
    // 添加todo
    addTodo(e){
        this.todos.push({id:this.total++,text:e.target.value,completed:false});
        e.target.value='';
    },
    // 删除todo
    deleteTodo(id){
        this.todos=this.todos.filter(val=>val.id!==id);
    },
    // 切换状态
    toggleStatus(status){
        this.tag=status;
        console.log(filter[this.tag])
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  width:600px;
  height:700px;
  background:#f5f5f5;
}
h1{
  color:#ecdddd;
  font-size:70px;
  margin:30px 0 30px;
}
div.ipt{
  width:500px;
  height:60px;
  margin:0 auto;
  border:1px solid #d2d2d2;
  /* box-shadow: 10px 10px 5px #888888; */
  background:#fff;
}
div.ipt .point{
  width:30px;
  height:30px;
  border:1px solid #d2d2d2;
  border-radius: 50%;
  float: left;
  margin:14px;
  visibility:hidden;
  cursor: pointer;
}
div.ipt .show{
  visibility: visible;
}
div.ipt .completed{
  background:#5dc2af;
}
div.ipt input{
  width:430px;
  height:58px;
  border:0;
  outline:none;
  padding: 10px 30px;
  float: left;
  font-size:20px;
}
.Items{
  width:500px;
  max-height: 450px;
  overflow-y: scroll;
  margin:0 auto;
}
.Items::-webkit-scrollbar
{
    width: 10px;
    background-color: rgb(77, 43, 43);
}
/*定义滚动条轨道 内阴影+圆角*/
.Items::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}
/*定义滑块 内阴影+圆角*/
.Items::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background-color:#5dc2af;
}
.status{
  width:500px;
  height:50px;
  background:#fff;
  border:1px solid #d2d2d2;
  border-top:0px;
  margin:0 auto;
  padding: 10px;
  line-height: 30px;
}
.status span{
  padding: 3px 5px;
  border:1px solid transparent;
  border-radius: 5px;
  float: left;
  font-size: 14px;
  color:#aaa;
  height:30px;
  line-height:20px;
  margin-right: 10px;
  cursor: pointer;
}
.status span.isActive{
  border-color:#d2d2d2;
}
.status span:first-child{
  margin-right: 90px;
  cursor: default;
}
p.deck{
  width:480px;
  height:5px;
  background:#fff;
  border:1px solid #d2d2d2;
  border-top:0px;
  margin:0 auto;
}
p.deck:last-child{
  width:470px;
}
</style>
