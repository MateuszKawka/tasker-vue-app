<template>
  <section class="tasks-container" v-show='!load' key='section-task'>
    <draggable v-model="tasks"  @start="drag=true" element='ul'>
    <transition-group name='slide' mode='out-in' tag='div'>
      <Task 
        v-for='task in tasks'
        :key='task.id'
        v-if='task.completed !== showUncompleted'
        :task='task' />
    </transition-group>
    </draggable>
  </section>
</template>

<script>
import Task from './Task.vue';
import draggable from 'vuedraggable';

export default {
  name: 'TasksContainer',
  data() {
    return {
      load: false
    };
  },
  components: {
    Task,
    draggable
  },
  computed: {
    showUncompleted() {
      return this.$store.state.showUncompleted;
    },
    tasks: {
      get() {
        return this.$store.state.tasks;
      },
      set(value) {
        this.$store.commit('updateTasks', value);
      }
    }
  }
};
</script>
