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

// Background Theme Feature
const themeButton = document.getElementById('theme-button'),
      themeButtonIcon = document.getElementById('theme-button-icon'),
      darkTheme = 'dark-theme',
      iconTheme = 'ri-sun-line'

    // Prevously selected theme and icon (If user selected)
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon')

    // We select the current theme that the interface has by validating the dark theme
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

    // We select and store the current theme and icon that the user have chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
