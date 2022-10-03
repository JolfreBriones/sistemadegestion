




//Tooltip-bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



 //Cambiar aspecto de header al mover scroll
 window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Show sidenav
let button = document.getElementById("navbar_bar");
button.addEventListener("click", function(){
  let aside = document.querySelector("aside");
  aside.classList.toggle("active");

  openFadeBackground(aside, "beforebegin");
  closeFadeWindow();
});

//close sidenav
let main = document.getElementById("sidenav_btn_close");
main.addEventListener("click", function(){
  let aside = document.querySelector("aside");
  aside.classList.remove("active");
  closeFadeBackground();
});

//Close sidenav with Escape Key
/*
let aside = document.querySelector("aside");
aside.addEventListener("keydown", function(e) {
  if(e.key == "Escape"){
      aside.classList.remove("active");
  }

});
*/

//Show SideNotification
let items_notification = document.querySelectorAll(".header_btn_notification");
items_notification.forEach(header_btn_notification =>{
  header_btn_notification.addEventListener("click", function(){
      let notifications = document.getElementById("notifications");
      notifications.classList.add("show");

      openFadeBackground(notifications, "afterbegin");
      let notification_bar = document.getElementById("notification_bar");
      notification_bar.classList.add("active");
     
      btnOptionsClose();
      closeFadeWindow();
  });
});



//Close SideNotification
let notification_close = document.getElementById("notification_close");
notification_close.addEventListener("click", function(){
  let notifications = document.getElementById("notifications");
  notifications.classList.remove("show");
  let notification_bar = document.getElementById("notification_bar");
  notification_bar.classList.remove("active");
  closeFadeBackground();
});

function closeFadeBackground(){
  let fade_background = document.getElementById('fade-background');
  if(fade_background){
      fade_background.parentNode.removeChild(fade_background);
  }
  let body = document.querySelector("body");
  body.classList.remove("overflow-hidden");
}




//Open notification-message
let items = document.querySelectorAll('.side-notification-bar__content .navbar-nav .nav-item');
items.forEach(btn =>{
  btn.addEventListener('click', function(){
      
      let title = document.getElementById("items-notification");
      title.classList.add("d-none");
      let content = document.getElementById("content-notification");
      content.classList.remove("d-none");

      let message_title = document.getElementById("message-title");
      message_title.classList.remove("active");
      let message_content = document.getElementById("message-content");
      message_content.classList.add("active");


      /*Change content*/
      let user_small = this.querySelector("small.noti-message-user");
      let date_small = this.querySelector("small.noti-message-date");
      let title_h6 = this.querySelector("h6.noti-message-title");
      let message_span = this.querySelector('span');


      let content_user_small = content.querySelector("small.noti-message-user");
      let content_date_small = content.querySelector("small.noti-message-date");
      let content_title_h6 = content.querySelector("h6.noti-message-title");
      let content_message_span = content.querySelector('span');

      content_user_small.textContent = user_small.textContent;
      content_date_small.textContent = date_small.textContent;
      content_title_h6.textContent = title_h6.textContent;
      content_message_span.textContent = message_span.textContent;
  });
});


//Close notification-message
let message_close = document.getElementById("notification-message_close");
message_close.addEventListener("click", function(){
  let content = document.getElementById("content-notification");
      content.classList.add("d-none");
  let title = document.getElementById("items-notification");
      title.classList.remove("d-none");
  let message_content = document.getElementById("message-content");
  message_content.classList.remove("active");
  let message_title = document.getElementById("message-title");
  message_title.classList.add("active");

  let content_user_small = content.querySelector("small.noti-message-user");
  let content_date_small = content.querySelector("small.noti-message-date");
  let content_title_h6 = content.querySelector("h6.noti-message-title");
  let content_message_span = content.querySelector('span');

  content_user_small.textContent = null;
  content_date_small.textContent =  null;
  content_title_h6.textContent =  null;
  content_message_span.textContent =  null;
});


//Search-notification
let search_notification = document.getElementById("search-notification");
search_notification.addEventListener("input", function(){
  let notification_content = document.getElementById("items-notification");        
  let ul = notification_content.querySelector("ul");
  let li = ul.getElementsByTagName("li");
  let i, title;
  let filter = search_notification.value.toUpperCase();
  console.log(filter);
  for(i = 0; i<li.length; i++){
      title = li[i].getElementsByTagName("h6")[0];
      let text = title.textContent || title.innerText;
      //if(text.toUpperCase().indexOf(filter) > -1){
      if(text.toUpperCase().includes(filter)){
          let ob = new Mark(title);
          ob.unmark();
          ob.mark(filter, { className: 'mark-red'});
          li[i].classList.remove("d-none");
      }else{
          li[i].classList.add("d-none");
      }
  }

});



/*
  if(fade_background){
      fade_background.parentNode.removeChild(fade_background);
  }
  let body = document.querySelector("body");
  body.classList.remove("overflow-hidden");
*/

  //Close windows-modal
