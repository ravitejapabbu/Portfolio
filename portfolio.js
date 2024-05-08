let menu = document.querySelector("#menu");
document.querySelector("#menu-btn").onclick = () =>{
    menu.classList.toggle("active");
}
document.querySelector("#menu-close").onclick = () =>{
    menu.classList.remove("active");
}
window.onscroll = () =>{
    menu.classList.remove("active");
}