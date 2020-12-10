<template>
  <section>
      <div>
          <h3>{{store.StoreName}}</h3>
          <img :src="store.StoreLogo" alt="">
      </div>
  </section>
</template>

<script>
import productPreview from '@/components/product-preview.cmp.vue';
export default {
props:{
    store:Object
}
}
</script>

<style>

</style>