/**
 * Generators
 */

function* simpleGenerator() {
    console.log(`generator Start`)
    yield 1
    yield 2
    yield 3
    console.log(`generator end`)

}

const gen = simpleGenerator()

function* idMaken(params) {
    let id = 1
    while (true) {
        yield id
        id = id + 1
    }
}


function* fibonacci() {
    let a = 1
    let b = 1
    while (true) {
        const nextNumber = a + b
        a = b
        b = nextNumber
        yield nextNumber
    }
}