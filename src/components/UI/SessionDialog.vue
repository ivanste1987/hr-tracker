<template>
  <div class="error-popup">
      <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String
        }
    }
}
</script>

<style lang="scss">


</style>