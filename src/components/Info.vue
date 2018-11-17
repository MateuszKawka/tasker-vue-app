<template>
<transition name='slide'>
  <div class='info'>
    <p>{{msg}}</p>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Info',
  computed: {
    msg() {
      return this.$store.state.errorMsg;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/_variables.scss';

.info {
  width: 100%;
  height: 10vh;

  position: fixed;
  bottom: 0;
  z-index: 3;
  background: $main-color;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info p {
  width: 100%;
  color: $contrast-color;
  text-align: center;
  padding-left: 1rem;

  font-size: 1.4rem;
  font-weight: 500;
}
</style>
