const arrObj = {
  
}
    
document.querySelector('#btnAdd').addEventListener('click', function addLine(itemName, itemCount) {
    var itemName = document.getElementById('inputName').value;
    var itemCount = document.getElementById('inputNumber').value;
    
    // console.log(itemName, itemCount);
    if (itemName == "" || itemCount == "") {
        alert('Please fill the required fields');
    } else {
        // for (let x in dataObj)        
        // dataObj.count`${i}`.product = itemCount;
        sHtml = ""
        var nameVar = itemName;
        var countVar = itemCount;
            
        //  console.log(nameVar); console.log(countVar);
        itemPush = { nameVar, countVar }
           
        arrObj.push(itemPush);
                
        // console.log(Object.keys(dataObj).length)
        for (var i = 0; i < arrObj.length; i++) {
            sHtml +=
                `<div class="line${i} line-item">
                    <span>${arrObj[i].nameVar}</span> 
                    <span>${arrObj[i].countVar}</span>
                    <button class="btn-cart" id="btnCart" onclick="addCart('${i}')">+</button>
                    </div>`

            console.log(arrObj);

            document.getElementById('divTable').innerHTML = sHtml;

        };
            
    };
});


// const addCart = (index) => {
//     origHtml = "";
//     cartHtml = "";

//     var added = 
// }

