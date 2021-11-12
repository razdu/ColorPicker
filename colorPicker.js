let redV = document.querySelector('.red');
let greenV = document.querySelector('.green');
let blueV = document.querySelector('.blue');

//let box1 = document.querySelector('.colorBox1');
//let box2 = document.querySelector('.colorBox2');
let cValues = [redV, greenV, blueV]
let boxes = document.querySelectorAll('.colorBox');

let btn = document.querySelectorAll('.btn');
//console.log(btn);

//  btn[0].addEventListener('click',()=>{
//     console.log(redV.value);
//     box1.style.backgroundColor = `rgb(${redV.value},${greenV.value} ,${blueV.value})`;
// });
// btn[1].addEventListener('click',()=>{
//     console.log(redV.value);
//     box1.style.backgroundColor = `rgb(${redV.value},${greenV.value} ,${blueV.value})`;
// }); 

let colorInputs = document.querySelectorAll('[type="range"]')
let valuesOfColors = document.querySelectorAll('.max-num')
//console.log(inpts);
colorInputs.forEach((cInput, indx) => {
    cInput.addEventListener('input', () => {
        valuesOfColors[indx].innerHTML = cInput.value
    })
})

function toHex(dec = 129) {
    let num = parseInt(dec);
    return num.toString(16).toUpperCase()
}

btn.forEach((btnn, indx) => {
    //console.log(x);
    btnn.addEventListener('click', () => {
        // console.log(redV.value); 
        boxes[indx].style.backgroundColor = `rgb(${redV.value},${greenV.value},${blueV.value})`;
        boxes[indx].innerHTML = `rgb(${redV.value},${greenV.value},${blueV.value})<br>`;
        boxes[indx].innerText += "#" + toHex(redV.value) + toHex(greenV.value) + toHex(blueV.value);
    });
});

let objOfColors = {};
let btnSave = document.querySelector('#save');
let nickName = document.querySelector('#nick-name');
let myFavColors = document.querySelector('.FavColors');
let ls = window.localStorage

btnSave.addEventListener('click', () => {
    let obj = {}
    obj["nickName"] = nickName.value;
    obj["rgbColor"] = `rgb(${redV.value},${greenV.value},${blueV.value})`;
    obj["hexColor"] = `#${toHex(redV.value)}${toHex(greenV.value)}${toHex(blueV.value)}`;
    //console.log(obj);
    objOfColors[obj.nickName] = obj;
    console.log("obj:", objOfColors);
    ls.setItem(objOfColors.nickName , objOfColors)
})
console.log("ls: ",ls.getItem())
let myFav = ls.getItem("FavColorsObj")
console.log(typeof(myFav));
//myFavColors.innerHTML += `<li>${myFav}</li>`

myFav.forEach((color,indx)=> {
    console.log(color);
    color.forEach(col =>{
        console.log(col);
    })
})


/* for (let elem in myFav) {
    console.log(elem);    
    myFavColors.innerHTML += `<li>${color["nickName"]}</li>`
} */




/*
btnSave.addEventListener('click',()=>{
// function saveColor(_r,_g,_b){
//     r=this._r;
//     g=this._g;
//     b=this._b;
// }
// let obj = new saveColor(redV.value,greenV.value,blueV.value);
let obj = {};
obj[nickName.value]=`rgb(${redV.value},${greenV.value},${blueV.value})`;
arrayOfColors.push(obj)

console.log(arrayOfColors);
}); 
*/