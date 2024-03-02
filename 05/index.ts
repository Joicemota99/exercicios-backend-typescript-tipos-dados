const palavra = (texto:string) =>{
    return texto.split('').join('-')
}
console.log(palavra('programador'))