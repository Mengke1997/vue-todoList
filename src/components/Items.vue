<template>
    <div>
        <ul>
             <li v-for= '(item , index) in allTodos' :key='index' @dblclick='inputChange(index,true)' >
                <span class="point" :class='{completed:item.completed}' @click="changeCompleted(index)"></span>
                <b :class={completed:item.completed} >{{item.text}}</b>
                <button @click='deleteTodo(item.id)'>X</button>
                <input  type="text"  
                        :value=item.text  
                        :class='{showIpt:item.isShowIpt}'
                        v-focus
                        @keyup="inputTodo(index,$event)"                  
                        @blur='inputChange(index,false)'
                >
            </li> 
        </ul>
    </div>   
</template>

<script>
export default {
  name: 'Items',
  props: {
    allTodos: Array,
    deleteTodo:Function,
    changeCompleted:Function,
    inputChange:Function,
    inputTodo:Function,
    // inputNone:Function
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{
        list-style:none;
    }
    li{
        border-bottom:1px solid #d2d2d2;
        border-left:1px solid #d2d2d2;
        border-right:1px solid #d2d2d2;
        height:40px;
        text-align: left;
        padding: 0 10px;
        line-height:40px;
        background:#fff;
        position: relative;
    }
    span{
        float: left;
        cursor: pointer;
    }
    span.point{
        width:20px;
        height:20px;
        border:1px solid #d2d2d2;
        border-radius: 50%;
        margin:10px;
    }
    span.completed{
        background:#5dc2af;
    }
    b.completed{
        text-decoration: line-through;
    }
    button{
        float: right;
        font-size: 26px;
        color:tomato;
        display:none;
        border:0;
        background:transparent;
        padding: 3px 0;
        cursor: pointer;
        outline: none;
    }
    li:hover button{
        display: block;
    }
    li input {
        position: absolute;
        width:400px;
        height:40px;
        left:50px;
        top:0;
        z-index: 9;
        background:#fff;
        outline: none;
        display:none;
    }
    li input.showIpt{
        display: block;
    }
</style>
