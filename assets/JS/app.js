let menu = document.querySelector('.hdphone-icon i')
let search = document.querySelector('.hdtop-right i')
menu.addEventListener('click',()=>{
  document.querySelector('#all-nav').classList.toggle('activeNavbar')
  
})
search.addEventListener('click', ()=>{
  document.querySelector('.search-input').classList.toggle('activeInput')
  document.querySelector('.hdtop-left-select').classList.toggle('d-none')
})
 
