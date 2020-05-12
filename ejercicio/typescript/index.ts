/**
 * Inferfaces
 */
enum Color{
    Rojo = 'Rojo',
    Verde = 'Verde'
}
interface Rectangulo{
    ancho:number
    alto:number
    color?: Color
}
let rect: Rectangulo={
    ancho:4,
    alto:6
}
function area(r:Rectangulo):number{
    return r.alto*r.ancho
}
const areaRect = area(rect)
console.log(areaRect)

rect.toString = function(){
    return this.color ? `Un Rectangulo ${this.color}`:`Un rectangulo`
}
console.log(rect.toString())