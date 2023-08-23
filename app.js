
import foodData from './food.json' assert {type:'json'}
  // console.log(foodData)
  const items = document.getElementById('items')
  const categoryItem = document.querySelector('.categoryItem');
  const calorieItem = document.querySelector('.calorieItem');
  const protienItems = document.getElementById('protienItems')
  const cabItems = document.getElementById('cabItems')

categoryItem.addEventListener('change',filterCategory)
calorieItem.addEventListener('change',filterCalorie);
protienItems.addEventListener('click',filterProtien);
cabItems.addEventListener('click',filterCab);

// filter based on category
function filterCategory() {
    const value = categoryItem.value;
  const data = foodData.filter((item)=>
       item.category === value
    )
 
    displayData(data)
    
}

// filter based on calorie
function filterCalorie() {
    const value = calorieItem.value;

        const data = foodData.filter((item)=>
        value === 'Above 100' ? item.calorie > 100 : item.calorie < 100
        )
        displayData(data)
   
}

// filter based on protien
function filterProtien() {
  const sortedProtien = foodData.sort((p1,p2)=>{
    return p2.protiens - p1.protiens
  })
  // console.log(sortedProtien)
  displayData(sortedProtien)
}

// filter based on cab
function filterCab() {
  const sortedCab = foodData.sort((p1,p2)=>{
    return p1.cab - p2.cab
  })
  displayData(sortedCab)
}


function displayData(data) {
  items.innerHTML = "";
  data.map((foodItem)=>{
    items.innerHTML += `<div id="singleItem">
    <span>Name:${foodItem.foodname}</span> 
    <span> Category: ${foodItem.category}</span>
    <span> Calorie: ${foodItem.calorie}</span>
    <span> Protiens: ${foodItem.protiens}</span>
    <span> Cab: ${foodItem.cab}</span>
    </div>
    `
  })
}

function displayAllData() {
  items.innerHTML = "";
  foodData.map((foodItem)=>{
    items.innerHTML += `<div id="singleItem">
    <span>Name:${foodItem.foodname}</span> 
    <span> Category: ${foodItem.category}</span>
    <span> Calorie: ${foodItem.calorie}</span>
    <span> Protiens: ${foodItem.protiens}</span>
    <span> Cab: ${foodItem.cab}</span>
    </div>
    `
  })
}

displayAllData();

