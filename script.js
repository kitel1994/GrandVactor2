const nav = document.getElementById('nav');
const dots = document.getElementById('dots');
const icons = document.getElementById('icons');
const hamb = document.getElementById('hamb');
const lista = document.getElementById('lista');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const chevron = document.getElementById('chevron');


window.addEventListener('scroll', () => {
    if (this.scrollY > 20) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }

    if (this.scrollY > 1160) {
        one.style.width = '50%'
    } else {
        one.style.width = '0%'
    }

    if (this.scrollY > 1210) {
        two.style.width = '90%'
    } else {
        two.style.width = '0%'
    }

    if (this.scrollY > 1270) {
        three.style.width = '80%'
    } else {
        three.style.width = '0%'
    }

    if (this.scrollY > 1330) {
        four.style.width = '20%'
    } else {
        four.style.width = '0%'
    }

    if (this.scrollY > 630) {
        chevron.classList.add('active')
    } else {
        chevron.classList.remove('active')
    }
    console.log(scrollY)
})

dots.addEventListener('click', () => {
    icons.classList.toggle('active')
})

hamb.addEventListener('click', () => {
    lista.classList.toggle('active')
})

chevron.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})