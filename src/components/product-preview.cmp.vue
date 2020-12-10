
<template>
  
  <section>
      <div class="product">
          <h4>{{product.ProductTitle}}</h4>
          <p>{{product.Description}}</p>
          <img :src="product.ProductImage" alt="">
          <p>{{product.PriceLabel}}</p>
          <a :href="product.ProductLink">{{product.ProductLink}}</a>
          <button>Buy Now</button>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        product:Object
    },
    computed:{
        product(){
            return this.$store.getters.getProduct;
        }
    }
}
</script>

<style>

</style>