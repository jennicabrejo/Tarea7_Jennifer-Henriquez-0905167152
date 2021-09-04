let toda_la_banda = ["Diana", "Monica", "Maria", "Breny"];
let banda = ["Diana", "Monica", "Maria", "Breny"];

console.log(toda_la_banda);

//sacar una copia del arreglo pero no incluir a monica
let pos = toda_la_banda.indexOf("Monica");
let nueva_banda = toda_la_banda.splice(pos, 1);
nueva_banda = toda_la_banda.slice();
console.log(nueva_banda);

//en el nuevo eliminar a Breny
let ul = nueva_banda.pop();
console.log(nueva_banda);

//agregar a Jose al inicio
let nuevo_inicio = nueva_banda.unshift("Jose");
console.log(nueva_banda);

//agregar mi nombre al final 
let nuevo_final = nueva_banda.push("Jennifer");
console.log(nueva_banda);

//obtener item de diana 
let po = toda_la_banda.indexOf("Diana");
console.log(po);

//copia del arreglo orinal, excluir a diana y breny
let nueva = toda_la_banda.slice();
nueva = toda_la_banda.splice(0, 1);
nueva = toda_la_banda.splice(0, 1);

console.log(nueva);

function Datos() {
    let contendor = document.querySelector('#app');
    let html = `<ul>
    <p>Arreglos</p>
    <li> Arreglo Original: [${banda}]</li><br>
    <li> Primera Copia del Arreglo Original: [${nueva_banda}]</li><br>
    <li> Segunda Copia del Arreglo Original: [${nueva}]</li><br>
   
    </ul>`;
    console.log(html);
    contendor.innerHTML = html;
}
Datos();