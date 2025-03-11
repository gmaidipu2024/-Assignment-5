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
    const sum2 = changeValue2 + 1 ;
    document.getElementById("countTask2").innerText = sum2;
    
    const setDisable = document.getElementById("complete-task")
    setDisable.setAttribute("disabled", true);
    
    const dates = new Date();
    
    const createElement = document.createElement("p");

    createElement.innerText = ` You have Completed  ${ "Fix Mobile Button Issue"} at ${dates.toLocaleTimeString()} 
    `
    const myOutput = document.getElementById("tagAdd");

    createElement.style.margin= "10px";

    myOutput.appendChild(createElement);
    
    alert ("Board Updated Successfully")
})

document.getElementById("complete-task1").addEventListener("click", function(){

    const countTask = document.getElementById("countTask").innerText;
    let changeValue = parseInt(countTask);
    const sum = changeValue - 1 ;
    document.getElementById("countTask").innerText = sum;
   
    const countTask2 = document.getElementById("countTask2").innerText;
    let changeValue2 = parseInt(countTask2);
    const sum2 = changeValue2 + 1 ;
    document.getElementById("countTask2").innerText = sum2;
    
    const setDisable = document.getElementById("complete-task1")
    setDisable.setAttribute("disabled", true);
    
    const dates = new Date();
    
    const createElement = document.createElement("pdiv");

    createElement.innerText = ` You have Completed  ${ "Add Pay Success Modal"} at ${dates.toLocaleTimeString()} 
    `
    const myOutput = document.getElementById("tagAdd");

    createElement.style.margin= "10px";

    myOutput.appendChild(createElement);
    
    alert ("Board Updated Successfully")
})

document.getElementById("complete-task2").addEventListener("click", function(){

    const countTask = document.getElementById("countTask").innerText;
    let changeValue = parseInt(countTask);
    const sum = changeValue - 1 ;
    document.getElementById("countTask").innerText = sum;
   
    const countTask2 = document.getElementById("countTask2").innerText;
    let changeValue2 = parseInt(countTask2);
    const sum2 = changeValue2 + 1 ;
    document.getElementById("countTask2").innerText = sum2;
    
    const setDisable = document.getElementById("complete-task2")
    setDisable.setAttribute("disabled", true);
   
    const dates = new Date();
    
    const createElement = document.createElement("div");

    createElement.innerText = ` You have Completed  ${ "Add New Reaction"} at ${dates.toLocaleTimeString()} 
    `
    const myOutput = document.getElementById("tagAdd");

    createElement.style.margin= "8px";

    myOutput.appendChild(createElement);
    
    alert ("Board Updated Successfully")
})

document.getElementById("complete-task3").addEventListener("click", function(){

    const countTask = document.getElementById("countTask").innerText;
    let changeValue = parseInt(countTask);
    const sum = changeValue - 1 ;
    document.getElementById("countTask").innerText = sum;
   
    const countTask2 = document.getElementById("countTask2").innerText;
    let changeValue2 = parseInt(countTask2);
    const sum2 = changeValue2 + 1 ;
    document.getElementById("countTask2").innerText = sum2;
    
    const setDisable = document.getElementById("complete-task3")
    setDisable.setAttribute("disabled", true);
            
    const dates = new Date();
    
    const createElement = document.createElement("div");

    createElement.innerText = ` You have Completed  ${ "Fix Video Loading Issue"} at ${dates.toLocaleTimeString()} 
    `
    createElement.style.margin= "10px"

    const myOutput = document.getElementById("tagAdd");
    
    myOutput.appendChild(createElement);
    
    alert ("Board Updated Successfully")
})

document.getElementById("complete-task4").addEventListener("click", function(){

    const countTask = document.getElementById("countTask").innerText;
    let changeValue = parseInt(countTask);
    const sum = changeValue - 1 ;
    document.getElementById("countTask").innerText = sum;
   
    const countTask2 = document.getElementById("countTask2").innerText;
    let changeValue2 = parseInt(countTask2);
    const sum2 = changeValue2 + 1 ;
    document.getElementById("countTask2").innerText = sum2;
    
    const setDisable = document.getElementById("complete-task4")
    setDisable.setAttribute("disabled", true);
        
    const dates = new Date();
    
    const createElement = document.createElement("div");

    createElement.innerText = ` You have Completed  ${ "Add Pay Success Modal"} at ${dates.toLocaleTimeString()} 
    `
    const myOutput = document.getElementById("tagAdd");

     createElement.style.margin= "10px";

    myOutput.appendChild(createElement);
    
    alert ("Board Updated Successfully")
})

document.getElementById("complete-task5").addEventListener("click", function(){

    const countTask = document.getElementById("countTask").innerText;
    let changeValue = parseInt(countTask);
    const sum = changeValue - 1 ;
    document.getElementById("countTask").innerText = sum;
   
    const countTask2 = document.getElementById("countTask2").innerText;
    let changeValue2 = parseInt(countTask2);
    const sum2 = changeValue2 + 1 ;
    document.getElementById("countTask2").innerText = sum2;
    
    const setDisable = document.getElementById("complete-task5")
    setDisable.setAttribute("disabled", true);

    
    const dates = new Date();
    
    const createElement = document.createElement("div");

    createElement.innerText = ` You have Completed  ${ "Add New Reaction"} at ${dates.toLocaleTimeString()} 
    `
    const myOutput = document.getElementById("tagAdd");

    createElement.style.margin= "10px";

    myOutput.appendChild(createElement);
    
    alert ("Board Updated Successfully")
    
    alert("Congrates!!! You Have Complete all the current task ")
   
})



    let myTime = document.getElementById("mytime");

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    const time = new Date();
    const date =time.getDate();
    const day = weekday[time.getDay()];
    const mont = month[time.getMonth()];
    const year = time.getFullYear();
    myTime.innerHTML = `${day}, ${mont} ${date}, ${year}`;
    







