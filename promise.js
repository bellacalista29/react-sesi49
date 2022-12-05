// let myPromise = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         let isProcessSuccess = true
//         if(isProcessSuccess) {
//             resolve(">> Success")
//         } 
//         else {
//             reject("!!Error")
//         }
//     }, 2000)
// })

// myPromise.then(response => { console.log(response)}).catch(error=>{console.error(error)})

// let myPromise = new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(response => response.json()).then(data => {
//         resolve(data)
//     }).catch(error => reject(error))
// })

// myPromise.then(response => { console.log(response)}).catch(error=>{console.error(error)})

// fetch("https://jsonplaceholder.typicode.com/comments")
//         .then(response => response.json()).then(data => console.log(data))

import axios from "axios"

axios("https://jsonplaceholder.typicode.com/comments")
.then(data => console.log(data))