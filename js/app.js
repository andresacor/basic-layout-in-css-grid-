


let hamburguerIcon = document.querySelector('#hamburguer')
hamburguerIcon.addEventListener('click', function(){
    let menu = document.querySelector('#menu')
    if(menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu')
    }
    else {
        menu.classList.add('show-menu')
    }
   
  
})


