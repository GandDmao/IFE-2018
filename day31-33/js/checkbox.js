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
