
import {productService } from '@/services/productService.js';

export default{
    state:{
        stores:null,
        currStore:null,
        currProduct:null
    },
    getters:{
        getStores(state){
            return state.stores
        },
        getStore(state){
            return state.currStore
        },
        getProduct(state){
            return state.currProduct
        }
    },
    mutations:{
        setStores(state,payload){
            state.stores = payload.stores;
        },
        setCurrStore(state,payload){
            state.currStore = payload.store
        },
        setCurrProduct(state,payload){
            state.currProduct = payload.product
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
        },
        getCurrProduct(contect,payload){
            console.log(payload.product);
            contect.commit({type:'setCurrProduct',product:payload.product})
        }
    }
}