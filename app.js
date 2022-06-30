const navBar = document.querySelector('nav')
window.onscroll = () => {
    let top = window.scrollY
    if (top > 500)
        navBar.style.backgroundColor = 'rgba(32, 32, 32, 20)'
    else if (top > 100) {
        let opacity = ((top - 100) / 300)
        navBar.style.backgroundColor = `rgba(32, 32, 32, ${opacity})`
    }
    else
        navBar.style.backgroundColor = '#00000000'
}
