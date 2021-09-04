const numero = [10, 20, 30, 20, 30, 40, 60];
let total = numero.reduce((a, b) => a + b, 0);
console.log(numero);
console.log(total);
console.log(`promedio de este arreglo es : ${total/numero.length}`);

function Datos() {
    let contendor = document.querySelector('#app');
    let html = `<ul>
    <p>Promedio del siguiente arreglo</p>
    <li> Entrada: [${numero}]</li><br>
    <li> Salida: El promedio de este arreglo es ${total/numero.length}</li><br>

    </ul>`;
    console.log(html);
    contendor.innerHTML = html;
}

Datos();