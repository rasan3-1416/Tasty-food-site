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

// Add Style to Header On Scroll Feature
const header = document.querySelector('.header')

function scrollAction() {
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollAction)

// Scroll Active Section High lighter Feature
const sections = document.querySelectorAll('section[id]')

function scrollActiveSection() {
    const scrollAmountY = window.scrollY

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight,
              sectionTop = currentSection.offsetTop - 50,
              sectionId = currentSection.getAttribute('id'),
              scrolledSection = document.querySelector(`.nav__menu a[href*= ${sectionId}]`)

        if(scrollAmountY > sectionTop && scrollAmountY <= sectionTop + sectionHeight) {
            scrolledSection.classList.add('active-section')
        }else {
            scrolledSection.classList.remove('active-section')
        }
    })
}

window.addEventListener('scroll', scrollActiveSection)