primaryColor :'#F2F2F2';
let primaryColor2 = '#FE724E';
backgroundColor: '#FECCBF';
secondaryColor : '#282B30';
secondaryColor2 : '#FFC42B';
let secondaryColor3 =  '#f9f9f9';
let extraColors1 = '#e8e8e8';



// A class for validating input text,email,message etc.
class validateInput {
    private args;
    constructor(...args) {
        this.args = args;
    }

    validateEmail(args):boolean{
       return /\b[@.]\b/.test(this.args) ?  true : false
    }

    validateText(args):boolean{
        return /\b (insert|select)\b/.test(this.args) ? true : false
    }

    validateComment(args):boolean{
        return /\b[fuck]\b/.test(this.args) ? true : false
    }
}

//Validating the Login and signup form

let validateInputClass = new validateInput();

($('.signupForm form') as any).addEventListener('submit',(e)=>{
    alert('hey');
    e.preventDefault();
    
    if ( validateInputClass.validateText($('signupForm form input[name=fullname]').text()) && 
         validateInputClass.validateEmail($('signupForm form input[name=email]').text())
       ){alert('Success')}
    else{e.preventDefault();}
     //validating the email
}) // validating the sigupup Form

document.querySelector('.loginForm form input[type=submit]').addEventListener('click',()=>{
    alert('hey');
    validateInputClass.validateText($('signupForm form input[name=password]').text()); //validating the fullname
    validateInputClass.validateEmail($('signupForm form input[name=email]').text()); //validating the email
})

//adding Event listeners
let toTop = document.querySelector(".toTop") as HTMLStyleElement;
window.addEventListener('DOMContentLoaded',() => {
    document.addEventListener('scroll',(e)=>{
        let actualHeight = document.body.scrollHeight - innerHeight;
        let currentHieght = (pageYOffset / actualHeight) * 100
        if ( Math.floor(currentHieght) >= 30 ) toTop.style.display = "block"
        else toTop.style.display = "none"
    })
    // document.addEventListener("mouseover",(e) => {
    //     let mousepost = e.screenX;
        
    // })
})

//single page application
function SPA(arg:string){
    let pageList:string[] = ['page-1','page-2','page-3','page-4'];
    $(`.${arg}`).css('display','block');
    pageList.filter(page => page != arg).forEach(element => {
        $(`.${element}`).css('display','none');
        console.log(element)
    });
    
    
    //vanilla js
    // pageList.filter(page => page != arg).forEach(element => {
    //     document.querySelector(`${element}`).style.display = 'none';
    // });
    // document.querySelector(`${arg}`).style.display = 'block';
}




// This function recieves the parent class as an input and checks the checkbox being the child
let checkboxCounter = 0;
function CheckBox(arg:string){
     var flag;
    checkboxCounter % 2 == 0 ?  flag = true : flag = false
    $(`.${arg} input`).attr('checked',flag);

// A switch statement that checks the caller of the CheckBox function and provide it neccessary styling
     switch (arg.slice(0,arg.search(" "))) {
         case 'form-3':
            (flag) ? $(`.${arg} span`).css({'background':primaryColor2,'color':secondaryColor3}) :
            $(`.${arg} span`).css({'background':'transparent','color':'rgba(0, 0, 0, 0.46)'});
             break;
        case 'form-2':
            if(flag){
             $(`.${arg} .designedButton i`).css({'transform':'translate(120%,2.5px)'});
             $(`.${arg} .designedButton`).css({'background':primaryColor2});
            }
            else{
             $(`.${arg} .designedButton i`).css({'transform':'translate(5px,2.5px)'});
             $(`.${arg} .designedButton`).css({'background':extraColors1}); 
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

function collapseExpand(arg){
    
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
function Cupoon(args){
    $(`.${args}`).css('display','block');
    document.append('div');
}


