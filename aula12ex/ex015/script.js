function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
        if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else   {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-c-h.png')
            }else if(idade < 21){
                //joven
                img.setAttribute('src','foto-j-h.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','foto-a-h.png')
            }else {
                //idoso
                img.setAttribute('src','foto-id-h.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'   
            
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','foto-c-m.png')
            }else if(idade < 21){
                //joven
                img.setAttribute('src','foto-j-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','foto-a-m.png')
            }else {
                //idoso
                img.setAttribute('src','foto-id-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.</br>`
        res.appendChild(img)
    }

}