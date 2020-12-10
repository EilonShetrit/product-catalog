<template>
  <section>
      <div>
          <h3>{{store.StoreName}}</h3>
          <img :src="store.StoreLogo" alt="">
          <button @click="goToStore(store)">Enter Store</button>

      </div>
  </section>
</template>

<script>
import productPreview from '@/components/product-preview.cmp.vue';
export default {
props:{
    store:Object
    },
    methods:{
        goToStore(store){
            console.log('STORE CLICKED',store.StoreId);
            this.$store.dispatch({
                type:'getCurrStore',
                store
            }),
            this.$router.push(`/details/${store.StoreId}`)
        }
    },
    components:{
        productPreview
    }
}
</script>

<style>

</style>