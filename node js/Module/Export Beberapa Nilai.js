/* Export Beberapa Nilai Pada Node.js */

/* Pada materi sebelumnya kita telah mengetahui cara export nilai dari suatu berkas Javascript. Lantas bagaimana jika kita perlu meng - export beberapa nilai sekaligus?

Mari kita contohkan dengan menambahkan variable isCoffeeMachineReady pada berkas state.js seperti berikut :

const coffeeStock = {
    arabica : 100,
    robusta : 150,
    liberica : 200
};

const isCoffeeMachineReady = true;

Kita tidak bisa melakukan export dari kedua nilai di atas dengan cara seperti di bawah ini :

module.exports = coffeeStock;
module.exports = isCoffeeMachineReady;

Baris kode kedua berarti kita menginisialisasikan ulang nilai properti module.exports sehingga nilai yang di exports hanya variable isCoffeeMakerReady.

Solusinya adalah kita tetap mengexport satu nilai, tetapi kita akan memanfaatkan object literals ({}).

Module.exports = {coffeeStock, isCoffeeMachineReady};

Jika kita lihat nilai module pada console, nilai dari properti exports merupakan sebuah object yang menampung nilai dari object coffeeStock dan variable isCoffeeMachineReady.

Module {
  id: '.',
  path: '/home/dicoding/Playground/javascript/CoffeeMachine',
  exports: {
    coffeeStock: { arabica: 100, robusta: 150, liberica: 200 },
    isCoffeeMachineReady: true
  },
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

lalu bagaimana cara import kedua nilai tersebut? Masih ingat dengan materi destructuring object? Pada berkas index.js kita gunakan teknik destructuring object untuk mendapatkan nilai yang di - import seperti ini :

const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
 

Namun ingat, ketika menggunakan destructuring object pastikan penamaan variable lokal sesuai dengan properti objectnya. Jika tidak, maka variable tersebut akan menghasilkan undefined.


*/