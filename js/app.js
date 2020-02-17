'use strict';

var name= prompt("Hello whats your name?");
alert (" welcome " + name + " we are happy to have you here!");
console.log(name);

var age= prompt ("are you above 18?").toLocaleLowerCase();
if (age=="yes"){
    alert ("hello adult");
}else if (age=="no"){
    alert ("you need your parents conformation");
}
console.log(age);


var address= prompt("are you living in Amman?").toLocaleLowerCase();
if (address=="yes"){
    alert("the delivery is avilable");
}else if (address=="no"){
    alert ("sorry! our delivery just for amman avilable");
}
console.log(address);

var order= prompt("are you want to deliver your order?").toLocaleLowerCase();
if (order=="yes"){
    alert("sure! we will deliver your order as soon as we can");
}else if (order=="no"){
    alert ("you can visit our store in Amman/jubaiha");
}
console.log(order);

var feedBack= prompt("are you happy from our services?").toLocaleLowerCase();
if (feedBack=="yes"){
    alert("Thank you!");
}else if (feedBack=="no"){
    alert ("If there is any problem till us please");
}
console.log(feedBack);

var userOpinion= prompt("would you like to give us any suggtions?").toLocaleLowerCase();
if (userOpinion=="yes"){
    alert("Thank you! we will take your suggtions seriously");
}else if (userOpinion=="no"){
    alert ("Thank you!");
}
console.log(userOpinion);

alert(" wish you have a good day " + name)
