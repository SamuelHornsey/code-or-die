const scroll = () => {
    let currentPos = window.scrollY
    let nav = document.querySelector('nav')
    
    const show = () => {
        nav.style.transform = 'translateY(0px)'
    }

    const hide = () => {
        nav.style.transform = `translateY(${-nav.getBoundingClientRect().height}px)`
    }

    const update = () => {
        if (window.scrollY > currentPos) {
            requestAnimationFrame(hide)
        } else {
            requestAnimationFrame(show)
        }
        currentPos = window.scrollY
    }
    window.addEventListener('scroll', update)
}

window.addEventListener('load', scroll)