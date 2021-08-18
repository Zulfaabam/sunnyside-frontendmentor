// variables
const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('navbar--links')[0]

//event listener
toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
