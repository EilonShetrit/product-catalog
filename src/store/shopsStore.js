
import {productService } from '@/services/productService.js';

export default{
    state:{
        shops:null,
    },
    getters:{
        getShops(state){
            return state.shops
        }
    },
    mutations:{
        setShops(state,payload){
            state.shops = payload.shops;
        }
    },
    actions:{
        async loadShops(context){
            var shops = await productService.query();
            console.log('shops',shops)
            context.commit({type:'setShops',shops});
            return shops
        }
    }
}