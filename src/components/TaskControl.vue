<template>
<div>
  <div class="controls" >
      <TaskButton
        v-for='button in buttons' :key='button.name'
        :iconClass='button.iconClass'
        :buttonFunction='button.buttonFunction'
      />
     
  </div>
   
</div>
</template>

<script>
import TaskButton from '@/components/TaskButton.vue';
export default {
  name: 'TaskControl',
  components: {
    TaskButton
  },
  data() {
    return {
      buttons: [
        {
          name: 'done',
          iconClass: 'check_circle_outline',
          buttonFunction: this.doneTask
        },
        {
          name: 'edit',
          iconClass: 'edit',
          buttonFunction: this.editTask,
          taskId: 2
        },
        {
          name: 'delete',
          iconClass: 'remove_circle_outline',
          buttonFunction: this.removeTask
        }
      ],
      editedTaskId: NaN
    };
  },
  methods: {
    doneTask(el, completed) {
      let id = el.target.parentNode.parentNode.dataset.id;
      console.log(`id from dataset ${id}`);
      this.$store.commit('doneTask', id, completed);
      this.$store.dispatch('saveTasksToLocalStorage');
    },
    removeTask(el, completed) {
      let id = el.target.parentNode.parentNode.dataset.id;
      console.log(`id from dataset ${id}`);
      this.$store.commit('removeTask', id, completed);
      this.$store.dispatch('saveTasksToLocalStorage');
    },
    editTask(el, completed) {
      let id = el.target.parentNode.parentNode.dataset.id;
      console.log(id);
      let editedTaskId = id * 1;
      let index = this.$store.getters.getTaskIndexById(editedTaskId);
      this.$store.commit('setEditedTaskIndex', index, completed);
      this.$store.commit('editModalTrigger');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.controls {
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  margin-top: 1rem;
}
</style>
