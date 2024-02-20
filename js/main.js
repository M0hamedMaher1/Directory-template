window.addEventListener("scroll", function(){
    const nav = document.querySelector(".nav");
    let x = scrollY;
    if(x > 200){
        nav.style.backgroundColor = "rgba(26,33,61,0.8)"
    }else{
        nav.style.backgroundColor = "transparent"
    }
})
