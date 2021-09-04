const numeros1 = [2, 4, 6];
const cuadrados1 = numeros1.map(function(num) {
    return Math.pow(num, 2);
});

console.log(numeros1);
console.log(cuadrados1);

const numeros2 = [-3, 2, -8, 12, 5];
const cuadrados2 = numeros2.map(function(num) {
    if (num > 0 && num != 5) {
        return Math.pow(num, 2);
    } else if (num === (-8)) {
        return Math.pow(num, 2);
    }
    return num;
});

console.log(numeros2);
console.log(cuadrados2);

const numeros3 = [1, 2, 3, 4, 5];
const cuadrados3 = numeros3.map(function(num) {
    if (num === 2) {
        return Math.pow(num, 2);
    }
    if (num === 4) {
        return Math.pow(num, 2);
    }
    return num;
});

console.log(numeros3);
console.log(cuadrados3);

function Datos() {
    let contendor = document.querySelector('#app');
    let html = `<ul>
    <p>Arreglo 1.</p>
    <li> Entrada: [${numeros1}]</li><br>
    <li> Salida: [${cuadrados1}]</li><br>
    <p>Arreglo 2</p>
    <li> Entrada: [${numeros2}]</li><br>
    <li> Salida: [${cuadrados2}]</li><br>
    <p>Arreglo 3</p>
    <li> Entrada: [${numeros3}]</li><br>
    <li> Salida: [${cuadrados3}]</li>
    </ul>`;
    console.log(html);
    contendor.innerHTML = html;
}
Datos();