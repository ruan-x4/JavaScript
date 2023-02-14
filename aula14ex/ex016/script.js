function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //alert('[ERRO] Faltam dados!')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0 ) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} 😭`   
            }
        } else if (i > f) {
            //contagem regressiva
            for(let c = i; c >= f; c -= p)
            resultado.innerHTML += ` ${c} `
            }
        resultado.innerHTML += `🏁`
    }
}
