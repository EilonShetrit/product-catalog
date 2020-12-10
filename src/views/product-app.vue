<template>
  <div class="product-app">
    <product-list />
  </div>
</template>

<script>
import productList from '@/components/product-list.cmp.vue'
export default {
  name: 'productApp',
  components:{
    productList
  }
}
</script>