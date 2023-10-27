const form = document.querySelector('form');

form.addEventListener('submit', function(elm){
    elm.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result')
    const note = document.querySelector('#note');

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`Please inter a valid height ${height}` 
    }else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please inter a valid weight ${weight}` 
    }else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`Your BMI value is ${BMI}`

        if(BMI <= 18.5){
            note.innerHTML= `you are under weight`
            note.style.color = 'red';
        }else if(BMI >= 25){
            note.innerHTML=`you are over weight`
            note.style.color = 'red';
        }else{
            note.innerHTML=`your weight is normal`
            note.style.color = 'green';
        }
    }
})