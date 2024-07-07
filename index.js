function toggleMenu() {
    toggle = !toggle;
    let menu = document.querySelector('.nav-list');
    if (toggle) {
        menu.style.transform = "translateX(0%)"
    } else {
        menu.style.transform = "translateX(-100%)"
    }
}