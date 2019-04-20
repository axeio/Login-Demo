function login() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username != "aa" || password != "123456"){

        window.location.href='fail.html';

    }else{

        window.location.href='sucess.html';

    }
}
