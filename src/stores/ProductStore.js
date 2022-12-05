import { defineStore } from "pinia";
import axios from 'axios'


export const productStore = defineStore('productStore', {
    store: ()=>{
        return{
            prodctList: null
        }
    },
    actions:{
        fetchProdct(){
            try{
                // axios.get('https://fakestoreapi.com/')
                // .then(res=>res.json())

                fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                this.prodctList = json
            })
            }
            catch(err){
                console.log(err);
            }
        }
    }
})