<template>
    <div class="first">
      <p>i am first</p>
        {{count}}
    </div>
</template>

<script>
    export default {
      computed: {
        count() {
          return this.$store.state.count;
        }
      },
        name: "first"
    }
</script>

<style scoped>

</style>
