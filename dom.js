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
    
    const createelement = document.createElement("p");

    const myText= createelement.innerText = ` You have Completed  ${ "Fix Mobile Button Issue"} at ${dates.toLocaleTimeString()} 
    `
    document.getElementById("tagAdd").innerText = myText;

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
    
    const createelement = document.createElement("p");

    const myText= createelement.innerText = ` You have Completed  ${ "Add Pay Success Modal"} at ${dates.toLocaleTimeString()} 
    `
    document.getElementById("tagAdd").innerText = myText;
    
    
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
    
    const createelement = document.createElement("p");

    const myText= createelement.innerText = ` You have Completed  ${ "Add New Reaction"} at ${dates.toLocaleTimeString()} 
    `
    document.getElementById("tagAdd").innerText = myText;
    
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
    
    const createelement = document.createElement("p");

    const myText= createelement.innerText = ` You have Completed  ${ "Fix Video Loading Issue"} at ${dates.toLocaleTimeString()} 
    `
    document.getElementById("tagAdd").innerText = myText;
    
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
    
    const createelement = document.createElement("p");

    const myText= createelement.innerText = ` You have Completed  ${ "Integrate AI Search"} at ${dates.toLocaleTimeString()} 
    `
    document.getElementById("tagAdd").innerText = myText;
    
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
    const createelement = document.createElement("p");

    const myText= createelement.innerText = ` You have Completed  ${ "Review Ami Probashi site"} at ${dates.toLocaleTimeString()} 
    `
    document.getElementById("tagAdd").innerText = myText;
    
    

    alert ("Board Updated Successfully")
})

const MyDate = new Date()
MyDate.createElement("p");

const date = document.getElementById("mydate").innerText = MyDate

