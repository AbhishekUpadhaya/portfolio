let changeMode=document.querySelector(".heading img");
let navBar=document.querySelector("#nav-bar");
let main=document.querySelector("main");

let darkMode=false;
changeMode.addEventListener("click",()=>{
    if(darkMode){
        navBar.style.backgroundColor="rgba(27, 36, 36, 0.396)";
        main.style.backgroundColor="#3f3c42";
        main.style.backgroundImage="linear-gradient(225deg, #3f3c42 37%, #2B86C5 98%, #ffffff 99%, #FF3CAC 100%) ";
        darkMode=false;
    }
    else{
        navBar.style.backgroundColor="black";
        main.style.backgroundColor="#3f3c42";
        main.style.backgroundImage="linear-gradient(165deg, #3f3c42 37%, #2B86C5 98%, #ffffff 99%, #FF3CAC 100%) ";
        darkMode=true;
    }
});

