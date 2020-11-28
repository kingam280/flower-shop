export class Scroll {
    constructor() {
        const _headers = [...document.querySelectorAll("h2")]

        this.showHeaders = () => {
            const scroll = window.scrollY

            _headers.forEach((header, index) => {
                const fromTop = header.offsetTop

                if (header[index] === 0) {
                    header.classList.add("active")
                } else {
                    if (scroll >= fromTop) header.classList.add("active")
                    if (scroll < fromTop) header.classList.remove("active")
                }

                
            })
        }
        
    }
    showWhenEnter() {
        
    }
    showGallery (gallery, galleryDiv) {
        const scroll = window.scrollY
        const fromTop = galleryDiv.offsetTop
        const height = window.innerHeight
        let i = 0
        gallery.forEach((item, i) => {
            if (scroll > fromTop - 0.8 * height) {
                function showPhoto() {
                    item.classList.add("active")
                }
                setTimeout(showPhoto, i * 200)
            }

        })
    }
    showForm(form, inputs) {
        const scroll = window.scrollY;
        const fromTop = form.offsetTop;
        const height = window.innerHeight;
        let i = 0
        inputs.forEach((item, i) => {
            if (scroll > fromTop - 0.8 * height) {
                function showInput() {
                    item.classList.add("active")
                }
                setTimeout(showInput, i * 300)
            }
        })
    }
    showContact() {

    }
    
}