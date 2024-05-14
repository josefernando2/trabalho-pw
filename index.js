var data = new Date
var hora = data.getHours()
var minutos= data.getMinutes()


function atualizacao(){
   
    var texto= document.getElementById('txt')
    var imagem= document.getElementById('img')
    var data = new Date
    var hora = data.getHours()
    var minutos= data.getMinutes()
   texto.innerHTML=`HORA CERTA: ${hora}h ${minutos}min` 
}



if (hora>5 && hora<=12) {
    manha.src='manha.jpeg'
} else if (hora>=13 && hora<=17){
    manha.src='tarde.jpeg'
} else if (hora>=18) {
    manha.src='noite.jpeg'
}
