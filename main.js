const openMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.navigation__mobile');
const closeMenu = document.querySelector('.close-menu');
const interLinks = document.querySelectorAll('.internalLinks');


function openLinks (links){
  window.location.href = links;
  menu.style.display = 'none';
}

openMenu.addEventListener('click',()=> {
menu.style.display = 'block';
});

interLinks.addEventListener('click',openLinks);

closeMenu.addEventListener('click',()=> {
  menu.classList.toggle('closed');
});



