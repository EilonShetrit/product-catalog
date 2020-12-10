

const baseUrl = 'http://localhost:3000/shops'
import axios from 'axios';



export const productService = {
    query
}

async function query(){
    const res =  await axios.get(baseUrl);
    return res.data[0].Stores;
}
