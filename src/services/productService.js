

const baseUrl = 'http://localhost:3000/shops'
import axios from 'axios';



export const productService = {
    query,
    // getStoreById
}

async function query(){
    const res =  await axios.get(baseUrl);
    return res.data[0].Stores;
}


async function getStoreById(storeId){
    return await axios.get(`${baseUrl}/${storeId}`);
}