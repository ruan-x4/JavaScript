function verificar() {
    var pais = document.getElementById('naci')
    var divv = document.getElementById('resposta')
    if(pais.value == 'Brasil') {
        divv.innerHTML = 'Brasileiro'
    } else {
        divv.innerHTML = 'Estrangeiro'
    }
}