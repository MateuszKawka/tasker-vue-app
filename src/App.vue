<template>
<transition appear>
  <div id="app">
    <Welcome/>
    <transition name='slide'>
      <Header name='Matthew' />
    </transition>
    <div class="mega-wrapper">
      <transition name='slide'>
        <Info v-if='showInfo' />
      </transition>
      <main class='main'>
        <transition name='slide'>
        <section class="tasks-container" v-show='!load'>
           <ul>
              <Task 
              v-for='task in tasks'
              :key='task.id' 
              :task='task' />
            </ul>
        </section>
        </transition>
        <button class='button button--new-task' @click='modalTrigger'><i class="material-icons">
    add_circle
    </i></button>
        <TaskModal :modalTrigger='modalTrigger'/>
        <EditTask/>
        <Settings />
      </main>
    </div>
    <button class='button button--settings' @click='settingsTrigger'><i class="material-icons">
settings
</i></button>
    
  </div>
</transition>
</template>

<script>
import Task from "./components/Task.vue";
import Header from "./components/Header.vue";
import TaskModal from "@/components/TaskModal.vue";
import Info from "@/components/Info.vue";
import EditTask from "@/components/EditTask.vue";
import Welcome from "@/components/Welcome.vue"
import Settings from "@/components/Settings.vue"

import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Task,
    Header,
    TaskModal,
    Info,
    EditTask,
    Welcome,
    Settings
  },
  data() {
    return {
      load: false
    };
  },
  methods: {
    modalTrigger() {
      this.$store.commit("modalTrigger");
    },
    settingsTrigger() {
       this.$store.commit("settingsTrigger");
    }
  },
  computed: {
    ...mapState({
      showUncompleted: state => state.showUncompleted,
      showModal: state => state.showModal,
      showInfo: state => state.showInfo
    }),
    ...mapGetters(["listOfTask", "listOfCompletedTasks"]),
    tasks: {
      get() {
        if (this.showUncompleted === true) {
          return this.listOfTask;
        } else {
          return this.listOfCompletedTasks;
        }
      },
      set(value) {
        this.$store.commit("updateTasks", value);
      }
    }
  },
  mounted() {
    this.$store.dispatch("getTasksFromLocalStorage");
    this.$store.dispatch("getNameFromLocalStorage");
  }
};
</script>

<style lang="scss">
@import "@/_variables.scss";
body {
  background: $light-color;
  width: 100%;
  height: 100%;
}

html {
  font-size: 62.5%;
}

ul {
  list-style-type: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
}

.button {
  background: none;
  border: none;
  margin: 0 0.5rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s;
}

.slide-enter,
  .slide-leave-to
  /* .fade-leave-active below version 2.1.8 */
  
 {
  transform: scale(0);
}

.material-icons {
  color: $main-color;
}
.button {
  background: none;
  border: none;
}

.button--new-task {
  position: fixed;
  bottom: 12px;

    i {
      font-size: 6rem;
    }
}


.button--settings {
  position: fixed;
  bottom: 12px;
  right: 12px;
  i {
    font-size: 3rem;
  }
}



.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 28vh;
}

.mega-wrapper {
  max-width: 1024px;
  margin: 0 auto;
}

.tasks-container {
  width: 90%;
}

.flip-list-move {
  transition: transform 0.6s;
}
</style>
