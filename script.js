let question = document.querySelectorAll(".direction1");
question.forEach(element=>{
    element.addEventListener("click",function(){
        element.nextElementSibling.classList.toggle("activated")
        if(element.nextElementSibling.classList.contains("activated")){
            element.children[1].innerHTML="&#11165;"
        }
        else{
            element.children[1].innerHTML="&#11167;"
        }
    })
})