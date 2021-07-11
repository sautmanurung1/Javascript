/* ES6 Module */

/* Untuk melakukan export dan import module javascript, ada dua cara yang bisa kita gunakan. Sebelumnya kita telah mempelajari salah satu cara yaitu format CommonJS yang berjalan di lingkungan Node.Js. Sejak ES6, JavaScript memiliki sistem modular secara native. Karena itu, sistem ini dapat dijalankan baik pada environment Node.js maupun browser.

Pada Node.js sebelumnya tidak ada perbedaan antara export satu atau beberapa nilai. Semua nilai yang akan diexport di jadikan nilai dari properti module.exports, pada ES6 module, jika kita hanya mengexport satu nilai pada sebuah berkas javascript baik itu primitive value, function, array, object,  atau class, kita gunakan keyword export default. Contohnya seperti ini :

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};
 
export default coffeeStock;

Lalu untuk mengimport nilainya kita dapat menggunakan keyword import ... from seperti berikut ini :

import coffeeStock from "./state.js"

Berbeda dengan gaya Node.js, kita gunakan keyword import ketika mendeklarasikan variable yang di - import. Kita juga menggunakan keyword from untuk menentukan lokasi berkas Javascript - nya.

Ketika menggunakan export default, kita dapat menggunakan penamaan apa saja saat mendaklarasikan variable untuk menyimpan nilai yang diimport.

import stock from "./state.js";

Hal tersebut aman untuk dilakukan karena dengan menggunakan export default dapat dipastikan hanya satu nilai yang diexport pada satu berkas Javascript.

Setelah kita berhasil mendapatkan nilai yang diexport, kita dapat menggunakan nilainya layaknya variable lokal.

/* Index.js

import coffeeStock from './state.js';

const displayStock = stock => {
    for(const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock);

/* state.js

const coffeeStock = {
    arabica : 100,
    robusta : 150,
    liberica : 200
};

export default coffeeStock;

Sekarang jalankan kode di atas pada project anda. Apakah muncul error seperti berikut?


Jika iya, itu disebabkan karena berkas Javascript yang kita buat tidak dianggap sebagai module. Saat ini, fitur ES6 module tidak secara default diaktifkan. Pesan error diatas menyebutkan dua cara bagaimana mengaktifkan ES6 Module. Dua cara tersebut adalah menambahkan properti pada package.json atau dengan mengubah ekstensi .js menjadi .mjs. Mari kita gunakan cara pertama yang lebih sederhana.

{
  "name": "coffeemachine",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}

Tambahkan properti type dengan nilai module pada berkas package.json. Lalu jalankan kembali program anda. Seharusnya Node.js sudah berjalan dengan baik dan menampilkan output seperti berikut :

arabica
robusta 
liberica

Jika sebelumnya kita hanya melakukan eksport satu nilai pada berkas javascript menggunakan default export, selanjutnya kita akan membahas bagaimana mengexport banyak nilai dalam satu berkas javascript menggunakan ES6.

Named Export digunakan untuk mengexport banyak nilai dalam berkas Javascript. Cara kerjanya mirip seperti pada Node.js. Nilai yang akan dieksport di tuliskan di dalam object literals, seperti ini :

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};
 
const isCoffeeMachineReady = true;
 
export {coffeeStock, isCoffeeMachineReady};

Lalu untuk mendapatkan nilai yang diexport melalui named.export, kita gunakan destructuring object.

import { coffeeStock, isCoffeeMachineReady } from './state.js';
 
console.log(coffeeStock);
console.log(isCoffeeMachineReady);

Karena named import menggunakan teknik destructuring object untuk mendapatkan nilai, maka pastikan penamaan variable sesuai dengan nama variable yang di export. Jika nama tidak sesuai, akan terjadi seperti hal berikut :

import { stock, isCoffeeMachineReady } from './state.js';
 
/* output
SyntaxError: The requested module './state.js' does not provide an export named 'stock'.


Namun, jika kita tetap ingin mengubah penamaan variable dari named import, kita bisa melakukannya dengan menambahkan keyword as setelah penamaan variablenya.

import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
console.log(stock);
console.log(isCoffeeMachineReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/