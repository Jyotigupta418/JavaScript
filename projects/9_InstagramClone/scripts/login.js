document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('.activeimages img')
    let currentIndex = 0;

    function showimage(Index){
        for(let i=0; i<images.length; i++){
            images[i].style.display= 'none';
        }
        images[Index].style.display= 'block';
    };

    function nextimage(){
         currentIndex=(currentIndex+1)% images.length;
         showimage(currentIndex);
    };

    showimage(currentIndex)
    setInterval(nextimage, 3000);   

    // login validation
    var submitBtn = document.querySelector('#btn');
    var error = document.querySelector('.error');
    
    submitBtn.addEventListener('click', function () {
        var username = document.querySelector('input[type="text"]').value.trim();
        var password = document.querySelector('input[type="password"]').value.trim();

        if (username === '' || password === '') {
            error.textContent = 'Please enter username: admin and password: admin';
            error.style.display = 'block';
        }
        else if (username !== 'admin' || password !== 'admin') {
            error.textContent = 'Invalid username or password. Please try again.';
            error.style.display = 'block';
        }
        else {window.location.href = "./homepage.html";}

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    });
})
