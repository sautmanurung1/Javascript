/* Arrow Function */

/* ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefenisikan menggunakan tanda panah atau fat arrow (=>). Tentunya penulisan arrow function ini akan lebih singkat. 

Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. itu sebabnya arrow function memiliki nama lengkap "arrow function expression".
Contoh :


Regular Function :

function declaration :
function sayHello(greet){
    console.log(`${greet}!`);
}
function expression :
cont sayName = function (name) {
    console.log(`Nama Saya ${name}`)
}


Arrow Function :

Function Expression:
const sayHello = (greet) => {
    console.log(`${greet}!`)
}

const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal.
Contoh :

const sayName = (name) => {
    console.log(`Nama Saya  ${name}`)
}

Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti berikut : */

const sayName = named => {
    console.log(`Nama saya ${named}`)
}

sayName("Saut Ganteng Sekali");

/* Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini : */

const sayHallo = () => {
    console.log("Selamat Pagi Semuanya!")
};

sayHallo();

/* Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis. */

const sayNama = nama => console.log(`Nama saya ${nama}`) ;
sayNama("Saut Manurung Ganteng Sekali");

const panggilHalo = () => console.log("Selamat Pagi semuanya! ");
panggilHalo();

/* Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris). */

const multiply = (a, b) => a * b;
console.log(multiply(10, 20));