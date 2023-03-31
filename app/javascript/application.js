// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'

function handleNavBar() {
    let burger = document.querySelector('.navbar-burger')
    const menu = document.querySelector('.navbar-menu')
    const close = document.querySelector('.navbar-close')
    burger.addEventListener('click', () => menu.classList.remove('hidden'))
    close.addEventListener('click', () => menu.classList.add('hidden'))
}

document.addEventListener('turbo:load', handleNavBar)
