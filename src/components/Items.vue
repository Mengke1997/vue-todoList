<template>
    <div>
        <ul>
             <li v-for= '(item , index) in allTodos' :key='index'>
                <span class="point" :class='{completed:item.completed}' @click="changeCompleted(index)"></span>
                <b :class={completed:item.completed}>{{item.text}}</b>
                <button @click='deleteTodo(item.id)'>X</button>
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
    changeCompleted:Function
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
</style>
