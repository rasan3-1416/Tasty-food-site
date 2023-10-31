// Toggle Navigation and Click on hide Feature
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')

function navToggleAction() {
    if(!navMenu.classList.contains('show-menu')) {
        navMenu.classList.add('show-menu')
    }else {
        navMenu.classList.remove('show-menu')
    }
}

navToggle.addEventListener('click', navToggleAction)

const navLink = document.querySelectorAll('.nav__list-link')

navLink.forEach(currentButton => {
    currentButton.addEventListener('click', navToggleAction)
})

// Add Style On Scroll Feature
const header = document.querySelector('.header')

function scrollAction() {
    scrollAmountY = window.scrollY
    if(scrollAmountY > 50) {
        header.classList.add('scroll-header')
    }else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollAction)