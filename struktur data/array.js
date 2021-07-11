/* Array */

/* Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variable. Contoh: */

let myArray = ["Cokelat", 42.5, 22, true, "programming"];

console.log(myArray);

/* Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang didalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

Contoh :
console.log(myArray[1]);

Jika anda mengira bahwa konsol akan menampilkan teks "cokelat", maka tebakan anda kurang tepat. Dalam sebuah array, indeks dimulai dari 0, sehingga ketika kita mengakses data pada myArray yang berada pada indeks ke-1 artinya data tersebut merupakan data pada posisi ke-2. Jadi nilai yang akan ditampilkan pada konsol adalah 42.5. */

let myArray1 = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray1[1]);

/* lalu, apa yang akan terjadi jika kita berusaha mengakses index di luar ukuran array-nya? jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined. index terakhir array selalu jumlah nilai array -1. */

let myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray2[0]);
console.log(myArray2[1]);
console.log(myArray2[2]);
console.log(myArray2[3]);
console.log(myArray2[4]);
console.log(myArray2[5]);
console.log("Panjang nilai myArray adalah " + myArray2.length + ".");

/* Sejauh ini kita baru belajar menginisialisasi dan mengakses elemen dari sebuah array. Pastinya Anda bertanya, "Bagaimana kita memanipulasi data pada array tersebut?"

Nah, untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). Fungsi push ini akan menambahkan data di akhir array. */

const myArray3 = ["Coklat", 42.5, 22, true, "Programming"];

myArray3.push('Orang ganteng');
console.log(myArray3);

/* Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop(). */

const myArray4 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray4.pop();
console.log(myArray4);

/* Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari array. Sementara unshift() digunakan untuk menambahkan elemen di awal array. */

const myArray5 = ["Pink", 42.9, 55, true, "Programming"];

myArray5.shift();
myArray5.unshift("Yellow");

console.log(myArray5);

/* Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object, kita bisa menggunakan keyword delete. */

const myArray6 = ["Pink", 10,5, 99, true, "Programming"];

delete myArray6[1];
console.log(myArray6);

/* Namun, perhatikan disini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan metode splice()  seperti ini : */

const myArray7 = ["Green", 95.9, 52, true, "Programming"];

myArray7.splice(2, 1);
console.log(myArray7);