const form= document.querySelector('#form');
const username= document.querySelector('#username');
const password= document.querySelector('#password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

const validateEmail =(username)=> {
    return String(username)
    .toLowercase()
    .match( /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/);
 
}

function validateInputs(){
    const usernameVal=username.value.trim();
    const passwordVal=password.value.trim();
    

    if(usernameVal=== ''){
        success=false;
        setError (username,'username is required')
    }
    else if(!validateEmail(usernameVal)){
        success=false;
        setError(username,'Please enter a valid email')
    }
    else{
        setSuccess(username)
    }
    if(passwordVal=== ''){
        success=false;
        setError (password,'password is required')
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'Password must be atleast 8 characters')
    }
    else if(passwordVal./[^A-Za-z0-9-'']/i){
        success=false;
        setError(password,'Password must be atleast 1 special characters')
    }
    else{
        setSuccess(password)
    }
    
}

function setError(element,message){
    const inputgroup= element.parentElement;
    const errorElement= inputgroup.querySelector('.error');

    errorElement.innerText= message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');

}

function setSuccess(element){
    const inputgroup= element.parentElement;
    const errorElement= inputgroup.querySelector('.error');

    errorElement.innerText= '';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');

}
