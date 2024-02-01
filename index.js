import { creatRow } from "./function.js";


const wrapper  = document.getElementById('wrapper');
const button = document.getElementById('button');
const name = document.getElementById('name');
const price = document.getElementById('price');
const description = document.getElementById('description');
const form = document.getElementById('form');





document.addEventListener('DOMContentLoaded', function(){
    fetch("https://auth-rg-69.onrender.com/apple/products/all", {
        method: "GET"
    })
    .then( (res) => res.json{
     .then(data =>{
        if(data.length){
            data.forEach((phone, index) => {
            let card = creatRow(phone);
            wrapper.innerHTML += card;
            })
        }
 
     })
    })
    .catch( (reserr) => {
      console.log(err);
    });

    

});

function validata (name, price){
    if(!name.value){
        alert("Nom kiritilishi shart");
        name.focus();
        return false;
    }

    if(!price.value){
        alert("Nom kiritilishi shart");
        name.focus();
        return false;
    }

    if(price.value <= 0){
        alert("Nom kiritilishi shart");
        name.focus();
        return false;
    }

    if(!name.value.trim().length < 3){
        alert("Nom kamida 3 ta belgidan ko'p bolishi shart");
        name.focus();
        return false;
    }
}


button && button.addEventListener('DOMContentLoaded', function(e){
e.preventDefault();
alert("btn")
})