function closeFadeWindow(){
  const fade_background = document.getElementById("fade-background");
  fade_background.addEventListener("click", function() {
    const sidenav = document.querySelector("aside.sidenav");
    const sidenoti = document.getElementById("notifications");
    if(sidenav){
      let aside = document.querySelector("aside");
      aside.classList.remove("active");
    }
    if(sidenoti){
      let notifications = document.getElementById("notifications");
      notifications.classList.remove("show");
      let notification_bar = document.getElementById("notification_bar");
      notification_bar.classList.remove("active");
    }
    closeFadeBackground();
  });

}

//Close when clicked in the main
const main_ = document.querySelector("main");
const container_ul = document.querySelector(".btn-options__items ");

main_.addEventListener("click", function(){
  btnOptionsClose();
});

container_ul.addEventListener("click", function(){
  btnOptionsClose();
});


function btnOptionsClose(){
  //unchecked button-options
  let btn_options = document.getElementById("btn-options");
  if(btn_options.checked == true){
    btn_options.checked = false;
  }
}



/*Window User-Account*/
const items_header_btn_user = document.querySelectorAll(".header_btn_user");
items_header_btn_user.forEach(item =>{
  item.addEventListener("click", function(){
    const user_account_window = document.getElementById("nav-user-modal");
    user_account_window.classList.toggle("d-none");
    const mediaQuery = window.matchMedia('(max-width: 991.98px)');
    if (mediaQuery.matches) {
      openFadeBackground(user_account_window, "beforebegin");
    }
    btnOptionsClose();
  });
});


//Close window user account btn_close
const nav_user_container_2_btn_close = document.querySelector(".nav-user-modal__close");
nav_user_container_2_btn_close.addEventListener("click", closeUserModal);

function closeUserModal(){
  const nav_user_container_2 = document.getElementById("nav-user-modal");
  nav_user_container_2.classList.add("d-none");
  closeUserModalFade(nav_user_container_2);
}

function closeUserModalFade(item){
  let fade_background = document.getElementById('fade-background');
  if(fade_background){
    item.parentNode.removeChild(fade_background);
  }
  let body = document.querySelector("body");
  body.classList.remove("overflow-hidden");
}


//Detected click mouse
document.addEventListener("mouseup", function(event) {
  const item = document.getElementById("nav-user-modal");
  const parrent = document.getElementById("header_btn_user_lg");
  if(!parrent.matches(':hover')){
    if (!item.contains(event.target)) {
      item.classList.add("d-none");
      closeUserModalFade(item);
    }
  }
});


function openFadeBackground(item, type){
  item.classList.add("show");

  let text = `<div style="z-index:1030;" id="fade-background" class="position-fixed top-0 end-0 bottom-0 start-0 w-100 h-100 opacity-50 bg-black"></div> `;
  item.insertAdjacentHTML(type, text);

  let body = document.querySelector("body");
  body.classList.add("overflow-hidden");
}


//Media query lg 992px
const mediaQuery_lg = window.matchMedia('(max-width: 991.98px)');
function handleTabletChange(e) {
  if (e.matches) {
    /*Move user-account-modal */
    const space_1 = document.getElementById("espacio1").lastElementChild;
    const space_2 = document.getElementById("espacio2").appendChild(space_1);
    space_2.classList.remove("nav-user-modal");
    space_2.classList.add("nav-user-modal-center");
  }
  else{
    const space_2 = document.getElementById("espacio2").lastElementChild;
    if(space_2){
      const space_1 = document.getElementById("espacio1").appendChild(space_2);
      space_1.classList.add("nav-user-modal");
      space_1.classList.remove("nav-user-modal-center");
    }
  }
}
mediaQuery_lg.addListener(handleTabletChange);
handleTabletChange(mediaQuery_lg);





/* DARK MODE PERSISTENCE*/
let darkModeState = false;

//Detected if darkmode is enabled on the OS
const getScheme = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode(state) {
  document.documentElement.classList.toggle('dark', state);
  darkModeState = state;
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}


//Call function toggleDarkMode
//toggleDarkMode(getScheme.matches);
// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") === "true");


//Listen for change in the OS settings.
getScheme.addListener((evt) => toggleDarkMode(evt.matches));

//Darkmode button
let items_btn_mode = document.querySelectorAll(".header_btn_mode");
items_btn_mode.forEach(header_btn_mode => {
  header_btn_mode.addEventListener("click", function(){
    darkModeState = !darkModeState;
    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
    btnOptionsClose();
    changeIconDarkMode(darkModeState);
  });
});

changeIconDarkMode(darkModeState);

function changeIconDarkMode(state){
  let items = document.querySelectorAll(".header_btn_mode > svg");
  //Toogle icon sun/mood
  if(state){
    items.forEach(item => {
      let sun = `<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"/>`;
      item.removeChild(item.firstElementChild);
      item.parentElement.classList.add("sun");
      item.insertAdjacentHTML("afterbegin", sun);
    });
    
  }else{
    items.forEach(item => {
      let moon = `<path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/>`;
      item.removeChild(item.firstElementChild);
      item.parentElement.classList.remove("sun");
      item.insertAdjacentHTML("afterbegin", moon);
    });
  }
}
