<template>
<transition name='slide'>
  <div class='settings-container' v-if='showSettings'>
    <p>Reset local storage</p>
    <button type='button'>reset</button>
  </div>
</transition>
</template>

<script>
export default {
  name: "Settings",
  computed: {
    showSettings() {
      return this.$store.state.showSettings;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/_variables.scss';


</style>
