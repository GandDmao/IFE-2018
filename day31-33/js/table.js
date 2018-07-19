//获取被选中的地区和产品
function getValue(){
    var values = {};
    values.product=[];
    values.region=[];
    var checkboxes1 = document.querySelectorAll('#product-select input');
    var checkboxes2 = document.querySelectorAll('#region-select input');
    for (i=1; i<checkboxes1.length; i++) {
        if (checkboxes1[i].checked) {
            values.product.push(checkboxes1[i].value);
        }
    }
    for (i=1; i<checkboxes2.length; i++) {
        if (checkboxes2[i].checked) {
            values.region.push(checkboxes2[i].value) ;
        }
    } console.log(values);
    return values;
}



//绘制表格
function drawTable(data) {
    var thead = "<thead><tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr></thead>";
    var tbody = "<tbody>";
    for(var i in sourceData) {
        for(var j=0; j<data.product.length; j++){
            for(var k=0; k<data.region.length; k++){
                if(sourceData[i].product===data.product[j]&&sourceData[i].region===data.region[k]){
                    tbody += "<tr><td>"+sourceData[i].product+"</td><td>"+sourceData[i].region+"</td>";
                    for(j=0;j<12;j++){
                        tbody += "<td>" + sourceData[i].sale[j]+"</td>";
                    }
                }
            }
        }
    }
    tbody += "</tr></tbody>";
    tableWarpper.innerHTML = "<table>" + thead + tbody + "</table>";
    changeCol();
    mergeCells();
}


//合并第一列相同单元格
function mergeCells() {
    var table = document.querySelector("table");
    var flag = 1;
    var p;
    for(var i=1;i<table.rows.length-1;i++){
        if (table.rows[i].cells[0].innerHTML === table.rows[i + 1].cells[0].innerHTML&&flag){
            flag = 0;
            p = i;
            table.rows[i + 1].cells[0].style.display = "none";
            table.rows[p].cells[0].rowSpan +=  1;
        }else if(table.rows[i].cells[0].innerHTML === table.rows[i + 1].cells[0].innerHTML&&!flag){
            table.rows[i + 1].cells[0].style.display = "none";
            table.rows[p].cells[0].rowSpan +=  1;
        }else if(table.rows[i].cells[0].innerHTML !== table.rows[i + 1].cells[0].innerHTML){
            flag = 1;
        }
    }
}
// 地区选择了一个，商品选择了多于1个的时候.第一列二列交换.
function changeCol(){
    var checkArr = getValue();
    debugger
    var table = document.querySelector("table");
    if(checkArr.region.length===1 && checkArr.product.length>1){
        for (var i = 0; i < table.rows.length; i++) {
            var temp = table.rows[i].cells[0].innerHTML;
            table.rows[i].cells[0].innerHTML = table.rows[i].cells[1].innerHTML;
            table.rows[i].cells[1].innerHTML = temp;
        }
    }
}