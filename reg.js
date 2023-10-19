const form = document.getElementById("form");
const gender = document.getElementById("gender");
const generror = document.getElementById("g-error");
var a=document.getElementById('fname');
var a1=document.getElementById('n-error');

function validfname(){
       if(a.value===""){
        a1.innerHTML="Name can't be empty";
        a.style.border="2px solid red"; 
        return false;
    }
    else if(a.value.length<3 ||a.value.length>15){
        a1.innerHTML="character must contain minimum 3 to maximum 15";
        a.style.border="5px solid red";
        return false;
    }
    else{
        a1.innerHTML="";
        a.style.border="2px solid green";
        return true;
    }
}
let b=document.getElementById('email');
    let b1=document.getElementById('e-error');
function validemail(){
        if(b.value===""){
        b1.innerHTML="Email can't be empty";
        b.style.border="2px solid red";
        return false;
    }
    else if(!b.value.match(/^[a-z\._\-0-9]*[@][a-z]*[\.][a-z]{2,4}/)){
        b1.innerHTML="Enter valid email";
        b.style.border="2px solid red";
        return false;
    }
    else{
        b1.innerHTML="";
        b.style.border="2px solid green";
        return true;
    }
    
}
let c=document.getElementById("password");
let c1=document.getElementById("p-error");
function validpassword(){
       if(c.value===""){
        c1.innerHTML="Password can't be empty";
        c.style.border="2px solid red";
        return false;
    }
    else if(!c.value.match(/^[A-Z]{1}[a-z]{2,10}[!@#$&_]{1}[0-9]{1,4}/) || c.value.length<8){
        c1.innerHTML="Invalid Password eg:Krish#3";
        c.style.border="2px solid red";
        return false;
    }
    else{
        c1.innerHTML="";
        c.style.border="2px solid green";
        return true;
    }
}
    let d=document.getElementById("number");
    let d1=document.getElementById("num-error");
function validmob(){
      if(d.value==""){
        d1.innerHTML="Number can't be empty";
        d.style.border="2px solid red";
        return false;
    }
    else if(!d.value.match(/^[0-9]{10}/) || d.value.length<10 || d.value.length>10){
        d1.innerHTML="Invalid Number";
        d.style.border="2px solid red";
        return false;
    }
    else{
        d1.innerHTML="";
        d.style.border="2px solid green";
        return true;
    }
}
    let e=document.getElementById("add");
    let e1=document.getElementById("add-error");
function validaddress(){
        if(e.value===""){
        e1.innerHTML="Address can't be empty";
        e.style.border="2px solid red";
        return false;
    }
    else if(!e.value.match(/^[A-Z a-z 0-9 ]/)){
        e1.innerHTML="Invalid address";
        e.style.border="2px solid red";
        return false;
    }
    else{
        e1.innerHTML="";
        e.style.border="2px solid green";
        return true;
    }
}
let f=document.getElementById("dis");
    let f1=document.getElementById("dis-error");
function validdis(){
    if(f.value===""){
        f1.innerHTML="District can't be empty";
        f.style.border="2px solid red";
        return false;
    }
    else if(!f.value.match(/^[A-Z]/)){
        f1.innerHTML="Must be UPPERCASE";
        f.style.border="2px solid red";
        return false;
    }
    else{
        f1.innerHTML="";
        f.style.border="2px solid green";
        return true;
    }
}
let g=document.getElementById("state");
    let g1=document.getElementById("st-error");
function validstate(){
        if(g.value==="-1"){
        g1.innerHTML="Select State";
        g.style.border="2px solid red";
        return false;
    }
        else{
        g1.innerHTML="";
        g.style.border="2px solid green";
        return true;
    }
}
let h=document.getElementById("pin");
    let h1=document.getElementById("pin-error");
function validpin(){
        if(h.value===""){
        h1.innerHTML="Pincode can't be empty";
        h.style.border="2px solid red";
        return false;
    }
    else if(isNaN(h.value) || h.value.length<6 || h.value.length>6){
        h1.innerHTML="Enter valid pincode";
        h.style.border="2px solid red";
        return false;
    }
    else{
        h1.innerHTML="";
        h.style.border="2px solid green";
        return true;
    }
}
form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
 })

 function checkinput() {
    const fnamevalue = a.value.trim();
    const emailvalue = b.value.trim();
    const passwordvalue = c.value.trim();
    const gendervalue = document.myform.gender.value;
    const mobilevalue = d.value.trim();
    const addressvalue = e.value.trim();
    const districtvalue = f.value.trim();
    const statevalue = g.value.trim();
    const pinvalue = h.value.trim();

    var gender = form.querySelectorAll('input[name="gender"]:checked');
        if (!gender.length) {
            generror.innerHTML = "Select your Gender";
            return false;
        }
        else{
            generror.innerHTML="";
        }

        

        document.write("Name:"+" "+fnamevalue+ "<br>");
        document.write("Email id:"+" " +emailvalue+ "<br>");
        document.write("Password:"+" " +passwordvalue+ "<br>");
       document.write("Gender:"+" " + gendervalue + "<br>");
       document.write("Mobile Number:"+" " +mobilevalue + "<br>");
       document.write("Address:"+" " + addressvalue + "<br>");
       document.write("State:"+" " + statevalue + "<br>");
       document.write("District:"+" " + districtvalue + "<br>");
       document.write("Pincode:"+" " + pinvalue + "<br>");
    
 }
