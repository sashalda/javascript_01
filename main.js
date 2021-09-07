let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let nombreCompleto = "Bienvenido " + nombre + ' ' + apellido;
alert(nombreCompleto);
let medicamentos = prompt("Segun tu medico, ¿cuantas pastillas tenes que tomar por día?");
let mes = 30;
let remediosMensuales = parseInt(medicamentos) * mes;
alert("Vas a tener que tomar " + remediosMensuales + " pastillas por mes"); 