function myFunction(){
var checkBox= document.getElementById("checkbox");

if(checkBox.checked == true){
    localStorage.setItem("fname",document.getElementById("firstName").value);
    localStorage.setItem("lname",document.getElementById("lastName").value);
    localStorage.setItem("nname",document.getElementById("nickName").value);
    localStorage.setItem("email",document.getElementById("email").value);
    localStorage.setItem("password",document.getElementById("password").value);
    localStorage.setItem("dob",document.getElementById("dateOfBirth").value);

    var gender= document.getElementsByName("gender");
    gender.forEach(element => {
        if(element.checked)
        localStorage.setItem("gender",element.value);

    });
    localStorage.setItem("mob",document.getElementById("mobile").value);
    localStorage.setItem("address",document.getElementById("address").value);
       
       
  }
  else{
    window.localStorage.clear();
  }

}

window.onload=function(){

    if(localStorage.length != 0){
        document.getElementById("checkbox").checked=true;
        document.getElementById("firstName").value=localStorage.getItem("fname");
        document.getElementById("lastName").value=localStorage.getItem("lname");
        document.getElementById("nickName").value=localStorage.getItem("nname");
        document.getElementById("email").value=localStorage.getItem("email");
        document.getElementById("password").value=localStorage.getItem("password");
       
        var lgender=localStorage.getItem("gender");
        document.getElementById(lgender).checked=true;
        document.getElementById("dateOfBirth").value=localStorage.getItem("dob");
        document.getElementById("mobile").value=localStorage.getItem("mob");
        document.getElementById("address").value=localStorage.getItem("address");
        
   }

}


    
  