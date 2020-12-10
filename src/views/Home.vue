<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{getShops}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed:{
    getShops(){
      return this.$store.getters.getShops;
    }
  },
  components: {
  }
}
</script>
