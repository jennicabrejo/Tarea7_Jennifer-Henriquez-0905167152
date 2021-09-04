function InicialMayuscula(mayu) {
    return mayu.toLowerCase().split(' ').map(function(letras) {
        return letras[0].toUpperCase() + letras.substr(1);
    }).join(' ');
}
let oracion = "quezadilla de jutiapa";
console.log(oracion);
console.log(InicialMayuscula(oracion));


function Datos() {
    let contendor = document.querySelector('#app');
    let html = `<ul>
    <p>Oración con inicial mayúscula en cada palabra</p>
    <li> Entrada: ${oracion}</li><br>
    <li> Salida: ${InicialMayuscula(oracion)}</li><br>
    
    </ul>`;
    console.log(html);
    contendor.innerHTML = html;
}

Datos();