let menu = document.querySelector("#menu");
let menuItems = document.querySelectorAll(".menu-items");
menuItems.foreach((item)=>{ 
    item.addEventListener('click',(event)=>{
        event.preventDefault();})
})
document.querySelector("#menu-btn").onclick = () =>{
    menu.classList.toggle("active");
}
document.querySelector("#menu-close").onclick = () =>{
    menu.classList.remove("active");
}
window.onscroll = () =>{
    menu.classList.remove("active");
}
