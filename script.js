import {Menu} from "./modules/Menu.js";
import {Form} from "./modules/Form.js";
import {Slider} from "./modules/Slider.js";
import {Scroll} from "./modules/Scroll.js";

class App {
    constructor() {
        this.nav = document.querySelector("nav")
        this.menu = document.querySelector(".menu")
        this.menuLis = document.querySelectorAll(".menu>li")
        this.opinionDiv = document.querySelector(".opinion")
        this.authorDiv = document.querySelector(".author")
        this.formInputs = document.querySelectorAll("form>input")
        this.formMessage = document.querySelector("#message")
        this.submitForm = document.querySelector("form>button")
        this.galleryDiv = document.querySelector(".gallery .wrapper")
        this.gallery = [...document.querySelectorAll(".gallery img")]
        this.formSection = document.querySelector(".valuation form")
        this.inputs = [...document.querySelectorAll(".valuation input, .valuation textarea, .valuation button")]
        this.contactInfo = document.querySelector(".contact .info")
        this.map = document.querySelector("#map")

        this.menuClass = new Menu(this.nav, this.menu);
        this.slider = new Slider(this.opinionDiv, this.authorDiv)
        this.form = new Form(this.formInputs, this.formMessage)
        this.scroll = new Scroll()
        

        this.nav.addEventListener("click", this.menuClass.showMenu.bind(this))
        this.menuLis.forEach(li => li.addEventListener("click", this.menuClass.goToSection.bind(this)))

        // document.addEventListener("scroll", this.MenuClass.stickToTop.bind(this))
        this.submitForm.addEventListener("click", this.form.checkForm.bind(this))

        setInterval(this.slider.changeSlide, 8000)

        this.scroll.showGallery(this.gallery, this.galleryDiv)
        this.scroll.showForm(this.formSection, this.inputs)
        this.scroll.showContact(this.contactInfo, this.map)
        document.addEventListener("scroll", () => this.scroll.showGallery(this.gallery, this.galleryDiv))
        document.addEventListener("scroll", () => this.scroll.showForm(this.formSection, this.inputs))
        document.addEventListener("scroll", () => this.scroll.showContact(this.contactInfo, this.map))

    }
}

const app = new App()