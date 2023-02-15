function gerar() {
    let valor = document.getElementById('num1')
    let resultado = document.getElementById('tabuada')
    
    if (valor.value.length == 0) {
        alert('Por favor, digite um número!')
        resultado.innerHTML = 'Digite um número acima'
    } else {
        resultado.innerHTML = ''
        let n = Number(valor.value)
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c} `
            item.value = `resultado${c}`
            resultado.appendChild(item)
        }
    }
    
}
