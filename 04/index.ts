const produtoGerado = [
    {
        produto: 'CPU Dual Core 3.0GHZ',
        lote: 321,
        ano: 2022,
        qtd: 5
    }
];

const gerarEtiqueta = (produtoGerado: {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}) : string[] => {
    const resultado: string[] = []

    for(let i=1; i <= produtoGerado.qtd;i++){
        resultado.push(`${produtoGerado.ano}-${produtoGerado.lote}-${i.toString().padStart(3,'0')}`)
    }
    return resultado
};

console.log(gerarEtiqueta(produtoGerado[0]));
