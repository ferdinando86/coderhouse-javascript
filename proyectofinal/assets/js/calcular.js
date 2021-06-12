

function calcularCredito() {
    event.preventDefault() //evita refrescar la pagina
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let dni = $("#dni").val();
    let direccion = $("#direccion").val();
    let telefono = $("#telefono").val();
    let nacimiento = $("#nacimiento").val();
    let importe = $("#importe").val();
    let plazo = $("#combo-plazo").val();
    let valorcuota = "";

    persona = new Persona(nombre, apellido, dni, direccion, telefono, nacimiento, importe, plazo);

    switch (plazo) {
        case "6 meses":
            valorcuota = (persona.importe * 1.40)/6;
            break;
        case "12 meses":
            valorcuota = (persona.importe * 1.60)/12;
            break;
        case "18 meses":
            valorcuota = (persona.importe * 1.80)/18;
            break;
        case "24 meses":
            valorcuota = (persona.importe * 2)/24;
            break;
    }
    mostrarResultado(persona, valorcuota);
    localStorage.clear() 
}