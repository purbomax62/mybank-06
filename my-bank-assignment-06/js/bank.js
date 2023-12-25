document.getElementById('login-btn').addEventListener('click',function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if(email === 'purbo.gpu@gmail.com' && password === 'newtimer'){
        window.location.href = 'bank.html';
    }
    else{
        alert("Invalid email or password");
    }
})