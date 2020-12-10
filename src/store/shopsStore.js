
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
        loadShops(context){
            var shops = productService.query();
            context.commit({type:'setShops',shops});
            return shops
        }
    }
}