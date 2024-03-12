toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

// Toggle Nav
toggle.addEventListener('Click', () => {
    document.body.classList.toggle('show-nav')
})

// Show Modal
open.addEventListener('click', () => {
    modal.classlist.add('show-model')
})

// Hide Modal
close.addEventListener('Click', () => {
    modal.classList.remove('show-modal');
})

// Hide Modal on outside click
window.addEventListner('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal');
    }
})
