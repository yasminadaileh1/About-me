'use strict';
var score = 0; 
function userName(){
var name = prompt("Hello whats your name?");
alert(" welcome " + name + " we are happy to have you here!");
} userName();
console.log(name);

function myage(age){
var age = prompt('How old I am ?');Number;
if (age == 23 ) {
    alert("Yesss! thats right..");
    score ++ ;
} else if (age !== 23) {
    alert('No wrong answer. I\'m 23');
}}
myage();

//console.log(age);

function fromWhere (){
var fromWhere = prompt('I\'m from jordan yes or no ?').toLocaleLowerCase();
if (fromWhere == 'yes' || fromWhere == 'y' ) {
    alert('correct answer');
    score++ ;
} else if (fromWhere == 'no' || fromWhere == 'n'  )  {
    alert('I\'m not from ' + fromWhere + '. I\'m from Karak');
}}
fromWhere();
//console.log(fromWhere);

function mymajor(){
var major = prompt('my major is accounting right?').toLocaleLowerCase();
if (major == 'yes' || major == 'y' ) {
    alert('you are doing great! ');
    score++ ;
} else if (major == 'no' || major == 'n' ) {
    alert(  'my major is Accounting');
}}
mymajor();
//console.log(major);

function myfeedback(){
var feedBack = prompt(' do you think that I\'m a good in coding or not').toLocaleLowerCase();
if (feedBack == 'yes' || feedBack == 'y' ) {
    alert('Thank you!');
    score ++ ; 
} else if (feedBack == 'no'|| feedBack == 'n') {
    alert(' I\'m good in coding !!');
}}
myfeedback();
//console.log(feedBack);

function myhope(){
var hope = prompt('Did you think I have any hope?').toLocaleLowerCase();
if (hope == 'yes' || hope == 'y') {
    alert('great I have a hope' );
    score ++ ;
} else if (hope == 'no' || hope == 'n') {
    alert('I have a hope!');
}}
myhope();

//console.log(hope);

function myFavNum(){
    var favNum = prompt('what\'s my fav number? (from 1 to 10) you have four atempt');
    favNum = Number(favNum);
    for ( var i = 0 ; i < 3; i++){
        if (favNum === 4){
            alert ('Wow you guess it');
            score++;
            break;
        } else if (favNum === 3 || favNum === 5){
            alert( 'wrong! try again! you are close.');
        } else if ( favNum > 5 || favNum < 3){
            alert( 'wrong! try again! you are far.');
        }  
    var favNum = prompt('what\'s my fav number? (from 1 to 10) you have four atempt');
    favNum = Number(favNum);

    if (i === 2){
        alert('sorry! your attempts finished');
        break;
    }
    }}
    myFavNum();
    
     function myFavFood(){  
    var favFood =['mansaf', 'burger', 'kabseh', 'mskhan'];
    
    for ( var f = 0 ; f < 6 ; f++){
        var myFav = prompt('what\'s my favorite food').toLocaleLowerCase();
        
        for (var k=0 ; k<favFood.length;k++){
           if (myFav===favFood[k]){
            alert ('Wow you guess it');
            score++;
           k=9;
        f=9;
        } else{ 
            alert( 'wrong! try again');

        }}
        }}
        myFavFood();
      
    
        
    alert(score +' out of 7');


    alert(" wish you have a good day " + name);
