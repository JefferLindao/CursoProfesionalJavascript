/**
 * Prototype
 */


/* const zelda = {
    name: "Zelda"
}
zelda.saludar = function() {
    console.log(`Hola, soy ${this.name}`)
}
zelda.saludar()

const link = {
    name: "Link"
}
link.saludar = function() {
    console.log(`Hola, soy ${this.name}`)
}
link.saludar() */

/* function Hero(name) {
    const hero = {
        name: name
    }
    hero.saludar = function() {
        console.log(`Hola, soy ${this.name}`)
    }
    return hero
}

const zelda = Hero('Zelda')
zelda.saludar()
const link = Hero('Link')
link.saludar() */

/* const heroMethods = {
    saludar: function() {
        console.log(`yo me llamo, soy ${this.name}`)
    }
}

function Hero(name) {
    const hero = {
        name: name
    }
    hero.saludar = heroMethods.saludar
    return hero
}

const zelda = Hero('Zelda')
zelda.saludar()
const link = Hero('Link')
link.saludar() */

// Object.create
/* const heroMethods = {
    saludar: function() {
        console.log(`Soy superheroe, ${this.name}`)
    }
} */

/* function Hero(name) {
    const hero = Object.create(Hero.prototype)
    hero.name = name
    return hero
}
Hero.prototype.saludar = function() {
    console.log(`Soy superheroe!, ${this.name}`)
}

const zelda = Hero('Zelda')
zelda.saludar()
const link = Hero('Link')
link.saludar() */


function Hero(name) {
    // const hero = Object.create(Hero.prototype)
    this.name = name
        // return hero
}
Hero.prototype.saludar = function() {
    console.log(`NEW:, ${this.name}`)
}

const zelda = new Hero('Zelda')
zelda.saludar()
const link = new Hero('Link')
link.saludar()