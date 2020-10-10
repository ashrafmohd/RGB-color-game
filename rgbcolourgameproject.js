
var numsquares=6;
var colours=generatecolours(numsquares);

var asi=document.querySelectorAll(".box");
var corrcol=randomans();
var colornu=document.getElementById("colornum");
colornu.textContent=corrcol;
var tryagain=document.getElementById("tryagain")
var line=document.getElementById("line");
var h1=document.querySelector("h1");
var easy=document.getElementById("easy");
var newcol=document.getElementById("newcol");
var hard=document.getElementById("hard");


for(var i=0;i<asi.length;i++)
{
asi[i].style.backgroundColor=colours[i];


asi[i].addEventListener("click",function()
{
    
    var pickedcol=this.style.backgroundColor;
    console.log(pickedcol);
    if(pickedcol===corrcol)
    {
        console.log("Correct")
        changecolor(pickedcol);
        tryagain.textContent="Correct"
       line.style.backgroundColor=pickedcol;
       h1.style.backgroundColor=pickedcol;
       newcol.textContent="Play Again";

    }
    else{
        console.log("Wrong")
        this.style.backgroundColor="#232323";
tryagain.textContent="Try again"
    }
   
   
})
}

newcol.addEventListener("click",function()
{
    tryagain.textContent="";
    colours=generatecolours(numsquares);
    corrcol=randomans();
    colornu.textContent=corrcol;
    for(var i=0;i<asi.length;i++)
{
asi[i].style.backgroundColor=colours[i];
}
line.style.backgroundColor="white";
h1.style.backgroundColor="rgb(0, 200, 200)";
this.textContent="New Colors"
});

easy.addEventListener("click",function()
{
    hard.classList.remove("selected");
    easy.classList.add("selected");
   numsquares=3;
    colours=generatecolours(numsquares);
    corrcol=randomans();
    colornu.textContent=corrcol;
    for(var i=0;i<asi.length;i++)
    {
        if(colours[i])
        {
            asi[i].style.backgroundColor=colours[i];
        }
        else
        {
            asi[i].style.display="none";
        }
    }
}
);

hard.addEventListener("click",function()
{
    easy.classList.remove("selected");
    hard.classList.add("selected");
   numsquares=6;
   tryagain.textContent="";
    colours=generatecolours(numsquares);
    corrcol=randomans();
    colornu.textContent=corrcol;
    for(var i=0;i<asi.length;i++)
    {
    asi[i].style.backgroundColor=colours[i];
    asi[i].style.display="block";
    }
    line.style.backgroundColor="white";
    h1.style.backgroundColor="rgb(0, 200, 200)";
    });
    





function changecolor(color)
{
    for(var i=0;i<asi.length;i++)
{
asi[i].style.backgroundColor=color;

}
}

function randomans()
{
    var randomm=Math.floor(Math.random() *colours.length);
    console.log(randomm)
    return colours[randomm];
}

  function randomcolor()
  {
      var r=Math.floor(Math.random() *256);
      var g=Math.floor(Math.random() *256);
      var b=Math.floor(Math.random() *256);
      return "rgb("+r+", "+g+", "+b+")";
    
  }
  
function generatecolours(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
    arr.push(randomcolor());
    
}
return arr;
}

