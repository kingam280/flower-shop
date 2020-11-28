export class Form {
    constructor(inputs, message) {
        const _inputs = [...inputs]
        const _message = message

        this.checkForm = (e) => {
            e.preventDefault()
            let errors = []
            const div = document.querySelector(".errors")
            let mail = _inputs.filter(item => item.dataset.key === "e-mail")[0]

            _inputs.forEach( input => {
                if (!input.value) {
                    const inputContent = input.dataset.key;
                    errors.push(inputContent)
                }
            })
            if (!_message.value) errors.push(_message.dataset.key)
            if (!mail.value.includes("@") && !errors.includes(mail.dataset.key)) errors.push(mail.dataset.key)

            if (errors.length > 0) {
                div.innerHTML = `Uzupełnij poprawnie pola: ${errors.map(error => error)}`
            } else {
                div.innerHTML = ""
                this.submit()
            }
        
        }
        this.submit = () => {
            _inputs.forEach(input => input.value = "")
            _message.value = ""
        }
    }

}