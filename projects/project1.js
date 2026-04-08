
const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
button.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.id === "blue"){
            body.style.backgroundColor= "rgb(131, 209, 233)"
        }
         if(event.target.id === "grey"){
            body.style.backgroundColor= event.target.id
        }
         if(event.target.id === "yellow"){
            body.style.backgroundColor= event.target.id
        }
         if(event.target.id === "pink"){
            body.style.backgroundColor= event.target.id
        }
    });
});
