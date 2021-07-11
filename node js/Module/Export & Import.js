/* Export & Import */

/* Modul bekerja dengan cara exporting dan importing nilai. Baik itu nilai variable, fungsi, array, object, atau class agar bisa digunakan pada berkas Javascript lain. Satu berkas Javascript terdiri dari satu module yang dapat kita export menjadi lebih dari satu nilai.

Dalam environment Node.js, gunakan perintah module.exports untuk melakukan proses export module. Setiap berkas Javascript yang berjalan pada Node, memiliki object module lokal yang memiliki properti exports. Properti tersebut digunakan untuk mendefenisikan nilai apa yang akan di export dari berkas tersebut.

Buatlah berkas baru bernama State.js pada project anda. Kode dibawah ini merupakan contoh bagaimana melakukan export nilai menggunakan module.exports. 

const coffeeStock = {
    arabica : 100,
    robusta : 150,
    liberica: 200
}

module.exports = coffeeStock;

Kode module.exports = coffeeStock membuat object coffeeStock ditetapkan sebagai nilai dari module.exports. Nilai properti exports ini nantinya bisa di import dan digunakan pada berkas Javascript lain.

Jika anda mencoba melihat nilai module yang ada pada berkas state.js dengan menambahkan kode console.log(module) di akhir berkas, maka kita akan melihat object coffeeStock menjadi nilai dari properti exports.

Module {
  id: '.',
  path: '/home/dicoding/Playground/javascript/CoffeeMachine',
  exports: { arabica: 100, robusta: 150, liberica: 200 },
  parent: null,
  filename: '/home/dicoding/Playground/javascript/CoffeeMachine/state.js',
  loaded: false,
  children: [],
  paths: [
    '/home/dicoding/Playground/javascript/CoffeeMachine/node_modules',
    '/home/dicoding/Playground/javascript/node_modules',
    '/home/dicoding/Playground/node_modules',
    '/home/dicoding/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}

Lalu bagaimana caranya untuk melakukan import atau menggunakan object yang sudah di - export? caranya adalah menggunakan method require().


/* Index.js

const coffeeStock = require('./state');

console.log(coffeeStock);

/* state.js

const coffeeStock = {
    arabica : 100,
    robusta : 150,
    liberica : 200
};

module.exports = coffeeStock;

Dalam inisialisasi variable coffeeStock (nama variable bebas kita tentukan), kita gunakan method require() dengan memberikan parameter lokasi berkas state.js dengan begitu variable coffeeStock akan memiliki nilai module.exports yang sama pada berkas state.js, Setelah mendapatkan nilainya, kita bebas menggunakannya seperti variable lokal pada umumnya.

const coffeeStock = require('./state');

const makeCoffee = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams) {
        console.log("Kopi Berhasil Dibuat");
    } else {
        console.log("Biji Kopi Habis");
    }
}

makeCoffee("robusta", 80);
*/
