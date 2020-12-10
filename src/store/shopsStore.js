
import {productService } from '@/services/productService.js';

export default{
    state:{
        stores:null,
    },
    getters:{
        getStores(state){
            return state.stores
        }
    },
    mutations:{
        setStores(state,payload){
            state.stores = payload.stores;
        }
    },
    actions:{
        async loadStores(context){
            var stores = await productService.query();
            console.log('stores',stores)
            context.commit({type:'setStores',stores});
            return stores
        }
    }
}