var a = document.querySelector("#bulb")


var onFlag = false;
var b = document.querySelector(".button1")
b.addEventListener("click", function(){
    if(onFlag){
        alert("Bulb is already Glowing!")
    }else{
        onFlag = true;
        a.style.backgroundColor="yellow"
    }
    
    
})
var c = document.querySelector(".button2")
c.addEventListener("click", function(){
    onFlag = false;
    a.style.backgroundColor="lightgray"
    
})
