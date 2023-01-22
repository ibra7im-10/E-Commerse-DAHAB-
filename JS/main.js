/****************************************************  start dahap-prise  **********************************************************/
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: "true",
    fade: "true",
    gragCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/****************************************************  end dahap-prise  **********************************************************/

/****************************************************  start last-arrive  **********************************************************/
var swiper = new Swiper(".slide-content2", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
/****************************************************  end last-arrive  **********************************************************/

/****************************************************  start opinion  **********************************************************/
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
/****************************************************  end opinion  **********************************************************/

/****************************************************  select userIcon//login **********************************************************/
let userIcon = document.querySelector(".user");
let login = document.querySelector("#login");

/**********************************  addEvent-click-at-userIcon-to-addclassActiveto-login ******************************************/
userIcon.addEventListener("click",function(){
  login.classList.toggle("active");
})

/******************************  addEvent-click-at-closeLogin-to-remove-from-login ***************************************/
let closeLogin = document.querySelector("#close-login");

closeLogin.addEventListener("click",function(){
  login.classList.remove("active");
})

/****************************************************  end login  **********************************************************/

/****************************************************  end menu  **********************************************************/

let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".menu-icon");
let close = document.querySelector(".close");

menuIcon.addEventListener("click",function(){
  menu.classList.add("active2")
})

close.addEventListener("click",function(){
  menu.classList.remove("active2")
})
/****************************************************  end menu  **********************************************************/


/****************** select (==signIn==signUp==popupContainer==popupContainer2==closesignInbutton==closesignUpbutton) **********************/
let signIn = document.querySelector(".sign-in"),
    signUp = document.querySelector(".sign-up"),
    popupContainer = document.querySelector(".popup-container"),
    popupContainer2 = document.querySelector(".popup-container2"),
    closesignIn = document.querySelector(".close-signIn"),
    closesignUp = document.querySelector(".close-signUp");

/****************************************************   addEvent-click-at-signInbutton  **********************************************/  
signIn.addEventListener("click",function(){
  popupContainer.classList.add("active")
})

/****************************************************  addEvent-click-at-signUpbutton   *****************************************/
signUp.addEventListener("click",function(){
  popupContainer2.classList.add("active")
})


/****************************************************   addEvent-click-at-closesignInbutton  ****************************************/
closesignIn.addEventListener("click",function(){
  popupContainer.classList.remove("active")
})
 
/****************************************************   addEvent-click-at-closesignInbutton  ***************************************/
closesignUp.addEventListener("click",function(){
  popupContainer2.classList.remove("active")
})