var counter = 0;

document.getElementById("decrease").addEventListener("click", function() {
    counter = counter - 1;
    console.log(document.querySelector(".SubContainer1 h1")); 
    document.querySelector(".counter").textContent = counter; 
});


document.getElementById("reset").addEventListener("click", function(){
    counter = 0;
    document.getElementsByClassName("counter")[0].textContent = counter;
})


document.getElementById("increase").addEventListener("click",function(){
    counter = counter+1;
    document.querySelector(".counter").textContent = counter;
})