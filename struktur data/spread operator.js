/* Spread Operator */

/* Masih terkait dengan array, ES6 memiliki fitur menarik untuk membantu pengelolaan array menjadi lebih mudah, yaitu spread operator.

Sesuai namanya "spread", fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...). Mari kita lihat contoh kode berikut : */
// Contoh :

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites);

/* Pada kode tersebut hasil yang dicetak adalah sebuah array (ditunjukkan dengan tanda []), karena memang kita mencetak nilai favorites itu sendiri. Nah, dengan menggunakan spread operator kita dapat menyebarkan nilai - nilai dalam array tersebut. */

const Favorites = ["Seafood", "Goreng", "Salad", "Nugget", "Soup"];

console.log(...Favorites);

/* Terlihat perbedaannya? Mengapa bisa demikian? Spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen sesuai panjang nilai array - nya. Sehingga jika kita menuliskan kode seperti ini: 

Contoh :

console.log(...favorites);

sama seperti kita menuliskan kode seperti ini :

console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini : */

const favorite = ["Goreng", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorite, others];

console.log(allFavorites);

/* Nilai array tidak akan tergabung. Alih - alih menggabungkan nilainya, variablenya allFavorites menjadi array baru yang menampung dua array di dalamnya. Nah, lantas bagaimana jika kita mencoba menggunakan spread operator? */

const favorit = ["Onde - onde", "Salad", "Nugget", "Soup"];
const lainnya = ["Cake", "Pie", "Donut"];

const allFavorit = [...favorit, ...lainnya];

console.log(allFavorit);

/* Yup, dengan menggunakan spread operator nilai dua array tersebut berhasil tergabung. 

Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas */

const obj1 = { firstname : 'Saut', age : 20 };
const obj2 = { lastname : 'Manurung', gender : ' M '};

const newObj = { ...obj1, ...obj2 };

console.log(newObj);