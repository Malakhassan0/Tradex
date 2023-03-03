$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 30,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left text-white"></i>', '<i class="fa-solid fa-arrow-right text-white"></i>'],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
});


var btn = document.getElementById("btn")
// window.addEventListener("scroll", function () {
// })

var counter1 = document.querySelector("#c1")
var counter2 = document.querySelector("#c2")
var counter3 = document.querySelector("#c3")
var counter4 = document.querySelector("#c4")

function counterText(startNum, endNum, countNum, element, timer) {

    var i = startNum
    var set = setInterval(() => {
        if (i == endNum) {
            clearInterval(set)
        }
        else {
            i += countNum
            element.innerText = i
        }
    }, timer)
}


// var cont = document.getElementById("cont")

window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop > 600) {
        // cont.style.display="block";
        if (this.document.documentElement.scrollTop > 200) {
            btn.style.display = "block"
            console.log("scrolling")
        }
        else btn.style.display = "none"
counterText(400, 8000, 400, counter1, 90)
counterText(10, 810, 50, counter2, 90)
counterText(100, 2000, 100, counter3, 90)
counterText(0, 20, 1, counter4, 90)
    }
    // else {cont.style.display = "none"}
    

})

var registerForm = document.getElementById("form_register")


function nameValidation(input){
    console.log(input.value.length)
    var inputVal = input.value.trim()
    if(inputVal.length < 3){
        // input.nextElementSibling.innerText = "enter at least 3 character"
        handleError(input , "enter at least 3 character")

    }
    else {
        input.nextElementSibling.innerText = ""
        handleError(input)
        
    }
}
function emailValidation(input){
    // nouran_ahmed269@hotmail.com
    // regular expression on email ==> http://zparacha.com/validate-email-address-using-javascript-regular-expression

    var emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   console.log(emailRegExp.test(input.value))

   if(emailRegExp.test(input.value) == false){
    // input.nextElementSibling.innerText = "enter a valid email"
    handleError(input , "enter a valid email")
   }
   else {
    input.nextElementSibling.innerText = ""
    handleError(input)
   }

}
function passwordValidation(input){
    // reular expression of password ==> https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    console.log(strongRegex.test(input.value))
    if(!strongRegex.test(input.value)){
        // input.nextElementSibling.innerText = ""
        handleError(input , "enter at least 1 lowercase , 1 uppercase letter , 1 number 1 special character .....")
    }
    else {
        // input.nextElementSibling.innerText = ""
        handleError(input)
    }

}

function handleError(element , msg = ""){
    element.nextElementSibling.innerText = msg
}


registerForm.addEventListener("input" , function(e){
    // console.log(e.target.id)
    if(e.target.id == "userName"){
        nameValidation(e.target)
    }
    else if (e.target.id == "userEmail"){
        emailValidation(e.target)
    }
    else if(e.target.id == "userPassword"){
        passwordValidation(e.target)
    }
    else if(e.target.id == "butn"){
        register(e.target);
    }
})


registerForm.addEventListener("submit" ,function(e){
    e.preventDefault()
    for(var i=0 ;i<e.target.elements.length-1;i++){
        if(emailRegExp.test(input.value)|| strongRegex.test(input.value)==false){
            handleError(input,"one of the fiields is not truly filled. please check and try again")
        } else{
            handleError(input)
        }
    }
})