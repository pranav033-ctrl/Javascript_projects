var color = RandomArray(6);

var choose   =  random();


var square   =  document.querySelectorAll(".squares");
var result   =  document.querySelector("#result");
var heading  =  document.querySelector("#heading");
var news     =  document.querySelector("#new-colors");
var easy     =  document.querySelector("#easy");
var hard     =  document.querySelector("#hard");
var clrSel  =   document.querySelector("#colorchoosen");
    clrSel.textContent = choose;
// for easy button

easy.addEventListener("click",function(){
    LoadEasyTiles();
})


hard.addEventListener("click",function(){
	LoadHardTiles();
})

news.addEventListener("click",function(){
    if(hard.classList.contains("switch")){
        LoadHardTiles();
    }
    else{
        LoadEasyTiles();
    }
    
})


for(var i=0;i<square.length;i++)
  {
    square[i].style.backgroundColor=color[i];
    square[i].addEventListener("click",function(){
       //alert(this.style.backgroundColor);
       //alert(choose);
       console.log(choose);
    console.log(this.style.backgroundColor);
       if(this.style.backgroundColor==choose)
       {
       	//alert("Correct");
       	result.textContent="Correct!!!!";
       	change(choose);
        heading.style.backgroundColor=choose;
        news.textContent="Try Again";
       }

       else{

       // Instead of putting alert we will just fade it out	alert("Wrong");
       this.style.backgroundColor="#232323";
       result.textContent="Wrong";

       }
    })

  }         
  
  function change(color)
  {
  	for(var i=0;i<square.length;i++)
  	{
  		square[i].style.backgroundColor=color;
  	}
  }

function random(){
    var rand = Math.floor(Math.random()*color.length);
    return color[rand];
}

function RandomArray(num){
    var arr = [];
    for(var i =0;i<num;i++){
        arr.push(RandomColorGenerator());
    }
    return arr;
}

function RandomColorGenerator(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

function LoadHardTiles(){
    heading.style.backgroundColor="steelblue";
	result.textContent="Bokara";
	easy.classList.remove("switch");
  	hard.classList.add("switch");
  	hard.style.color="white";
  	easy.style.color="steelblue";
	color=RandomArray(6);
	choose=random();
	clrSel.textContent=choose;
    heading.style.backgroundColor=choose;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=color[i];
	}
}

function LoadEasyTiles(){
    heading.style.backgroundColor = "steelblue";
    result.textContent = "Fukato";
    hard.classList.remove("switch");
    easy.classList.add("switch");
    easy.style.color = "white";
    hard.style.color = "pink";

    var color = RandomArray(3);
    var choose   =  random();
    clrSel.textContent = choose;
    heading.style.backgroundColor=choose;
    for(var i = 0; i < color.length; i++){
        square[i].style.backgroundColor = color[i];
    }
    
    for(var i = color.length; i<square.length;i++){
        square[i].style.backgroundColor = "#232323";
    }
}