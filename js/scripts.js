$(document).ready(function(){
    var theForm = document.forms["pizzainfo"];

var size_prices= new Array();
size_prices["None"]=0;
size_prices["large"]=1000;
size_prices["medium"]=800;
size_prices["small"]=600;

function getSizePrice()
{
    var pizzaSizePrice=0;
    var theForm = document.forms["pizzaform"];
     var selectedSize = theForm.elements["size"];
    pizzaSizePrice = size_prices[selectedSize.value];
    return pizzaSizePrice;
}



})


























// submition of delivery Form

$(document).ready(function(){  
    function deliverPizza(){
var name = document.getElementById("name").value;
var email = document.getElementById("number").value;
var location = document.getElementById("location").value;

if(name!=="" && email!=="" && location!==""){
    alert("Your order has been successfuly received and will be delivered to " + location + "within one hour.Thank you for chosing the pizzeria.")

}
}

})