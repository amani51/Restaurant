'use strict';
let allOrder=[];

let id=0;
function Order(foodId,foodName,type,price){
    this.foodId=foodId;
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    allOrder.push(this);
}

Order.prototype.uniqueID=function (counter){
    const num=counter+1;
    const str = num.toString();
    const ans = str.padStart(4, '0');
    this.foodId=ans
    ++id
}

console.log("before ",allOrder)
let befor =localStorage.getItem("form");
let beforRefeshing=JSON.parse(befor);
console.log("beforerefehing",beforRefeshing)
if(beforRefeshing!=null){
  allOrder=beforRefeshing;
}else {
  allOrder=[];
}


console.log("after ",allOrder)
let form=document.getElementById('form');
form.addEventListener('submit',handleSubmit);
function handleSubmit(event){
    event.preventDefault(event);
    let foodName=event.target.name.value;
    let type=event.target.options.value;
    let price=event.target.price.value;
    const newForm= new Order(foodName,type,price);
    newForm.uniqueID(id)
    saveData(allOrder);
}
function saveData(order) {
  let stringObj = JSON.stringify(order);
  localStorage.setItem("form", stringObj);
}

