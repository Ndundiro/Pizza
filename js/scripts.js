// $(document).ready(function(){
// $("#pizzainfo").submit(function(){
 
//     var size = $("select#size").val();
//     var  topping = $("select#crust").val();
//     var crust = $("select#toppings").val();

//         $(this).get(0).reset();
//         event.preventDefault();
  
// })
// })
// Another trial on delivery

function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("numberofpizza");
    return parseInt(selectedNumber);
}
function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
}

function sausages() {
    var sausage = 0;
    var addsausage = document.getElementById("toppingone");
    if (addsausage.checked === true) {
        sausage = 140;
    }
    return parseInt(sausage);
}
function onions() {
    var onion = 0;
    var addonions = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        onion = 130;
    }
    return parseInt(onion);
}
function tikkaSaucee() {
    var tikkaSauce = 0;
    var addtikkaSauce = document.getElementById("toppingone");
    if (addtikkaSauce.checked === true) {
        tikkaSauce = 120;
    }
    return parseInt(tikkaSauce);
}
function mozarellaCheese() {
    var cheese = 0;
    var addmozarellaCheese = document.getElementById("toppingone");
    if (addmozarellaCheese.checked === true) {
        cheese = 110;
    }
    return parseInt(cheese);
}

function calctotalPrice() {
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());

    alert("Your order of pizzas has been processed."  )
}





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