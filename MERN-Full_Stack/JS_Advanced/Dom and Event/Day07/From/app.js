const username=document.getElementById("name")
const email=document.getElementById("email")
const pass =document.getElementById("pw")
const age = document.getElementById("age")
const button=document.getElementById("btn")
const userError=document.getElementById("userError")
const emailError=document.getElementById("emailError")
const passError=document.getElementById("passError")
const ageError =document.getElementById("ageError")


button.addEventListener("click",()=>{

    userVal=username.value 
    emailVal=email.value
    passVal=pass.value
    ageVal=age.value

    if(userVal.length>4 || userVal.length<10){
        userError.style.display="block"
    }

    if(!emailVal.endsWith("@gmail.com")){
        emailError.style.display="block"
    }

    if(ageVal<18){
        ageError.style.display="block"
    }

    let islower=false
    let isUpper=false
    let hasScp=false
    let allowedChars=["!","@","#","$","%","^","&","*","-","_"]

    for(let item of passVal){

        if(item.toUpperCase()==item){
            isUpper=true
        }
        if(item.toLowerCase()==item){
            islower=true
        }
         if(allowedChars.includes(item))
        {
            hasSc = true
        }
        if(!isUpper || !islower || !hasScp ||passVal.length>8){
            passError.style.display="block"
        }
    }

})
