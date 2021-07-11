/* LOOP */

/* Ketika menulis program komputer, akan ada situasi dimana kita perlu melakukan hal yang sama berkali - kali. Misalnya kita ingin menampilkan semua nama pengguna yang terdaftar di aplikasi atau sesederhana menampilkan angka 1 sampai 10. Tentunya tidak praktis jika menulis kode seperti berikut :
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

Bagiamana jika kita perlu menampilkan angka 1 sampai 100? sudah terbayang repotnya, bukan? Maka dari itu kita perlu mempelajari teknik yang dapat mengatasi permasalahan tersebut, teknik ini disebut dengan looping. Javascript memiliki banyak opsi untuk melakukan looping atau perulangan kode, antara lain : */

/* FOR LOOP */

// Dari beberapa cara melakukan proses loop pada Javascript, "for" merupakan salah satu cara yang banyak digunakan. Struktur dasar dari for tampak seperti berikut :

/* for(inisialisasi variable; test kondisi; perubahan nilai variable){
    do something
} */

// Berikut ini contoh penerapan secara nyata:

for(let i = 0; i <  5; i++) {
    console.log(i);
}


/* Lebih ringkas, bukan? Mungkin kode tersebut sulit dipahami, jadi mari kita bahas sedikit demi sedikit. Terdapat tiga bagian utama dalam sintaks for diatas :
- Pertama, variable i sebagai index iterasi. Pada variable ini kita menginisialisasi nilai awal dari perulangan.
- Kedua, operasi perbandingan. Pada bagian ini, javascript akan melakukan pengecekan kondisi apakah perulangan masih perlu dilakukan. Jika bernilai true, maka kode di dalam blok for akan dijalankan.
- Ketiga, increment/decrement. Disini kita melakukan penambahan atau pengurangan variable iterasi. Jadi, pada contoh diatas variable i akan ditambah dengan 1 di setiap akhir perulangan. Perubahan nilai ini penting karena jika kita mengubah nilai nya, proses perulangan dapat berjalan selamanya karena kondisi akan terus terpenuhi.


Jika diartikan, maka kode diatas bisa dimaknai dengan "Jika i kurang dari 5, maka tampilkan nilai i" */

/* For of Loop */

/* Cara lain dalam melakukan looping adalah menggunakan for.. of. For of mulai hadir pada ECMAScript 2015 (ES6). Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. 
Sintaks dasar dari for of loop adalah seperti ini:
for(arrayItem of myArray) {
    do something
}
yup, for of tidak membutuhkan banyak statement untuk melakukan looping pada array. Penjelasan tentang array akan lebih detail dibahas pada modul berikutnya. sebagai permulaan, kita bisa menganggap array sebagai kumpulan nilai yang disimpan dalam suatu variable.

Dengan for of nilai tiap array akan diinisialisasi pada variable baru yang kita tentukan pada tiap proses looping-nya. Jumlah proses looping-nya pun akan menyesuaikan dengan ukuran dari array. Sederhananya seperti kita melakukan perintah "Hei Javascript! lakukan perulangan pada myArray, akses tiap nilainya, dan simpan pada variable arrayItem". Pada proses looping kita gunakan variable arrayItem untuk mengakses tiap nilai dari item myArray.

Agak sulit memang menjelaskan dengan kata - kata, mari kita terjemahkan dalam kode secara langsung. */

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];
for(const arrayItem of myArray){
    console.log(arrayItem)
}
/* Lebih mudah dan simpel bukan? */

/* While and do-while */

/* Metode lain untuk melakukan looping adalah dengan statement while. Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan menjalankan kode di dalam blok while ketika bernilai true.

Untuk menampilkan angka 1 sampai 100 dengan while kita bisa menulis kode seperti berikut : */

let a = 1;

while (a <= 100) {
    console.log(a);
    a++;
}

/* Bisa dilihat pada kode di atas bahwa looping dengan whilw tidak memiliki ketergantungan dengan variable iterasi seperti pada for loop. Karena itu,meskipun while dapat melakukan perulangan yang sama dengan for, while lebih cocok digunakan pada kasus dimana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.

Bentuk lain dari while adalah perulangan do - while. */

let b = 1;

do {
    console.log(b);
    b++;
} while (b <= 1000);

/* Kondisi pada while akan dievaluasi sebelum blok kode didalamnya dijalankan, sedangkan do - while akan mengevaluasi boolean expression setelah blok kodenya berjalan. ini artinya kode didalam do - while akan dijalankan setidaknya satu kali. */

/* Infinite Loops */

/* ketika menerapkan perulangan pada program, ada satu kondisi yang perlu kita hindari yaitu inifinite loop. infinite loop atau endless loop adalah kondisi dimana program kita stucked di dalam perulangan. Ia akan berjalan terus hingga menyebabkan crash pada aplikasi dan komputer kecuali ada intervensi secara eksternal, seperti mematikan aplikasi.

Kode berikut adalah contoh dimana kondisi infinite loop dapat terjadi : */

// while

let m = 1;

while (m <= 5) {
    console.log(m);
}

// for 

for(let k = 1; k <= 5; k=1) {
    console.log(k);
}

/* Dapatkah anda menemukan apa yang salah dari kode diatas sehingga terjadi infinite loop?

jawabannya adalah karena variable k selalu bernilai 1. Alhasil, kondisi i <=5 akan selalu bernilai true yang menyebabkan aplikasi akan terus mencetak 1 ke konsol sehingga mengalami crash */