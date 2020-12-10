
import {productService } from '@/services/productService.js';

export default{
    state:{
        stores:null,
        currStore:null
    },
    getters:{
        getStores(state){
            return state.stores
        },
        getStore(state){
            return state.currStore
        }
    },
    mutations:{
        setStores(state,payload){
            state.stores = payload.stores;
        },
        setCurrStore(state,payload){
            state.currStore = payload.store
        }
    },
    actions:{
        async loadStores(context){
            var stores = await productService.query();
            console.log('stores',stores)
            context.commit({type:'setStores',stores});
            return stores
        },
        getCurrStore(context,payload){
            console.log(payload.store);
            context.commit({type:'setCurrStore',store:payload.store})
        }
    }
}