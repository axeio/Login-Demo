function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var localUserName = localStorage.getItem("username")
    var localPassword = localStorage.getItem("password")

    if(username != localUserName || password != localPassword){

        window.location.href='fail.html';

    }else{

        window.location.href='sucess.html';

    }
}
