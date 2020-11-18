import {Menu} from "./modules/Menu.js";

class App {
    constructor() {
        this.nav = document.querySelector("nav")
        this.menu = document.querySelector(".menu")
        this.menuLis = document.querySelectorAll(".menu>li")

        this.MenuClass = new Menu(this.nav, this.menu)

        this.nav.addEventListener("click", this.MenuClass.showMenu.bind(this))
        this.menuLis.forEach(li => li.addEventListener("click", this.MenuClass.goToSection.bind(this)))
    }
}

const app = new App()