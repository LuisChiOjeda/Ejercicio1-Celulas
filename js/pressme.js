
//ocultar y mostrar
function pressme(name){  
    if(name.style.display== "none"){
        name.style.display="block";
    }else{
        name.style.display="none";
    }
}
//Fecha actual para cupon
var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth();
var ano = fecha.getFullYear();
   document.getElementById('cupon').innerHTML+= dia +" de "+(mes+1) +" del "+ano; 
   
   document.getElementById('cupon-f').innerHTML+= (dia+5) +" de "+(mes+2) +" del "+ano; 
//contador para el cupon   
var cont;
   cont = Math.round(Math.random()*30)
   document.getElementById('cupon-cont').innerHTML+= "Cupones restantes "+cont;       

//derechos reservados
document.body.oncopy = function() {
   alert("Todos los derechos reservados Lexxcorp © 2021");
return false;};

//modal
var modal = document.getElementById("modal-s");
var btn = document.getElementById("btn-s");
var span = document.getElementsByClassName("close")[0];

function clickm() {
    modal.style.display = "block";
}
function clickc(){
    modal.style.display = "none";
}             