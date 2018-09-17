<template>
  <button class='button material-icons' @click='buttonFunction'>
{{iconClass}}
</button>
</template>

<script>
export default {
  name: "TaskButton",
  props: {
    iconClass: String,
    buttonFunction: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.material-icons {
  font-size: 24px;
}

.button {

}
</style>
