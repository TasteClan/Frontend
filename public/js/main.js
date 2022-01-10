// primaryColor :'#F2F2F2';
var primaryColor2 = '#FE724E';
// backgroundColor: '#FECCBF';
// secondaryColor : '#282B30';
// secondaryColor2 : '#FFC42B';
var secondaryColor3 = '#f9f9f9';
var extraColors1 = '#e8e8e8';
var box_counter = 0;
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
    var pageList = ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7'];
    var initial_dstyle = window.getComputedStyle(document.querySelector("." + arg), null).getPropertyValue('display');
    console.log(initial_dstyle);
    $("." + arg).css('display', 'block');
    var parentElement = arg.slice(0, arg.search(' ') + 1);
    pageList.filter(function (page) { return page != arg.slice(arg.search(' ') + 2, arg.length); }).forEach(function (element) {
        $("." + parentElement + " ." + element).css('display', 'none');
    });
    //vanilla js
    // pageList.filter(page => page != arg).forEach(element => {
    //     document.querySelector(`${element}`).style.display = 'none';
    // });
    // document.querySelector(`${arg}`).style.display = 'block';
}
function SPA_single(arg) {
    var pageList = ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7'];
    $("." + arg).css('display', 'block');
    pageList.filter(function (page) { return page != arg; }).forEach(function (element) {
        $("." + element).css('display', 'none');
    });
}
;
// This function recieves the parent class as an input and checks the checkbox being the child
function CheckBox(arg) {
    console.log(box_counter);
    var flag;
    // A switch statement that checks the caller of the CheckBox function and provide it neccessary styling
    box_counter % 2 == 0 ? flag = true : flag = false;
    $("." + arg + " input").attr('checked', "" + flag);
    switch (arg.slice(0, arg.search(" "))) {
        case 'form-3':
            (flag) ? $("." + arg + " span").css({ 'background': primaryColor2, 'color': secondaryColor3 }) :
                $("." + arg + " span").css({ 'background': 'transparent', 'color': 'rgba(0, 0, 0, 0.46)' });
            break;
        case 'form-2':
            if (flag) {
                $("." + arg + " .designedButton i").css({ 'transform': 'translate(120%,2.5px)' });
                $("." + arg + " .designedButton").css({ 'background': primaryColor2 });
                flag = false;
            }
            else {
                $("." + arg + " .designedButton i").css({ 'transform': 'translate(5px,2.5px)' });
                $("." + arg + " .designedButton").css({ 'background': extraColors1 });
                flag = true;
            }
            break;
    }
    box_counter++;
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
function cartCalc(arg) {
    var value = $("." + arg + " .quantity input").val();
    var price = $("." + arg + " .price span").text();
    console.log(value);
    console.log(price);
    // function for converting to suitable format
    var formater = function (inp) {
        return parseInt(inp.replace('N', '').replace(',', ''));
    };
    var format_price = formater(price);
    if (value == 0)
        value = 1;
    $("." + arg + " .total span").text("N" + Intl.NumberFormat('en-Us').format(format_price * value));
    // updating the total and subtotal
    // collecting the prices of all items
    var adder = 0;
    document.querySelectorAll('.item .total span').forEach(function (element) {
        adder = adder + formater(element.innerHTML);
    });
    // displaying the output in the subtotal
    $("#subtotal").text(Intl.NumberFormat('en-Us', { style: 'currency', currency: 'NGN' }).format(adder));
}
function Delete(arg) {
    $("." + arg).css('display', 'none');
    // create a func that bring back the item if it want to be retrieved
}
// a function that takes the items in a cart and preview them
function PreviewCart() {
    var items = document.getElementsByClassName('item');
    var class_purchase_detials = document.querySelector('purchase-details');
    console.log(items);
    var key;
    var counter = 1;
    for (key in (items)) {
        console.log(items[key]);
        console.log(key);
        console.log(items[key].firstChild.firstChild);
        // let div = document.createElement('div') as HTMLElement;
        // div.className = `item-detail-1-${counter}`; // create the div tag
        // document.createElement('div').className = "item-name";
        // let h3 = document.createElement('h3').innerHTML;
        // h3 = items[key].firstChild.lastChild.nodeValue;
        // console.log(h3)
        // document.querySelector('.purchase-details .item-name').append(h3);
        // class_purchase_detials.append(div);
        // counter++;
        if (key >= items.length - 1)
            break;
    }
}
function AddCart(arg) {
    var counter = 0;
    var food_type, price, served_with, img = [];
    food_type.push($("." + arg + " header h5").text());
    price.push(($("." + arg + " price h4").text()).slice(0, ($("." + arg + " price h4").text()).search("<br>") + 1));
    served_with.push($("." + arg + " header h5").text());
    return function () {
        counter++;
        console.log(counter);
        console.log(food_type);
    };
}
