let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML === '='){
          input.value = eval(input.value);
        }

        else if(e.target.innerHTML === 'AC'){
            input.value = '';
        }
        else if(e.target.innerHTML === 'DEL'){
          input.value = input.value.substring(0, input.value.length-1);        
        }
        else{
            input.value += e.target.innerHTML;
        }
        
    })
})