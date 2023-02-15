function gerar() {
    var valor = document.getElementById('num1')
    var resultado = document.getElementById('tabuada')
    resultado.innerHTML = 'Digite um número acima'
    if (valor.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        for (c = 1; c <= 10; c++) {
            resultado.innerHTML += ` <br> ${valor.value} x ${c} = ${valor.value * c} `
        }
    }
    
}