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




const roles = ["Software Engineer", "Full Stack Developer", "Data Scientist", "ML&AI  Expert", "Cloud Engineer"];
  let roleIndex = 0;
  const typingSpeed = 110;   // ms per character
  const delayBetweenRoles = 2000; // ms wait after typing a role
const span = document.getElementById("role");

  function typeText(text, index = 0) {
    if (index < text.length) {
      span.textContent += text.charAt(index);
      setTimeout(() => typeText(text, index + 1), typingSpeed);
    } else {
      setTimeout(() => {
        span.textContent = "";  // Clear for next word
        roleIndex = (roleIndex + 1) % roles.length;
        typeText(roles[roleIndex]);
      }, delayBetweenRoles);
    }
  }

  typeText(roles[roleIndex]);