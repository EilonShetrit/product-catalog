
<template>
  
  <section>
      <div>
          <h4>{{product.ProductTitle}}</h4>
          <p>{{product.Description}}</p>
          <img :src="product.ProductImage" alt="">
          <p>{{product.ProductPrice}}</p>
          <a :href="product.ProductLink">{{product.ProductLink}}</a>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        product:Object
    }
}
</script>

<style>

</style>