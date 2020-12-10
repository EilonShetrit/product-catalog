<template>
  <div class="product-filter">
  <el-select v-model="price" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>

export default {
  name: 'productFilter',
  data() {
    return {
      price: 'All',
      options:[{value:'up to 25'},{value:'25 to 50'},{value:'50 to 75'},{value:'75 to 100'},{value:'100+'},{value:'All'}]
    }
  },
  computed: {
    filterdProducts() {
      if (this.price === 'All') return this.stores
      var res = stores.filter((store) => {
        store.filter((product) => {
          switch(this.price){
            case 'up to 25':
              return this.product.price < 25; 
            case '25 to 50':
              return this.product.price > 25 && this.product.price < 50; 
            case '50 to 75':
              return this.product.price > 50 && this.product.price < 75; 
            case '75 to 100':
              return this.product.price > 75 && this.product.price < 100; 
            case '100+':
              return this.product.price > 100; 
            case 'All':
              return this.stores  
          }
        });

      });
    }
  }
}
</script>