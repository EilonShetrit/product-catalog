<template>
  <div class="product-list">
    <ul v-if="stores">
      <li v-for="store in stores" :key="store.StoreId">
        <div v-for="store in stores" :key="store">
          <!-- <productPreview :product="product"/> -->
          <storePreview :store="store"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import storePreview from '@/components/store-preview.cmp.vue';
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
    storePreview
  }
}
</script>