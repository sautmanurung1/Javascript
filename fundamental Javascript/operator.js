/* Operator */
// Pada materi ini kita akan mempelajari tentang operator yang terdapat pada JavaScript. Operator dalam bahasa pemrograman sendiri adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, relasional, atau logika untuk memberikan hasil tertentu.

/* Assignment Operator */
/* Dari contoh kode yang kita gunakan sebelumnya, sebenarnya kita sudah menggunakan assignment operator. Operator ini digunakan untuk memberikan nilai pada variabel.
Pada dasarnya operator ini adalah tanda sama dengan (=), di mana tanda ini digunakan untuk menginisialisasi nilai pada variabel. Tempatkan variabel yang ingin diberi nilai di sebelah kiri, sementara nilainya di sebelah kanan. Di antara keduanya terdapat operator assignment. */
// CONTOH : a = b;
/* Expression di atas berarti kita menginisialisasikan nilai a pada variabel b, sehingga nilai a sekarang memiliki nilai yang sama dengan b.
Ada beberapa assignment operator tambahan lain dalam menginisialisasikan nilai pada variabel. Kita bisa menyebutnya sebagai shortcut dalam menentukan nilai. Contohnya: */
let x = 10;
let y = 5;

x += y;
console.log(x);

// Pada contoh kode di atas, terdapat expression x += y; Apa artinya? Assignment operator tersebut digunakan sebagai shortcut dari x = x + y. Cara ini juga dapat digunakan pada operator aritmatika lain seperti, perkalian, pengurangan, pembagian, dan lainnya.

let a = 10;
let b = 5;

a += b; //artinya -> a = a+ b
a -= b; // artinya -> a = a - b
a *= b; //artinya -> a = a * b
a /= b; // artinya -> a = a / b
a %= b; //artinya -> a = a % b


/* Comparison Operator */

// Sekarang kita sudah mengetahui bagaimana cara menyimpan nilai pada sebuah variabel. Nah, selanjutnya kita akan belajar mengenai operator komparasi sebagai logika dasar dalam membandingkan nilai pada JavaScript.
// Terdapat serangkaian karakter khusus yang disebut dengan operator pembanding/komparasi yang dapat mengevaluasi dan membandingkan dua nilai. Berikut daftar operator dan fungsinya:

// Operator == Memiliki fungsi membandingkan nilai apakah sama. (tidak identik).
// Operator != Memiliki fungsi membandingkan kedua nilai apakah tidak sama. (tidak identik).
// Operator === Memiliki fungsi membandingkan kedua nilai apakah identik
// Operator !== Memiliki fungsi membandingkan kedua nilai apakah tidak identik 
// Operator > Memiliki fungsi Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua
// Operator >= Memiliki fungsi Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua
// Operator < Memiliki fungsi membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua 
// Operator <= Memiliki fungsi membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.

/* Ketika kita melakukan perbandingan antara dua nilai, JavaScript akan mengevaluasi kedua nilai tersebut dan mengembalikan boolean dengan nilai hasil perbandingan tersebut, baik false atau true. Berikut contohnya: */
let c = 10;
let d = 12;

console.log(c < d);
console.log(c > d);


/* Perbedaan antara "sama" dan "identik" */

/* Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).

Kita sudah mengetahui bahwa setiap nilai pasti memiliki tipe data baik itu number, string atau boolean. Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, tetapi keduanya tidak benar-benar sama.

Hal inilah yang membedakan antara sama dan identik pada JavaScript. Jika kita ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan == tapi jika kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.

Contohnya seperti berikut: */

const aString = '10';
const aNumber = 10;

console.log(aString == aNumber)
console.log(aString === aNumber)


/* Logical Operator */

/* Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, yakni dengan logical operators. Dengan logical operator, kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.

Pada JavaScript terdapat tiga buah karakter khusus yang berfungsi sebagai logical operator. Berikut macam-macam logical operator dan fungsinya: */

// Operator && -> Deskripsi : Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).

// Operator || -> Deskripsi : Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (Bernilai True).

// Operator ! -> Deksripsi : Operator tidak (not). Digunakan untuk membalikkan suatu kondisi 

/* CONTOH : */

let e = 10;
let f = 12;

/* AND Operator */
console.log(e < 15 && f > 10); // (true && true ) -> true
console.log(e > 15 && f  > 10); // (false && true ) -> false

/* OR Operator */
console.log(e < 15 || f > 10); // (true || true ) -> true
console.log(e > 15 || f > 10); // (false || true ) -> true
console.log(!(e < 15)); // !(true) -> false
console.log(!(e < 15 && f > 10)); // !(true && true ) -> !(true) -> false

/* Mungkin sebagian dari kita bertanya, sebenarnya apa kegunaan dari nilai boolean selain hanya menampilkan nilai true dan false saja? Pada pembahasan tipe data sudah pernah disebutkan bahwa boolean merupakan salah satu kunci dari logika pemrograman, karena boolean dapat mengontrol bagaimana alur program kita akan berjalan.

Lantas bagaimana cara boolean mengontrol sebuah aliran program? Pada materi selanjutnya, kita akan membahas mengenai if/else statement yang dapat mengontrol flow pada program, tentunya pada penggunaan statement boolean ini sangat berguna. */