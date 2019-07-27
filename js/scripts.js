// submition of delivery Form

$(document).ready(function(){

    function myFunction() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("number").value.indexOf("@");
        var location = document.getElementById("location").value;
      
        



    function deliverPizza(){

var name = document.getElementById("name").nodeValue;
var email = document.getElementById("number").value;
var location = document.getElementById("location").value;

if(name!=="" && email!=="" && location!==""){
    alert("Your order has been successfuly received and will be delivered to " + location + "within one hour.Thank you for chosing the pizzeria.")
}
}










$("submit#deliverysubmit").click(function(){
    alert("Your order has been successfuly received and will be delivered to " + #location + "within one hour.Thank you for chosing the pizzeria.")
});


})