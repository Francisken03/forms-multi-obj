const arrObj = [];
const arrCart = [];

    
document.querySelector('#btnAdd').addEventListener('click', function addLine(itemName, itemPrice) {
    var itemName = document.getElementById('inputName').value;
    var itemPrice = document.getElementById('inputNumber').value;
    
    // console.log(itemName, itemPrice);
    if (itemName == "" || itemPrice== "") {
        alert('Please fill the required fields');
    } else {
        // for (let x in dataObj)        
        // dataObj.count`${i}`.product = itemPrice;
       var sHtml = ""
       
            
        //  console.log(itemName); console.log(itemPrice);
        itemPush = { itemName, itemPrice }
           
        arrObj.push(itemPush);
                
        // console.log(Object.keys(dataObj).length)
        for (var i = 0; i < arrObj.length; i++) {
            sHtml +=
                `<div class="line${i} line-item">
                    <span>${arrObj[i].itemName}</span> 
                    <span>${arrObj[i].itemPrice}</span>
                    <button class="btn-cta btn-add-cart" onclick="addCart(${i})">+</button>
                    </div>`


        };
        document.getElementById('divTable').innerHTML = sHtml;
            
    };
});

const addCart = (index) => {
    var origHtml = "";
    var cartHtml = "";
    // nPrice = 0;

    // var removed = arrObj.splice(index, 1);
    // console.log(removed)


    arrCart.push(arrObj[index])
    // arrObj.splice(index, 1)
    
    
   
    for (var i = 0; i < arrCart.length; i++) {
        cartHtml +=
                `<div class="cart${i} line-item">
                <span>${arrCart[i].itemName}</span> 
                <span id="input-price${i}">${arrCart[i].itemPrice}</span>
                <input class="input-qty" type="number" id="input${i}" onkeyup="getQty(${i})">
                <button class="btn-cta btn-add-cart" onclick="remove('${i}')">-</button>
                </div>`
        
        // nPrice += parseInt(arrCart[i].itemPrice);
        compute(i)
        // getQty()
        // console.log(quantity)

    }
    
    // document.getElementById('spanTotal').innerHTML = nPrice;
    document.getElementById('divCart').innerHTML = cartHtml;

    for (var i = 0; i < arrObj.length; i++) {
        origHtml +=
                `<div class="item${i} line-item">
                <span>${arrObj[i].itemName}</span> 
                <span>${arrObj[i].itemPrice}</span>
                <button class="btn-cta btn-add-cart" onclick="addCart(${i})">+</button>
                </div>`
        
    }
  
    document.getElementById('divTable').innerHTML = origHtml;

}

const remove = (index) => {
    var origHtml = "";
    var cartHtml = "";
    // nPrice = 0;


    // arrObj.push(arrCart[index])
    arrCart.splice(index, 1)
   

    for (var i = 0; i < arrCart.length; i++) {
        cartHtml +=
            `<div class="line${i} line-item">
                <span>${arrCart[i].itemName}</span> 
                <span>${arrCart[i].itemPrice}</span>
                <input class="input-qty" type="number">
                <button class="btn-cta btn-add-cart" onclick="remove('${i}')">-</button>
                </div>`
        
        // nPrice += parseInt(arrCart[i].itemPrice);
        compute(i)
               
        
    }
    // document.getElementById('spanTotal').innerHTML = nPrice;
    document.getElementById('divCart').innerHTML = cartHtml;

    for (var i = 0; i < arrObj.length; i++) {
        origHtml +=
            `<div class="line${i} line-item">
                <span>${arrObj[i].itemName}</span> 
                <span>${arrObj[i].itemPrice}</span>
                <button class="btn-cta btn-add-cart" onclick="addCart(${i})">+</button>
                </div>`
        
    }
    document.getElementById('divTable').innerHTML = origHtml;
}
   
function compute(index) {
    var total = 0;
    for (j = 0; j < arrCart.length; j++) {
        total += parseInt(arrCart[j].itemPrice)
    }
    document.getElementById('spanTotal').innerHTML = total;
    };





function getQty(index) {
    // javascript: void (0); //not working so far
   
    var total = 0; // ito yung variable na sasalo ng total price after magrun ng loop
    var newPrice = 0;
    
  

        for (var j = 0; j < arrCart.length; j++) {
            
            var qty = parseInt(document.getElementById('input' + j).value)
            if (isNaN(qty)) {
                qty = 1;
              }
            
            newPrice = qty * parseInt(arrCart[j].itemPrice);
            
            console.log("This is qty " + parseInt(document.getElementById('input' + j).value))
            console.log("This is price " + parseInt(arrCart[j].itemPrice))
            console.log("This is newPrice " + newPrice)
            var divCont = document.getElementById('input-price' + j)
            divCont.innerHTML = newPrice;
            total += newPrice    
    }
    
        document.getElementById('spanTotal').innerHTML = total;   
}


    