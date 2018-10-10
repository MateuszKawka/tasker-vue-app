<template>
  <li>
      <article class='task' :key='task.id'>
        <p class='task__title my-handle' 
        :class='{"completed": task.completed}'>
        <i class="material-icons task-icon" 
        :class='{"task-icon--completed": task.completed}'>grade</i>{{task.title}}</p>
        <p class='task__description'>{{task.desc}}</p>
        <TaskControl :data-id='task.id' />
      </article>
  </li>
</template>

<script>
  import TaskControl from "@/components/TaskControl.vue";
  export default {
    name: "Task",
    components: {
      TaskControl
    },
    props: {
      task: Object
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/_variables.scss';
  .task {
    margin: 2rem 0;
    padding: 1rem 1rem 3rem 1rem;
    border-bottom: 1px solid $details-ui-color;
  }
   
  .task--completed {
    background: $main-color;
  }
  
  .task__title {
    font-weight: 400;
    font-size: 2rem;
    padding-left: 1rem;
    border-bottom: 1px solid $details-ui-color;
    padding-bottom: .5rem;
    display: flex;
    align-items: center;
  }
  
  .task__description {
    margin-top: 1rem;
    font-size: 1.4rem;
    padding-left: 1rem;
  }
  
  .completed {
    color: $contrast-color;
  }
  
  .slick-enter-active,
  .slick-leave-active {
    transition: all 1s;
  }
  
  .slick-enter,
  .slick-leave-to
  /* .fade-leave-active below version 2.1.8 */
  
  {
    transform: scale(0);
  }
  
  .task-icon {
    font-size: 2rem;
    margin-right: 1rem;
    color: $details-ui-color
  }
  
  .task-icon--completed {
    color: $contrast-color;
  }
</style>
