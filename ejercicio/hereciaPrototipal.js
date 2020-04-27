/**
 * Herencia Protopipal
 */

function Hero(name) {
    this.name = name
}

Hero.prototype.saludar = function() {
    console.log(`NEW:, ${this.name}`)
}

const zelda = new Hero('Zelda')

// propiedades de la instancia
console.log('Name:', zelda.name)

// propiedades de la clase
console.log('Saludar:', zelda.saludar)

// propiedades heredadas ej: toString
console.log('toString:', zelda.toString)

// hasOwnProperty
console.log('hasOwnProperty:', zelda.hasOwnProperty('saludar'))