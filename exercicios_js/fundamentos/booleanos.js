let isActvo = false
console.log(isActvo)


isActvo = true
console.log(isActvo)

isActvo = 1
console.log(!!isActvo)


console.log("Os verdadeiros são...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!! Infinity)
console.log(!!(isActvo = true))


console.log("Os falso são...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActvo = false))

console.log("para finalizar")
console.log(('' || null || 0 ||' epa'))

let nome = ""

console.log(nome || 'desconhecido')