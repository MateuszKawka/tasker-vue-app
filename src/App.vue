<template>
<transition appear>
  <div id="app">
    <Welcome/>
    <transition name='slide'>
      <Header />
    </transition>
    <div class="mega-wrapper">
      <transition name='slide'>
        <Info v-if='showInfo' />
      </transition>
      <main class='main'>
        <TasksContainer />
        <button class='button button--new-task' @click='modalTrigger'><i class="material-icons">
    add_circle
    </i></button>
        <TaskModal :modalTrigger='modalTrigger'/>
        <EditTask/>
        <Settings v-if='showSettings'/>
      </main>
    </div>
    <button class='button button--settings' :class='{"button--active": showSettings}' @click='settingsTrigger'><i class="material-icons">
settings
</i></button>
    
  </div>
</transition>
</template>

<script>
import Header from './components/Header.vue';
import TaskModal from '@/components/TaskModal.vue';
import Info from '@/components/Info.vue';
import EditTask from '@/components/EditTask.vue';
import Welcome from '@/components/Welcome.vue';
import Settings from '@/components/Settings.vue';
import TasksContainer from '@/components/TasksContainer.vue';
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
    TasksContainer,
    Header,
    TaskModal,
    Info,
    EditTask,
    Welcome,
    Settings
  },
  methods: {
    modalTrigger() {
      this.$store.commit('modalTrigger');
    },
    settingsTrigger() {
      this.$store.commit('settingsTrigger');
    }
  },
  computed: {
    ...mapState({
      showModal: state => state.showModal,
      showInfo: state => state.showInfo,
      showSettings: state => state.showSettings
    })
  },
  mounted() {
    this.$store.dispatch('getTasksFromLocalStorage');
    this.$store.dispatch('getNameFromLocalStorage');
  }
};
</script>

<style lang="scss">
@import '@/_variables.scss';
body {
  background: $light-color;
  width: 100%;
  height: 100%;
}

html {
  font-size: 62.5%;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
}

ul {
  list-style-type: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
}

.button {
  background: none;
  border: none;
  margin: 0 0.5rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s;
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

.button--active {
  i {
    color: #fff;
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
