
let num = document.getElementById('fnum')
let tab = document.getElementById('flist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
     }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML =''        
    } else {
        window.alert('Valor invalido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Digite um número acima')
    } else {
        let tot = valores.length
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]

        for(let pos in valores){
            soma += valores[pos]
            


            if(valores[pos] > maior){
                maior = valores[pos]
            }if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>A soma dos números digitados é ${soma}`
        res.innerHTML += `<p>A média dos números ${media}`
        res.innerHTML += `<p>A quantidade de elementos é ${tot}</p>`
        res.innerHTML += `<p>O maior número digitado é ${maior}`
        res.innerHTML += `<p>O menor número digitado é ${menor}`
    }
}