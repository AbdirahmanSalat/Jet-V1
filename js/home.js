
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
            body.style.color="white"
          }

      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

const btns = document.querySelectorAll('.btn')
const login_btn = btns[0]
const signup_btn = btns[1]
const log_out_btn = btns[1]

login_btn.addEventListener('click',()=>{
    window.location = 'login.html'
})
signup_btn.addEventListener('click',()=>{
    window.location = 'sighnup.html'
})

const userLoggedIn= window.localStorage.getItem('userLoggedIn')
if(userLoggedIn === "true"){
    log_out_btn.style.display = "block"
    login_btn.style.display = "none"
     signup_btn.style.display="none"
 }else if(userLoggedIn !== "true"){
    log_out_btn.style.display = "none"
     signup_btn.style.display="block"
     login_btn.style.display="block"

 }
log_out_btn.addEventListener('click',()=>{
     window.localStorage.setItem('userLoggedIn',"false")
     log_out_btn.style.display="none"
     login_btn.style.display='block'
     signup_btn.style.display='block'
  })
  const loader = document.querySelector(".loader");
  window.onload = function(){
    setTimeout(function(){
      loader.style.opacity = "0";
      setTimeout(function(){
        loader.style.display = "none";
      }, 500);
    },1500);
  }