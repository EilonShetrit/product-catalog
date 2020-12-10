<template>
  <div class="product-list">
    <ul v-if="stores">
      <li v-for="store in stores" :key="store.StoreId">
        <div v-for="product in store.Products" :key="product">
          <productPreview :product="product"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import productPreview from '@/components/product-preview.cmp.vue';
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
  },
  components:{
    productPreview
  }
}
</script>