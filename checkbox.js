function check(){
var checkBox= document.getElementById("checkbox");

if(checkBox.checked == true){
var genderValue;
  var gender= document.getElementsByName("gender");
    gender.forEach(element => {
        if(element.checked)
        genderValue=element.value;

    });

  var obj={

    "fname":document.getElementById("firstName").value,
    "lname":document.getElementById("lastName").value,
    "nname":document.getElementById("nickName").value,
    "email":document.getElementById("email").value,
    "password":document.getElementById("password").value,
    "dob":document.getElementById("dateOfBirth").value,
     "gender":genderValue,
     "mob":document.getElementById("mobile").value,
     "address":document.getElementById("address").value


  }
    
     localStorage.setItem("task",JSON.stringify(obj));  
       
  }
  

}

window.onload=function(){

    if(localStorage.length != 0){
        document.getElementById("checkbox").checked=true;

        var val= JSON.parse(localStorage.getItem("task"));
        document.getElementById("firstName").value=val.fname;
        document.getElementById("lastName").value=val.lname;
        document.getElementById("nickName").value=val.nname;
        document.getElementById("email").value=val.email;
        document.getElementById("password").value=val.password;
       
        var lgender=val.gender;

        document.getElementById(lgender).checked=true;
        document.getElementById("dateOfBirth").value=val.dob;
        document.getElementById("mobile").value=val.mob;
        document.getElementById("address").value=val.address;
        
        
   }

}


    
  