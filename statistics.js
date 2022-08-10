'use strict';
const allOrder=[];
const table=document.getElementById('foodTable');
const tr= document.createElement('tr')
table.appendChild(tr);
const th1 =document.createElement('th');
th1.textContent="ID";
tr.appendChild(th1);
const th2 =document.createElement('th');
th2.textContent="Name";
tr.appendChild(th2);
const th3 =document.createElement('th');
th3.textContent="Type";
tr.appendChild(th3);
const th4 =document.createElement('th');
th4.textContent="Price";
tr.appendChild(th4);

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

Order.prototype.render=function(){
    const trEl=document.createElement('tr');
    table.appendChild(trEl);
    const td1 =document.createElement('td');
    td1.textContent=this.foodId;
    trEl.appendChild(td1);
    const td2 =document.createElement('td');
    td2.textContent=this.foodName;
    trEl.appendChild(td2);
    const td3 =document.createElement('td');
    td3.textContent=this.type;
    trEl.appendChild(td3);
    const td4 =document.createElement('td');
    td4.textContent=this.price;
    trEl.appendChild(td4);

}


function getData() { 
    let retrievedData = localStorage.getItem("form");
    let arrayData = JSON.parse(retrievedData);
    console.log(arrayData)
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
          let foodId=Order.foodId;
            let newOrder= new Order(
            foodId,
            arrayData[i].foodName,
            arrayData[i].type,
            arrayData[i].price  
          );
            newOrder.uniqueID(id);
            // newOrder.render()
        }
        for (let i = 0; i < allOrder.length; i++) {
            allOrder[i].render()
            
        }
    }
  }

getData()
