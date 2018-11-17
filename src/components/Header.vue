<template>
  <header class='header' :class='{ "header--small": showModal}'>
    <div class="wrapper">
      <transition name='slide'>
<div class="container hello-text">
        <p class='header__title'>Hello</p>
        <p class='header__title'>{{ name.length > 1 ? name : 'There'}}</p>
      </div>
      </transition>
        <Date/>
    </div>
      <Bar/>
  </header>
</template>

<script>
import Bar from '@/components/Bar.vue';
import Date from '@/components/Date.vue';
export default {
  name: 'Header',
  components: {
    Bar,
    Date
  },
  methods: {
    modalTrigger() {
      this.$store.commit('modalTrigger');
    }
  },
  computed: {
    showModal() {
      return this.$store.state.showModal;
    },
    name() {
      return this.$store.state.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/_variables.scss';

.header {
  width: 100%;
  height: 28vh;
  position: fixed;
  top: 0;
  /* background: #614385;  /* fallback for old browsers 
background: -webkit-linear-gradient(to right, #516395, #614385);  /* Chrome 10-25, Safari 5.1-6 
background: linear-gradient(to right, #516395, #614385); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: rgb(24, 15, 79);
  background: -moz-linear-gradient(
    top,
    rgba(24, 15, 79, 1) 1%,
    rgba(31, 14, 52, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(24, 15, 79, 1) 1%,
    rgba(31, 14, 52, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(24, 15, 79, 1) 1%,
    rgba(31, 14, 52, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#180f4f', endColorstr='#1f0e34',GradientType=0 );

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  padding-top: 1rem;
}

.container {
  margin-bottom: 1.5rem;
}

.hello-text {
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 6rem;
}

.header__title {
  font-size: 2.6rem;
  color: $light-color;
  font-weight: 100;
}
</style>
