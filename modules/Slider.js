export class Slider {
    constructor(opinionDiv, authorDiv) {
        const _opinions = ["Zawsze duży wybór, świeże kwiaty oraz przystępne ceny :) I oczywiście życzliwa obsługa.", "Polecam 🌷 - wspaniałe bukiety, przemiła obsługa i atrakcyjne ceny. Pełna rekomendacja 👍", "Polecam Polecam Polecam ! Najlepsza kwiaciarnia w Krakowie, osoby tam pracujące to profesjonaliści pełni pasi i w 100 procentach oddani temu co robią."]
        const _authors = ["- majkel5454", "- Oskar J", "- Maciek C"]
        let currentSlide = 0

        this.opinionDiv = opinionDiv
        this.authorDiv = authorDiv


        this.changeSlide = () => {
            currentSlide++
            if (currentSlide >= _opinions.length) currentSlide = 0
            this.opinionDiv.textContent = _opinions[currentSlide]
            this.authorDiv.textContent = _authors[currentSlide]
        }
    }

}