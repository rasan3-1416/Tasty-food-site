// Toggle Navigation and Click on hide Feature
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')

function navToggleAction() {
    navMenu.classList.toggle('dynamic-style')
}

navToggle.addEventListener('click', navToggleAction)

const navLink = document.querySelectorAll('#nav-menu ul li a')

navLink.forEach(currentButton => {
    currentButton.addEventListener('click', navToggleAction)
})

// Add Style to Header On Scroll Feature
const header = document.getElementById('header')

function scrollAction() {
    if(this.scrollY >= 50) {
        header.classList.add('dynamic-style')
    }else {
        header.classList.remove('dynamic-style')
    }
}

window.addEventListener('scroll', scrollAction)

// // Scroll Active Section High lighter Feature
const sections = document.querySelectorAll('section[id]')

function scrollActiveSection() {
    const scrollAmountY = window.scrollY

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight,
              sectionTop = currentSection.offsetTop - 50,
              sectionId = currentSection.getAttribute('id'),
              scrolledSection = document.querySelector(`#nav-menu a[href*= ${sectionId}]`)

        if(scrollAmountY > sectionTop && scrollAmountY <= sectionTop + sectionHeight) {
            scrolledSection.classList.add('dynamic-style')
        }else {
            scrolledSection.classList.remove('dynamic-style')
        }
    })
}

window.addEventListener('scroll', scrollActiveSection)

// // Background Theme Feature
const themeButton = document.getElementById('theme-button'),
      themeButtonIcon = document.getElementById('theme-button-icon'),
      darkTheme = 'dark-theme',
      iconTheme = 'ri-sun-line'

//     // Prevously selected theme and icon (If user selected)
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon')

//     // We select the current theme that the interface has by validating the dark theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButtonIcon.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    // We validate if the user choose a topic
if(selectedTheme) {
    // If validation is full filled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButtonIcon.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

    // Active or Deactive the theme button manually on button click
themeButton.addEventListener('click', () => {
    // Add or remove dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButtonIcon.classList.toggle(iconTheme)

//     // We select and store the current theme and icon that the user have chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll UP Feature
const scrollUpButton = document.getElementById('scroll-up')

function scrollUpAction() {
    if(this.scrollY > 350) {
        scrollUpButton.classList.add('dynamic-style')
    }else {
        scrollUpButton.classList.remove('dynamic-style')
    }
}

window.addEventListener('scroll', scrollUpAction)


// Reveal Content On Scroll Feature

// Basic Scroll Reveal Function
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
    interval: 0,
    // reset: true,
})

// Viewport Width
let viewportWidth = window.visualViewport.width

// Scroll Reveal Function
function srAction(element, action){
    sr.reveal(element, action)
}

// Delay increase According to Index Function
function delayByIndex(element,originOfAction){
    element.forEach((element,index) => {
        srAction(element, {origin: originOfAction || 'top', delay: 100 + (index * 400)})
    })
}


// Footer reveal content
let footerDataBlock = document.querySelectorAll('#footer-data-holder div')

// Scroll reveal change on occur when viewport width is more the 768px
if(viewportWidth > 767.99){
    // Scroll Reveal Header/Home/About/App/Contact Section
    srAction(header)
    srAction('#home-data, #about-img, #app-data, #contact-data', {origin: 'left'})
    srAction('#home-img, #about-data, #app-img, #contact-btn', {origin: 'right'})
    delayByIndex(footerDataBlock, 'bottom')
}else {
    srAction('#home-data, #home-img, #about-img, #about-data, #app-data, #app-img, #contact-data, #contact-btn', {interval: 200})
    delayByIndex(footerDataBlock, 'top')
}

// Service Section Reveal
let serviceCard = document.querySelectorAll('#service-card-holder div')
delayByIndex(serviceCard)

// Menu Section Reveal
let menuCard = document.querySelectorAll('#menu-card-holder div')
delayByIndex(menuCard)


