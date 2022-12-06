import { defineStore } from "pinia";
import { auth } from '@/config/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";

export const userStore = defineStore('userStore', {
    state: ()=>({
        user: null,
        loader: false
    }),
    getters:{
        getuser: (state) => {
            return state.user
        }
    },
    actions:{
        int(){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = user
                    if (user.emailVerified) {
                        this.router.go()
                    }else{
                        this.router.push({ name: 'verify'})
                    }
                } else {
                    this.user = null
                }
            });
        },
        registerUser(data){
            this.loader = true
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    this.user = userCredential.user;
                    this.loader = false
                    this.router.go
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    this.loader = false
                });
        },
        verifyUser(){
            this.loader = true
            sendEmailVerification(auth.currentUser)
            .then(() => {
               this.loader = false
            }).catch(error => this.loader = false)
        }
    }
})