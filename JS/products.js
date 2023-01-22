/************************   start select every li section sorts and every box in section items   *******************/
let btns = document.querySelectorAll(".sorts ul li"),
    items = document.querySelectorAll(".items .box");
/************************   end select every li section sorts and every box in section items   *******************/

/************************   loop in all il   *******************/
btns.forEach((button)=>{
    button.addEventListener("click",function(){
        document.querySelector(".sorts ul li.active").classList.remove("active");
        button.classList.add("active");


        let target = button.getAttribute("data-target");

/************************   loop in items   *******************/
        items.forEach((item)=>{
            item.classList.add("fifty");
            item.classList.remove("focus");
            if(item.dataset.id == target){

                item.classList.add("focus");
                item.classList.remove("fifty");

            }
        });
    })
})



/************************   select  heart-icon   *******************/
let heart = document.querySelectorAll(".items .chose-fav");

/************************   select  notification-content   *******************/
let notificationontent = document.querySelector(".notification-content");

/************************   select  close-Icon   *******************/
let closeNotification = document.querySelector(".close-notification");

/************************   loop in all items about  heart-icon  *******************/
heart.forEach((e)=>{
    e.addEventListener("click",function(){

/************************   add classList toggle on any  heart-icon after click *******************/
        e.classList.toggle("my-favourite");
        
/************************   add classList active on notification-content *******************/
        notificationontent.classList.add("active")

/************************   addEventListener at closeIconto remove classList active *******************/
        closeNotification.addEventListener("click",function(){
        notificationontent.classList.remove("active")
        })
    })
})

















