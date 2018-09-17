<template>
<transition name='slide'>
  <div class="bar">
      <button class="bar-button" @click='showUncompletedTasks'>
          <p>Tasks</p>
          <p>{{tasks}}</p>
      </button>
      <button class="bar-button" @click='showCompletedTasks'>
          <p>Completed tasks</p>
          <p class='big'>{{completed}}</p>
      </button>
  </div>
</transition>
</template>

<script>
export default {
  name: "Bar",
  computed: {
    tasks() {
      return this.$store.getters.numberOfTasks;
    },
    completed() {
      return this.$store.getters.numberOfCompletedTasks;
    }
  },
  methods: {
    showUncompletedTasks() {
      this.$store.commit("viewTrigger", true);
    },
    showCompletedTasks() {
      this.$store.commit("viewTrigger", false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/_variables.scss";

.bar {
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  background: $overlay-color;

  position: absolute;
  bottom: 0;
}
.bar-button {
  width: 40%;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  display: flex;
  height: 6rem;
  align-items: center;
  justify-content: space-around;
}

p {
  font-size: 1.4rem;
  color: $details-ui-color;
  margin: 0 0.5rem;
}

p span {
  width: 100%;
  font-size: 1.2rem;
  color: $details-ui-color;
}

.big {
  color: $contrast-color;
  font-weight: 700;
}
</style>
