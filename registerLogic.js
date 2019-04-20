function register() {
    
    var username  = document.getElementById("username").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    
    if( username == null || username == "" ){

        alert(" User name can not be  empty ！")

    }else if(  password1 == null || password1 == "" ){

        alert( "Password can not be  empty ！")

    }else if(  password2 == null || password2 == "" ){

        alert( "Again Password can not be  empty ! ")

    }else if(password1 != password2){

        alert("Twice input password is not equals")

    }else{

        localStorage.setItem("username", username);
        localStorage.setItem("password", password1);
        alert("Register Sucess")
        window.location.href='index.html';

    }
}
