<template>
  <div class="product-list">
    <ul v-if="stores">
      <li v-for="store in stores" :key="store.StoreId">
          <storePreview :store="store"/>
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
             if (product.price > this.min && product.price < this.max){
                return product
            }
          });
				//console.log('item',item.genre)
			
			});
    }
  },
  created(){
  },
  components:{
    storePreview
  }
}
</script>