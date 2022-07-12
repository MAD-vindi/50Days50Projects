const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", ()=>{
    search.classList.toggle("active");
    //focus method automatically puts cursor inside the search bar.
    input.focus();
})