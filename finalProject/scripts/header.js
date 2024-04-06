var header = document.getElementById('Header')
var imgScoot = document.getElementById('scooter-img');

window.addEventListener('scroll', ()=> {

    var scroll = window.scrollY

    if(scroll > 10) {
        header.style.backgroundColor = '#121212'
        imgScoot.style.display = 'none';
    }else {
        header.style.backgroundColor = 'transparent'
        imgScoot.style.display = 'initial';
    }
});
