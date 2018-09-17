<template>

  <div class="welcome" v-if='showWelcome'>
      <h1 class='welcome__title'>Hello in task app </h1>
      <input type='text' class='welcome__input' v-model='name' placeholder="Your name">
      <button type='button' class='welcome__button' @click='addName'>Add my name</button>
      <button type='button' class='welcome__button' @click='close'>Don't do that</button>
  </div>

</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: ""
    };
  },
  computed: {
    showWelcome() {
      return this.$store.getters.getWelcomeShow;
    }
  },
  methods: {
      addName() {
          this.$store.commit('setName', this.name);
          this.$store.dispatch('saveNameToLocalStorage')
          this.$store.commit('welcomeTrigger')
      },
      close() {
          this.$store.commit('setName', 'There');
          this.$store.dispatch('saveNameToLocalStorage')
          this.$store.commit('welcomeTrigger')
      }
  },
  mounted(){
      if(localStorage.getItem('name') !== null) {
          
          this.close()
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/_variables.scss";

.welcome {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 999;
  top: 0;
  background: $main-color;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.welcome__title {
  color: $details-ui-color;
  position: absolute;
  top: 20%;
  font-size: 2.8rem;
}

.welcome__input {
  width: 55%;
  height: 48px;
  border: none;
  background: $overlay-color;
  color: $details-ui-color;
  padding: 0.5rem;
}

.welcome__button {
  width: 55%;
  height: 42px;
  border: none;
  color: $main-color;
  background: $details-ui-color;
  margin-top: 4rem;
}
</style>
