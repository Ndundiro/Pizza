$(document).ready(function(){
    var theForm = document.forms["pizzainfo"];

var size_prices= new Array();
size_prices["None"]=0;
size_prices["large"]=1200;
size_prices["medium"]=900;
size_prices["small"]=600;

function sizePrice()
{
    var pizzaSizePrice=0;
    var theForm = document.forms["pizzainfo"];
     var selectedSize = theForm.elements["size"];
    pizzaSizePrice = size_prices[selectedSize.value];
    return pizzaSizePrice;
}
})


























// Delivery form inputs and alerts

$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.Thank you for chosing the pizzeria.");
        $(this).get(0).reset();
        event.preventDefault();
    });
});