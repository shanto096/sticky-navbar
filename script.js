
const navEl = document.querySelector(".navbar");
const buttomContent = document.querySelector(".content");

// console.log(navEl.offsetHeight);
// console.log(buttomContent.offsetTop);

window.addEventListener("scroll", ()=>{
    if (window.scrollY > buttomContent.offsetTop - navEl.offsetHeight - 40) {
        navEl.classList.add("bg-black")
        navEl.classList.add("text-white")
    }
    else{
        navEl.classList.remove("bg-black")
        navEl.classList.remove("text-white")
   
    }
})
