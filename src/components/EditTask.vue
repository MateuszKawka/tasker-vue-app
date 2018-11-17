<template>
<transition name='slide'>
    <div class="modal" v-if='showEditModal'>
        <button class='modal__close' @click='closeModal'><i class="material-icons">close
</i></button>
        <form class='new-task-form'>
            <label class='new-task-form__label'>Task name:</label>
            <input type="text" class="new-task-form__input" placeholder="Task name" v-model="task.title">
            <label class='new-task-form__label'>Task description:</label>
            <input type="text" class="new-task-form__input"  placeholder="Task description" v-model="task.desc">
            <button class='new-task-form__add-button' type='button' @click='saveTask'><i class="material-icons">save_alt
</i></button>
        </form>
   </div>
</transition>
</template>

<script>
export default {
  name: 'EditTask',
  data() {
    return {
      task: {
        title: '',
        desc: '',
        completed: false,
        id: Number
      },
      valid: false,
      msg: String
    };
  },
  computed: {
    showEditModal() {
      if (this.$store.state.showEditModal === true) {
        this.getTaskData();
      }
      return this.$store.state.showEditModal;
    },
    editedTaskIndex() {
      return this.$store.state.editedTaskIndex;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('editModalTrigger');
    },
    getTaskData() {
      let index = this.editedTaskIndex;

      let taskData = this.$store.getters.getTaskByIndex(index);
      this.task = taskData;
    },
    saveTask() {
      let modifyConfig = {
        index: this.editedTaskIndex,
        modifedTask: this.task
      };
      console.log(modifyConfig);
      this.$store.commit('modifedTask', modifyConfig);
      this.$store.dispatch('saveTasksToLocalStorage');
      this.$store.commit('editModalTrigger');
    }
  },
  updated() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/_variables.scss';

.modal {
  z-index: 2;

  width: 100%;
  height: 72vh;
  position: fixed;
  background: $main-color;
  bottom: 0;
  left: 0;
}

.modal__close {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;

  i {
    font-size: 42px;
    color: $light-color;
  }
}

.new-task-form {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 1rem 1rem 2rem 1rem;
}

.new-task-form__label {
  margin: 1rem;
  color: $light-color;
  font-weight: 200;
}

.new-task-form__input {
  width: 65%;
  height: 52px;
  background: $overlay-color;
  border: none;
  padding-left: 1rem;
  color: $light-color;
  font-size: 1.4rem;
}

.new-task-form__input::-webkit-input-placeholder {
  color: $light-color;
  font-weight: 200;
}

.new-task-form__add-button {
  margin-top: 3rem;

  border: none;
  background: none;
}

.new-task-form__add-button i {
  font-size: 48px;
  color: $light-color;
}
</style>



