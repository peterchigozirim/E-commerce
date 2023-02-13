import { defineStore } from "pinia";
import { auth } from '@/config/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";

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
                    if (!user.emailVerified) {
                        this.router.push({ name: 'verify'})
                    }
                } else {
                    this.user = null
                }
            });
        },
        async registerUser (data){
            this.loader = true
            await createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    this.user = userCredential.user;
                    this.loader = false
                    this.router.go()
                    userCredential.user.sendEmailVerification()
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    this.loader = false
                });
        },
        verifyUser(){
            this.loader = true
            sendEmailVerification(auth.currentUser)
            .then((res) => {
                console.log(res);
               this.loader = false
            }).catch(error => {
                this.loader = false
                console.log(error);
            })
        },
        loginUser(data){
            signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                this.user = userCredential.user;
                this.router.push({name: 'home'})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        },
        logoutUser(){
            this.loader = true
            signOut(auth).then(() => {
                this.user = null
                this.loader = false
            }).catch((error) => {
                console.log(error)
            });
        }
    }
})