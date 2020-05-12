/**
 * tipo de dato booleano
 */
let muted: boolean = true 
muted = false 
/**
 * tipo de dato number
 */
let age = 4
let numerador: number = 43
let denominador: number = age
let resultado = numerador/denominador
/**
 * tipo de dato string
 */
let nombre: string = 'Jefferson'
let saludo = `Me llamo ${nombre}`
/**
 * tipo arreglo
 */
let people: string[] = []
people=['Jefferson','Fernado','Gonzalo']

let peopleAndNumber: Array<string|number>=[]
peopleAndNumber.push('Jose')
peopleAndNumber.push(1523)
// Enum
enum Color{
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}
let colorFavorito: Color = Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)
// Any
let comodin: any = 'Joker'
// Object
let someObject: object  = {
    type:'Wildcard'
}