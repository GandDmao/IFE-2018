var regionSelect = document.querySelector('#region-select');
var productSelect = document.querySelector('#product-select');
var tableWarpper = document.querySelector('#table-wrapper');
var product1 = document.querySelector('#product1');
var product2 = document.querySelector('#product2');
var product3 = document.querySelector('#product3');
var productall = document.querySelector('#productall');
var region1 = document.querySelector('#region1');
var region2 = document.querySelector('#region2');
var region3 = document.querySelector('#region3');
var regionall = document.querySelector('#regionall');


regionSelect.addEventListener("change",function(e){
    drawTable(getValue())
},false)

productSelect.addEventListener("change",function(e){
    drawTable(getValue())
},false)

productSelect.addEventListener("click",function(e){
    if(e.target.name==="productall"&&e.target.checked===true){
        product1.checked=true;
        product2.checked=true;
        product3.checked=true;
    }else if(e.target.name==="productall"&&e.target.checked===false){
        product1.checked=true;
        product2.checked=false;
        product3.checked=false;
    } else if(e.target.type==="checkbox"&&product1.checked===false&&product2.checked===false&&product3.checked===false){
        e.target.checked=true;
    } else if(e.target.type==="checkbox"&&e.target.checked===false){
        productall.checked=false;
    } else if((e.target.type==="checkbox"&&product1.checked===true&&product2.checked===true&&product3.checked===true)){
        productall.checked=true;
    }
},false)

regionSelect.addEventListener("click",function(e){
    if(e.target.name==="regionall"&&e.target.checked===true){
        region1.checked=true;
        region2.checked=true;
        region3.checked=true;
    }else if(e.target.name==="regionall"&&e.target.checked===false){
        region1.checked=true;
        region2.checked=false;
        region3.checked=false;
    } else if(e.target.type==="checkbox"&&region1.checked===false&&region2.checked===false&&region3.checked===false){
        e.target.checked=true;
    } else if(e.target.type==="checkbox"&&e.target.checked===false){
        regionall.checked=false;
    } else if((e.target.type==="checkbox"&&region1.checked===true&&region2.checked===true&&region3.checked===true)){
        regionall.checked=true;
    }
},false)

drawTable(getValue());