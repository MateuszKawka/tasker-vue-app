<template>
<transition name='slide'>
    <div class="modal" v-show='showModal'>
        <button class='modal__close' @click='modalTrigger'><i class="material-icons">close
</i></button>
        <form class='new-task-form'>
            <label class='new-task-form__label'>Task name:</label>
            <input type="text" class="new-task-form__input" placeholder="Task name" v-model="newTask.title">
            <label class='new-task-form__label'>Task description:</label>
            <input type="text" class="new-task-form__input"  placeholder="Task description" v-model="newTask.desc">
            <button class='new-task-form__add-button' type='button' @click='addTask'><i class="material-icons">add_circle_outline
</i></button>
        </form>
   </div>
</transition>
</template>

<script>
export default {
  name: 'TaskModal',
  props: {
    modalTrigger: Function
  },
  data() {
    return {
      newTask: {
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
    showModal() {
      return this.$store.state.showModal;
    }
  },
  methods: {
    addTask() {
      this.validation();
      if (this.valid) {
        this.createID();
        this.$store.commit('addNewTask', Object.assign({}, this.newTask));
        this.clearInputs();
        this.modalTrigger();
        this.$store.dispatch('saveTasksToLocalStorage');
      } else {
        this.msg = 'Must have more than 3 and lower than 32 characters.';
        this.$store.commit('errorMsg', this.msg);
        this.$store.commit('infoTrigger');
        this.$store.dispatch('infoClose');
      }
    },
    createID() {
      let id = Date.now() + Math.random();
      this.newTask.id = id;
    },
    validation() {
      if (
        this.newTask.title.length >= 3 &&
        this.newTask.title.length <= 32 &&
        this.newTask.desc.length >= 3
      ) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    clearInputs() {
      this.newTask.title = '';
      this.newTask.desc = '';
    }
  }
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



