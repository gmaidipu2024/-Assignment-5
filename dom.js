document.getElementById("discover").addEventListener("click", function(){

    window.location.href ="./discover.html"

});

document.getElementById("history-clear").addEventListener("click", function(){
    const hideHistory = document.getElementById("hide-Sction");
    if(hideHistory){
        document.getElementById("hide-Sction").style.display = "none"
    }
});

document.getElementById("complete-task").addEventListener("click", function(){

    const countTask = document.getElementById("countTask").innerText;
    let changeValue = parseInt(countTask);
    const sum = changeValue - 1 ;
    document.getElementById("countTask").innerText = sum;
   
    const countTask2 = document.getElementById("countTask2").innerText;
    let changeValue2 = parseInt(countTask2);
    const sum2 = changeValue2 - 1 ;
    document.getElementById("countTask2").innerText = sum2;
    
  
    
})