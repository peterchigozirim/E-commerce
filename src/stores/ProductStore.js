import { defineStore } from "pinia";
import axios from 'axios'


export const productStore = defineStore('productStore', {
    state: ()=>{
        return{
            productList: null,
            categories: null,
            productData: null,
            loader: false
        }
    },
    actions:{
        fetchProdct(){
            try{
                fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    this.productList = json
                    
                })
            }
            catch(err){
                console.log(err);
            }
        },
        getProductById(id){
            this.loader = true
            try{
                fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(json=>{
                    this.productData = json,
                    this.loader = false
                    this.router.push( { name: 'singleProduct', params:{id}})
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