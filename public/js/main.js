primaryColor: '#F2F2F2';
var primaryColor2 = '#FE724E';
backgroundColor: '#FECCBF';
secondaryColor: '#282B30';
secondaryColor2: '#FFC42B';
var secondaryColor3 = '#f9f9f9';
var extraColors1 = '#e8e8e8';
// A class for validating input text,email,message etc.
var validateInput = /** @class */ (function () {
    function validateInput() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.args = args;
    }
    validateInput.prototype.validateEmail = function (args) {
        return /\b[@.]\b/.test(this.args) ? true : false;
    };
    validateInput.prototype.validateText = function (args) {
        return /\b (insert|select)\b/.test(this.args) ? true : false;
    };
    validateInput.prototype.validateComment = function (args) {
        return /\b[fuck]\b/.test(this.args) ? true : false;
    };
    return validateInput;
}());
//Validating the Login and signup form
var validateInputClass = new validateInput();
$('.signupForm form').addEventListener('submit', function (e) {
    alert('hey');
    e.preventDefault();
    if (validateInputClass.validateText($('signupForm form input[name=fullname]').text()) &&
        validateInputClass.validateEmail($('signupForm form input[name=email]').text())) {
        alert('Success');
    }
    else {
        e.preventDefault();
    }
    //validating the email
}); // validating the sigupup Form
document.querySelector('.loginForm form input[type=submit]').addEventListener('click', function () {
    alert('hey');
    validateInputClass.validateText($('signupForm form input[name=password]').text()); //validating the fullname
    validateInputClass.validateEmail($('signupForm form input[name=email]').text()); //validating the email
});
//adding Event listeners
var toTop = document.querySelector(".toTop");
window.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', function (e) {
        var actualHeight = document.body.scrollHeight - innerHeight;
        var currentHieght = (pageYOffset / actualHeight) * 100;
        if (Math.floor(currentHieght) >= 30)
            toTop.style.display = "block";
        else
            toTop.style.display = "none";
    });
    // document.addEventListener("mouseover",(e) => {
    //     let mousepost = e.screenX;
    // })
});
//single page application
function SPA(arg) {
    var pageList = ['page-1', 'page-2', 'page-3', 'page-4'];
    $("." + arg).css('display', 'block');
    pageList.filter(function (page) { return page != arg; }).forEach(function (element) {
        $("." + element).css('display', 'none');
        console.log(element);
    });
    //vanilla js
    // pageList.filter(page => page != arg).forEach(element => {
    //     document.querySelector(`${element}`).style.display = 'none';
    // });
    // document.querySelector(`${arg}`).style.display = 'block';
}
// This function recieves the parent class as an input and checks the checkbox being the child
var checkboxCounter = 0;
function CheckBox(arg) {
    var flag;
    checkboxCounter % 2 == 0 ? flag = true : flag = false;
    $("." + arg + " input").attr('checked', flag);
    // A switch statement that checks the caller of the CheckBox function and provide it neccessary styling
    switch (arg.slice(0, arg.search(" "))) {
        case 'form-3':
            (flag) ? $("." + arg + " span").css({ 'background': primaryColor2, 'color': secondaryColor3 }) :
                $("." + arg + " span").css({ 'background': 'transparent', 'color': 'rgba(0, 0, 0, 0.46)' });
            break;
        case 'form-2':
            if (flag) {
                $("." + arg + " .designedButton i").css({ 'transform': 'translate(120%,2.5px)' });
                $("." + arg + " .designedButton").css({ 'background': primaryColor2 });
            }
            else {
                $("." + arg + " .designedButton i").css({ 'transform': 'translate(5px,2.5px)' });
                $("." + arg + " .designedButton").css({ 'background': extraColors1 });
            }
            break;
        default:
            alert("I no go work oo!");
            break;
    }
    checkboxCounter++;
}
// /* START OF RESTAURANT.JS*/
// let designedButton_counter = 0;
//  function designedButtonChange(arg){
//     designedButton_counter % 2 == 0 ? $('.designedButton i').css('transform','translate(120%,2.5px)') : 
//     $('.designedButton i').css('transform','translate(5px,2.5px)');
//    CheckBox(arg);
//  designedButton_counter++;
//  }
//   // document.styleSheets[3].insertRule('.designedButton::after {transform: translate(5px,5px)}',0)
// // A function for the 
// /* END OF RESTAURANT.JS*/
//A function created to collpse and expand text
function collapseExpand(arg) {
    // if(collapseCounter % 2 == 0) {
    // console.log(collapseCounter);
    // $(`.${arg}`).css('height','300px');
    // $(`.${arg} p`).css('display','block');
    // }
    // else{
    //     console.log(collapseCounter);
    //     $(`.${arg}`).css('height','0px');
    //     $(`.${arg} p`).css('display','none');
    // }
    // collapseCounter++;
}
// alternative for the collapse
// A function for centralizing a text and making the background darken
function Cupoon(args) {
    $("." + args).css('display', 'block');
    document.append('div');
}
