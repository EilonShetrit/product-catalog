<template>
  <div class="product-list">
    <product-filter />
    <ul v-if="stores">
      <li v-for="store in stores" :key="store.StoreId">
          <storePreview :store="store"/>
      </li>
    </ul>
  </div>
</template>

<script>
import storePreview from '@/components/store-preview.cmp.vue';
import productFilter from '@/components/product-filter.cmp.vue';
export default {
  name: 'productApp',
  data(){
    return{
    }
  },
  computed:{
    stores(){
      return this.$store.getters.getStores;
    },
  },
  created(){
  },
  components:{
    storePreview,
    productFilter
  }
}
</script>