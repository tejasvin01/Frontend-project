var randomnumber1= Math.floor(Math.random() * 6) + 1;
var dicenumber= "dice" + randomnumber1 + ".png";
var imagedice= "images/"+ dicenumber;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagedice);
 
// second dice
var randomnumber2=Math.floor(Math.random() * 6) + 1;
var dicenumber2="dice" + randomnumber2 +".png";
var imagedice2="images/" + dicenumber2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagedice2);
//wins
if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="draw";
}

