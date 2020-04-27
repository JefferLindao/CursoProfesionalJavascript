/**
 * uso de Call apply bing
 */

function saludar() {
    console.log(`Hola, soy ${this.name} ${this.apellido}`)
}
const jeffer = {
    name: "Jefferson",
    apellido: "Lindao"
}
saludar.call(jeffer)

function caminar(metros, direccion) {
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`)
}
caminar.call(jeffer, 56, 'norte')

caminar.apply(jeffer, [68, 'sur'])

const maria = {
    name: "Maria",
    apellido: "Suarez"
}
const mariasaluda = saludar.bind(maria)
mariasaluda()

const mariaCamina = caminar.bind(maria, 256)
mariaCamina('oeste')

const buttons = document.getElementsByClassName("call-apply-bing")
    /* button.forEach(button => {
        button.onclick = () => alert("Nunca pares de aprender!")
    }); */

Array.prototype.forEach.call(buttons, button => {
    button.onclick = () => alert("Nunca pares de aprender!")
});