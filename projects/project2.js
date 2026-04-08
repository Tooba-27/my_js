const form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const resultguide = document.querySelector('#result2')
    if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML= "please add a valid height "
    }else if(weight === '' || weight < 0 || isNaN(weight)){
       result.innerHTML= "please add a valid Weight "
    }else{
       const bmi = (weight/((height*height)/10000)).toFixed(2)
       result.innerHTML = bmi
       if(bmi<18.6){
        resultguide.innerHTML="you are under weight"
       }else if(bmi>=18.86 && bmi<=24.9){
         resultguide.innerHTML="you have Normal Weight"
       }else{
         resultguide.innerHTML="you are over weight"
       }
    }
    
});