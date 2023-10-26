const button= document.querySelectorAll('.button')
const body = document.querySelector('body')
console.log(button);

button.forEach(function(btn){
    btn.addEventListener('click', function(elm){
        console.log(elm.target)
    
        switch(elm.target.id){
            case 'red': body.style.backgroundColor='red';
            break;
            case 'pink': body.style.backgroundColor='pink';
            break;
            case 'skyblue': body.style.backgroundColor='skyblue';
            break;
            case 'purple': body.style.backgroundColor='purple';
            break;
            case 'green': body.style.backgroundColor='green';
            break;
            default:{
                body.style.backgroundColor='#212121'
            }
        }
    })
})