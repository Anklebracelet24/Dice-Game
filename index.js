var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImageDice = "dice"+ randomNumber1+".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomImageDice;  //images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2+".png";  //images/dice1.png-images/dice6.png

var image2= document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);




if(randomNumber1>randomNumber2){                                //If Player one win
  document.querySelector("h1").innerHTML ="🚩 Player 1 Win!";
}else if(randomNumber1<randomNumber2){                          //If Player two win
  document.querySelector("h1").innerHTML ="🚩 Player 2 Win!";
}else{                                                          //if Draw
  document.querySelector("h1").innerHTML ="Draw!";
}
