const form=document.querySelector('form')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML= `please enter valid height  ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML=`please enter valid weight ${weight} `
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<p>Your weight is <strong>${bmi}</strong></p>`
    
    if (bmi < 18.6) {
        results.innerHTML +=`<p>You are Underweight</p>`;
     }else if(bmi>=18.6 && bmi<=24.9){
         results.innerHTML += `<p>You are Normal Range</p>`;
     }else{
          results.innerHTML +=`<p>You are OverWeight</p>`;
     }

  
    } 
       
    })
   


