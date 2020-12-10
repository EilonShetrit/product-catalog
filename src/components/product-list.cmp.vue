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
      gendre:'all',
    }
  },
  computed:{
    stores(){
      return this.$store.getters.getStores;
    },
    filterdStores(){
      if(this.gendre === 'all') return this.stores
      	var res = stores.filter((store) => {
          store.filter((product) => {
            // return product.gendre.toLowerCase() === this.gendre.toLowerCase();
            return if (product.price > this.min && product.price < this.max)
          });
				//console.log('item',item.genre)
			
			});
    }
  },
  created(){
  },
  components:{
    productPreview
  }
}
</script>