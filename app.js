'use strict';
const allForm=[];
let id=0;
function Form(foodName,type,price){
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    allForm.push(this);
}

let form=document.getElementById('form');
form.addEventListener('submit',handleSubmit);
function handleSubmit(event){
    event.preventDefault(event);
    let foodName=event.target.name.value;
    let type=event.target.options.value;
    let price=event.target.price.value;
    const newOrder= new Form(foodName,type,price);
    saveData(allForm);
}

function saveData(order) {
  let stringObj = JSON.stringify(order);
  localStorage.setItem("form", stringObj);
}
