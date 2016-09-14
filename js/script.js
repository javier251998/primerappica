// JavaScript Document
function mostrarMensaje1(){
	alert('alerta desde el archivo js externo');
}
function retornarFecha()
{
	var fecha
	fecha=new Date();
	var cadena=fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
	return cadena;
}
function retornarHora()
{
	var fecha
	fecha=new Date();
	var cadena=fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
	return cadena;
}

function fechahora(){
	var cadena = "La fecha de hoy es: "+retornarFecha();
	document.formulario.horafecha.value =(cadena);
	return cadena;
}
