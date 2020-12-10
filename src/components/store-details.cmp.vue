

<template>
  <section>
      <div>
          <ul>
              <li v-for="product in store.Products" :key="product">
                  <h3>{{product.ProductTitle}}</h3>    
                  <p>{{product.PriceLabel}}</p> 
                  <button @click="buyProduct(product)">Buy this Product</button>
              </li>
          </ul>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        store(){
            return this.$store.getters.getStore;
        }
    },
    methods:{
        buyProduct(product){
            this.$store.dispatch({
                type:'getCurrProduct',
                product
            })
            this.$router.push(`/product/${product.ProductId}`)
        }
    },
    created(){

    }
}
</script>

<style>

</style>