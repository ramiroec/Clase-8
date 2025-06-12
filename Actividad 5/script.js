// Variables para los ejemplos de arreglo
let fruits = ["Banana", "Orange", "Apple"];

// Funciones para los números
function showToFixed() {
    const number = parseFloat(document.getElementById('fixedNumber').value);
    document.getElementById('toFixedResult').innerHTML = `
        toFixed(0): ${number.toFixed(0)}<br>
        toFixed(2): ${number.toFixed(2)}<br>
        toFixed(4): ${number.toFixed(4)}<br>
        toFixed(6): ${number.toFixed(6)}
    `;
}

function showNumberConversion() {
    const input = document.getElementById('numberInput').value;
    document.getElementById('numberConversionResult').innerHTML = `Number("${input}"): ${Number(input)}`;
}

function showParseInt() {
    const input = document.getElementById('parseIntInput').value;
    document.getElementById('parseIntResult').innerHTML = `parseInt("${input}"): ${parseInt(input)}`;
}

// Funciones para los arreglos
function addElement() {
    const newElement = document.getElementById('pushInput').value;
    fruits.push(newElement);
    document.getElementById('pushResult').innerHTML = `Arreglo después de push: ${fruits.join(", ")}`;
}

function removeLastElement() {
    fruits.pop();
    document.getElementById('popResult').innerHTML = `Arreglo después de pop: ${fruits.join(", ")}`;
}

function removeFirstElement() {
    fruits.shift();
    document.getElementById('shiftResult').innerHTML = `Arreglo después de shift: ${fruits.join(", ")}`;
}

function sliceArray() {
    const sliced = fruits.slice(1, 3);
    document.getElementById('sliceResult').innerHTML = `Arreglo después de slice: ${sliced.join(", ")}`;
}

function convertToString() {
    document.getElementById('toStringResult').innerHTML = `Arreglo como cadena: ${fruits.toString()}`;
}

function joinArray() {
    document.getElementById('joinResult').innerHTML = `Arreglo unido: ${fruits.join(" * ")}`;
}

function sortArray() {
    fruits.sort();
    document.getElementById('sortResult').innerHTML = `Arreglo ordenado: ${fruits.join(", ")}`;
}
