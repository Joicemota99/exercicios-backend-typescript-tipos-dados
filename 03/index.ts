const multiplicadores: number[] = [1,5,3]

const multiplicanos = (numero : number) : string[] =>{
    return Array.from({length:11},(_, index) => `${numero} x ${index} = ${numero * (index)}`)
}

const tabuada = multiplicadores.map(numero => multiplicanos(numero))

console.log(tabuada)
