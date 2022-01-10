/* Homepage loading animation*/
setInterval(function () {
    $('.loadingPage').css('display', 'none');
    $('.HomePage').css('display', 'block');
}, 0);
/*  hamburger animation */
var hamburgerCounter = 0;
$(".hamburger").on("click", function () {
    hamburgerCounter++;
    if (hamburgerCounter % 2 == 1) {
        $(".hamburger ul li:nth-Child(1)").css({ 'transform': 'translateY(10px) rotate(45deg)', 'transition': 0.4 });
        $(".hamburger ul li:nth-Child(2)").css('display', 'none');
        $(".hamburger ul li:nth-Child(3)").css('transform', 'rotate(-45deg)');
        $(".mpages").css({ 'width': '100%', 'display': 'block', 'transition': '1s' });
        $("html").css('');
    }
    else {
        $(".hamburger ul li:nth-Child(1)").css({ 'transform': 'translateY(0px) rotate(0deg)', 'transition': 0.4 });
        $(".hamburger ul li:nth-Child(2)").css('display', 'block');
        $(".hamburger ul li:nth-Child(3)").css('transform', 'rotate(0deg)');
        $(".mpages").css({ 'width': '0%', 'display': 'none', 'transition': '2s' });
    }
});
/* CHANGING IMAGES AUTOMATICALLY IN THE HOME PAGE*/
var landingImg = document.querySelector('.explore main .landingimg');
var countnumber = document.querySelector('#countnumber');
var imgArray = [];
var numOfPics = 5; // the number of images 
// NB: the images must be given names as img1,img2,img3... 
for (var i = 1; i <= numOfPics; i++) {
    imgArray.push("img" + [i]);
}
var creatImg = document.createElement("img"); //creating img element
var count = 0;
setInterval(function () {
    //making the src attribute of the img element take the location of the images to be displayed
    creatImg.src = "./public/img/img/" + imgArray[count] + ".png";
    landingImg.appendChild(creatImg); // appending the created img element to the class .img
    countnumber.innerHTML = "0" + (count + 1) + " <sup> /" + numOfPics + " </sup>";
    count++;
    if (count == numOfPics)
        return count = 0;
}, 10000);
/* END OF THE IMAGE CHANGER */
// ========================================================== //
/* CHANGING THE TESTIMONIES */
var testimoniesContent = { assumedTestimonies: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam corrupti molestias dolorum culpa saepe quam, quo delectus consectetur, laudantium facilis voluptatibus quidem recusandae rerum vero ipsum aperiam labore officia rem?"],
    assumedNames: ["John Doe", "Micheal Jordon", "Matthew Philip", "Daniel Mark"],
    assumedStatus: ["Customers", "Food Scientist", "Food Expert", "Experienced Chef"] };
var counter = 0;
var changeTestimonies = function (arg) {
    counter += arg;
    document.querySelector(".writerDetails h2").innerHTML = testimoniesContent.assumedNames[counter - 1];
    document.querySelector(".writerDetails p").innerHTML = testimoniesContent.assumedStatus[counter - 1];
};
/* END OF THE TESTIMONIES CHANGE SECTION */
/* ````````````````````````LOGIN PAGE JAVASCRIPT SECTION */
var swapCounter = 0;
var swapScreens = function (args) {
    if (swapCounter % 2 == 0) {
        $(".screen-1").css({ 'order': 2 });
        $('.screen-2').css("order", 1);
        $('.screen-1 .wel-1').css("display", "none");
        $('.screen-1 .wel-2').css("display", "block");
        $('.loginForm').css("display", "none");
        $('.signupForm').css("display", "block");
    }
    else {
        $('.screen-1').css("order", 1);
        $('.screen-2').css("order", 2);
        $('.screen-1 .wel-1').css("display", "block");
        $('.screen-1 .wel-2').css("display", "none");
        $('.loginForm').css("display", "block");
        $('.signupForm').css("display", "none");
    }
    swapCounter++;
    //for Vanilla js
    // let screen_1 = document.querySelector(` ${args} .screen-1`);
    // let screen_2 = document.querySelector(` ${args} .screen-2`);
    // screen_1.style.order = 2;
    // screen_2 style.order = 1;
};
/* `````````````````````````````END OF LOGIN PAGE SECTION ````````````````````````````````````````````*/
function AutoChanger(arg) {
    //generating items
    var item_number = 3;
    var items = [];
    for (var i = 0; i < item_number; i++) {
        items.push("auto_item-" + i);
    }
    // console.log(items);
    var val = 1;
    setTimeout(function () {
        setInterval(function () {
            $("." + items[val]).css('display', 'block');
            items.filter(function (el) { return el != items[val]; }).forEach(function (el) {
                $("." + el).css('display', 'none');
            });
            val++;
            if (val > item_number - 1)
                val = 1;
            // console.log(items[val]);
        }, 9000);
    }, -9000);
}
