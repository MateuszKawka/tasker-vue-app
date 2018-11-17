<template>
<transition name='slide'>
  <div class='settings-container'>
    <p>Clear storage ( use double click for that )</p>
    <button type='button' class='button button--reset' @dblclick='resetStorage()'>reset</button>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Settings',
  methods: {
    resetStorage() {
      localStorage.clear();
      window.location.reload(true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/_variables.scss';

.settings-container {
  width: 100%;
  height: 72vh;
  position: fixed;
  background: $main-color;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

.button--reset {
  margin-top: 1rem;
  padding: 1.5rem 4rem;
  color: $contrast-color;
  background: $overlay-color;
}

p {
  color: $details-ui-color;
}
</style>
