/* Declaring Function */

/* Fungsi merupakan bagian penting dalam bahasa pemrograman. Tanpa sadar, sebenarnya kita sudah menggunakan sebuah fungsi pada contoh kode yang ada sebelumnya. log() pada console.log() merupakan sebuah function yang berguna untuk menampilkan data pada konsol. Tapi sebenarnya apa itu function? Bagaimana ia bisa bekerja?

Mirip dengan fungsi pada matematika, fungsi dalam pemrograman juga digunakan untuk menghasilkan output berdasarkan input tertentu.

Namun, fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat digunakan secara berulang. Dalam arti lain, kita dapat berpikir bahwa function merupakan sebuah variable yang berisi blok logika. Blok logika tersebut akan dieksekusi ketika variablenya dipanggil.

Semua fungsi memiliki struktur yang sama. Fungsi di deklarasikan dengan keyword function dan nama fungsi nya. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika dan fungsi tersebut.

Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan parameter. Parameter merupakan data yang digunakan pada fungsi untuk diproses di dalam nya. Sebagai contoh, fungsi console.log() dapat menerima argument berupa string atau data lain untuk ditampilkan ke konsol. */

/* Parameter & Argument */

/* Di dalam fungsi kita akan banyak bertemu istilah parameter & argument. Penggunaan istilah ini sering kali tertukar, bahkan di kalangan developer.

Perbedaan mendasar antara keduanya antara lain :

Parameter merupakan variable yang didefenisikan sebagai inputan dari sebuah fungsi. Contoh :

function multiply(a,b) {
    return a * b;
}

Argument merupaka nilai atau expression yang dimasukkan ke dalam fungsi.

Contoh nya :
multiply(3, 4);

Setelah membuat fungsi kita dapat memanggilnya dengan menuliskan nama fungsi diikuti tanda kurung dan memasukkan argument di dalamnya (jika ada). */

function greeting() {
    console.log("Good Morning !")
}

greeting();

/* Tetapi jika sebuah fungsi hanya menjalankan baris kode yang sama dirasa kurang fungsional, bukan? kita dapat membuat fungsi tersebut untuk menerima dan memanfaatkan parameter untuk mengubah perilaku dari fungsinya.

Untuk menambahkan parameter pada fungsi, tambahkan variable di dalam tanda kurung fungsi. Namun, variable tersebut tidak memerlukan keyword var, let,  ataupun const. Kita juga bisa menambahkan lebih dari satu parameter dengan memberikan tanda koma antar variable parameternya. Contohnya fungsi greeting akan kita tambahkan parameter name dan language seperti ini :

function greeting(name, language) {
    if(language === "English"){
        console.log('Good Morning ${name}! ');
    } else if (language === "French"){
        console.log('Bonjour ${name}! ');
    } else {
        console.log('Selamat Pagi ${name}!');
    }
}

Sehingga dalam memanggilnya pun kita perlu mengirimkan dua buah nilainya sebagai argumen : */

function greetings(named, language) {
    if(language === "English"){
        console.log(`Good Morning ${named}!`);
    } else if(language === "French") {
        console.log(`Bonjour ${named}!`);
    } else {
        console.log(`Selamat Pagi ${named}!`);
    }
}

greetings("Harry", "French");

/* Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai. Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variable.
Contohnya seperti ini : */

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

/* Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan dikembalikan. Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain. Seperti inilah fungsi greeting() jika kita ubah agar mengembalikan nilai string : */

function salam(nama, bahasa){
    if(bahasa === "Medan"){
        return `Horas ${nama}`
    } else if(bahasa === "Jawa") {
        return `Sugeng Rawuh ${nama}`;
    } else {
        return `Selamat Datang ${nama}`;
    }
}

let PesanSalam = salam("saut", "Jawa");
console.log(PesanSalam);

/* Yang perlu kita perhatikan lagi, ketika statement return tereksekusi, maka fungsi akan langsung terhenti dan mengembalikan nilai. */

/* Expression Function */

/* Cara lain untuk membuat sebuah fungsi pada Javascript adalah expression function. Ingat kembali bahwa expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variable.

Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function. Berikut ini merupakan contoh penulisan expression function : */

const Salam = function(Nama, Bahasa) {
    if(Bahasa === "Medan") {
        return "Horas " + Nama + "!";
    } else if(Bahasa === "Jawa"){
        return "Sugeng Rawuh " + Nama + "!";
    } else {
        return "Selamat Pagi " + Nama + "!";
    }
}

console.log(Salam('Saut', 'Medan'));