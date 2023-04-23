const togglebtn = document.querySelector('.navbar_toglebtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.nav_wrap2');

togglebtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});