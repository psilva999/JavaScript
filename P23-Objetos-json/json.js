let fut = `{
    "j1": "Cristiano Ronaldo",
    "j2": "Messi",
    "j3": "De Bruyne",
    "j4": "Ribamar",

    "tipos": ["atacantes", "Meias", "Completos"],

    "origem": "Planeta terra"
}`

console.log(fut)
console.log (JSON.parse(fut).tipos)