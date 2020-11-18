export class Menu {
    constructor(nav, menu){
        this.nav = nav;
        this.menu = menu;

    }

    showMenu(e) {
        if (e.target.dataset.key) return

        this.menu.classList.toggle("active")
    }

    goToSection(e) {
        const key = e.target.dataset.key
        const section = document.querySelector(`section[data-key=${key}]`)
        const sectionFromTop = section.offsetTop;
        window.scrollTo({
            top: sectionFromTop,
            left: 0,
            behavior: 'smooth'
        })
        if (document.body.clientWidth < 1024) {
            this.menu.classList.remove("active")
        }
    }
}