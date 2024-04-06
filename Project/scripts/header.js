const header = document.querySelector('.Header');

window.addEventListener('scroll', ()=> {
    let scroll = window.scrollY

    if (scroll > 100) {
        header.style.backgroundColor = '#121212'
    }else {
        header.style.backgroundColor = 'transparent'
    }
});