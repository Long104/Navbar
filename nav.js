let toggle = document.getElementsByClassName("toggle-bar")[0]
let navLink = document.getElementsByClassName("navLink")[0]

toggle.addEventListener('click', () => {
    navLink.classList.toggle('active')

    
})