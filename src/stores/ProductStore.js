import { defineStore } from "pinia";
import axios from 'axios'


export const productStore = defineStore('productStore', {
    state: ()=>({
        productList: null,
        categories: null,
        productData: {},
        loader: false
    }),
    getters:{
        // getProductData:(state) => {return state.productData}
    },
    actions:{
        async fetchProdct(){
            try{
               await fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    this.productList = json
                    
                })
            }
            catch(err){
                console.log(err);
            }
        },
        async getProductById(id){
            this.loader = true
            try{
                await fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(json=>{
                    this.productData = json,
                    this.loader = false
                    console.log(json);
                    this.router.push( { name: 'singleProduct'})
                    console.log();
                })
            }
            catch(err){
                console.log(err);
            }
        },
        fetchCat(){
            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
        }
    }
})