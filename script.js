const hamburguer = document.querySelector('.hamburguer')
const navItems = document.querySelector('.nav__items')

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active')
  navItems.classList.toggle('active')
})
