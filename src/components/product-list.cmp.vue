<template>
  <div class="product-list">
    <ul v-if="stores">
      <li v-for="store in stores" :key="store.StoreId">
        
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'productApp',
  data(){
    return{
    }
  },
  computed:{
    stores(){
      return this.$store.getters.getStores;
    }
  },
  created(){
  }
}
</script>