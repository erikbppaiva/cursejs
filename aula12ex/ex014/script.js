function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 22
msg.innerHTML = `Agora são ${hora} horas...`

if(hora >= 0 && hora < 12 ){
    //bom dia
    img.src = 'fotomanha.jpg'
    window.document.body.style.background = '#e2cd9f'


}else if (hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'fototarde.jpg'
    window.document.body.style.background = '#b9846f'

}else {
    //boa noite
    img.src ='fotonoite.jpg'
    window.document.style.body.background = '#51514'
    }
}