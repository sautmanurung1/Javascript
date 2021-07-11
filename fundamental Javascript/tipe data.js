/* Tipe Data */
// Pada materi sebelumnya kita telah belajar tentang variabel untuk menyimpan nilai. Nilai yang kita tetapkan pada variabel pasti memiliki tipe data. Tipe data merupakan pengklasifikasian data berdasarkan jenisnya. Pada JavaScript terdapat beberapa tipe data sebagai berikut:

/* Undefined */
// Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined. Contoh:
let x;
console.log(typeof(x));

/* fungsi dari typeof() digunakan untuk memastikan tipe data pada variable dengan mengembalikan tipe data tersebut dalam bentuk teks */

// Contoh lain dengan memasukkan angka di dalam x nya 

let y = 100; // ini jika angka nya tidak desimal atau tidak memiliki koma
console.log(typeof(y));
// hasilnya akan menjadi number atau angka

let z = 22.45; // ini jika angka nya memiliki koma atau berbentuk angka desimal 
console.log(typeof(z));

// hasilnya akan menjadi number atau angka


// Contoh tipe data yang menggunakan operator
let a = 12;
let b = 9;

console.log(a + b); //penjumlahan
console.log(a - b); //pengurangan
console.log(a * b); //perkalian
console.log(a / b); //pembagian
console.log(a % b); //sisa hasil bagi

/* Increment dan Decrement */
// Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

/* Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya. */

/* Increment */
let postfix = 5;
console.log(postfix++);
// output : 5
console.log(postfix);
// output : 6

let prefix = 5;
console.log(++prefix);
// Output : 6

/* Decrement */
let postTest = 10;
console.log(--postTest); //output 9
console.log(postTest); // output 9
console.log(postTest--); // output 9


/* BIG INT */
// Pada JavaScript, tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1). Untuk kebutuhan umum, sebenarnya nilai tersebut sudah sangat cukup. Namun, akan ada kebutuhan tertentu di mana kita membutuhkan cakupan nilai yang lebih besar, seperti untuk kriptografi atau menentukan waktu hingga presisi microsecond.

const bignumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bignumber);
console.log(myInt);

const bigIntButSmall = 7n;
// Kita juga bisa menggunakan BigInt untuk operasi aritmatika pada umumnya. Yang membedakan adalah pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal. Contohnya adalah seperti ini:
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n); 
console.log(5n % 2n);


/* String */
// Tipe data selanjutnya adalah string yang merupakan sebuah teks. Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya. Contohnya: 
let greet = "Halo";
console.log(typeof(greet));

// Jika kita menggunakan gabungan petik satu dan petik dua

const question = ' "What do you think of JavaScript? " I asked'
console.log(question);

// jika menggunakan gabungan petik satu dan petik dua tetapi di dalam tulisan nya itu ada petik satu tambahan 

/* Bagaimana jika petik satu seperti ini :
const answer = ' "I Think its awasome " he answered confidently '
console.log(answer); 
Hasilnya akan error */

// jika ada kalimat yang menggunakan tanda petik satu tambahan diluar kita memasukkan petik pembuka atau pun petik penutup diakhir program kita dapat menggunakan BACKSLASH (/), mekanisme ini juga dikenal dengan nama ESCAPE STRING
const answered = ' "I think it\'s awasome" he answered confidently '
console.log(answered);

// Backslash sebelum tanda petik akan memberitahukan interpreter bahwa itu hanyalah tanda petik dan tidak boleh ditafsirkan sebagai pembatas string. Selain tanda petik, backslash juga berguna untuk mengabaikan simbol lain yang menimbulkan ambigu di dalam string, contohnya seperti backslash itu sendiri.
console.log("windows path: C:\\Program Files\\MyProject");

// Pada String, kita juga dapat menggunakan operator plus (+). Operator tersebut berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks. Contohnya seperti ini:
let salam = "Helo";
let tambahanSalam = salam + salam;
console.log(tambahanSalam);

/*Ingat, string concatenation seperti di atas akan menggabungkan string apa adanya, sehingga jika Anda ingin menggabungkan dua kata atau lebih perlu menambahkan spasi sendiri.
Selain concatenation, string pada JavaScript juga mendukung string interpolation. Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template. Contohnya adalah seperti berikut: */
const myName = "Saut Manurung";
// Perhatikan bahwa untuk mendefinisikan string template, Anda perlu menggunakan backticks (`), biasanya terletak di keyboard di sebelah kiri tombol 1). Di dalam string letakkan variabel yang ingin dimasukkan ke dalam placeholder ${myName}.
console.log(`Hello, myName is ${myName}. `);


/* Boolean */

// Boolean hanya memiliki dua nilai, yaitu true atau false. Tipe data ini menjadi kunci utama dalam penentuan logika. Kita akan banyak menggunakannya nanti dalam materi if/else statement. Untuk menetapkan nilai boolean pada variabel, gunakan keyword true atau false seperti di bawah ini.
let c = true;
let d = false;

console.log(typeof(c));
console.log(typeof(d));

// Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<). Contohnya:

const e = 10;
const f = 12;

let isGreater = e > f;
let isLess = e < f;

console.log(isGreater);
console.log(isLess);


/* NULL */
/* Tipe berikutnya adalah null. Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel. Null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.

Terkadang kita perlu membuat sebuah variabel, namun kita belum memerlukan nilai apa-apa dan tidak ingin terikat oleh tipe data apa pun. Nah, daripada kita tidak menetapkan nilai apa pun (variabel akan undefined) sebaiknya kita beri nilai null pada variabel tersebut dan ubah nanti ketika kita membutuhkannya.

Untuk menetapkan null pada variabel, kita dapat gunakan keyword null ketika variabel tersebut diinisialisasi. */
let someLaterData = null;
console.log(someLaterData);


/* Symbol */
// Symbol adalah tipe data baru yang dikenalkan pada ES6. Tipe data Symbol digunakan untuk menunjukkan identifier yang unik. Ketika membuat Symbol, kita bisa memberikan deskripsi atau nama symbol seperti ini:
const id = Symbol ("id");

console.log(id);

// Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda. Contohnya lihat kode berikut:
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

// Symbol ini umumnya digunakan sebagai nama property dari Object. Object sendiri merupakan tipe data kompleks untuk menyimpan berbagai struktur data. Kita akan segera bertemu dan mempelajari tentang object pada modul Data Structure.