/* IF DAN ELSE */

/* Setiap hari kita melakukan perhitungan dan perbandingan guna membuat keputusan, apa pun itu. Contohnya, apakah perlu mencuci kendaraan ketika cuaca sedang cerah? Apa saja transportasi online yang bisa dipesan ketika hujan untuk sampai di tempat tujuan?

Ketika mengembangkan sebuah program, kita akan bertemu dengan alur bercabang tergantung pada kondisi yang terjadi. Untuk mengakomodasi dan mengecek sebuah kondisi dalam JavaScript, kita menggunakan kata kunci if.

Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan. Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan. */

const isRaining = true;

console.log("persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("hari ini hujan. Bawa Payung. ");
}
console.log("berangkat kegiatan.");
/* Jika anda mengubah nilai isRaining menjadi False, maka kode didalam blok kode if akan dilewatkan. Sehingga program anda tidak akan mengingatkan untuk membawa payung

Lalu bagaimana jika anda ingin melakukan operasi lain ketika kondisi bernilai False? Jawabannya adalah stetament else. Pada contoh kode berikut kita akan melakukan pengecekan kondisi menggunakan operator perbandingan */

let x = 50;

if (x > 70 ){
    console.log(x);
} else {
    console.log("nilai kurang dari 70");
}

/* Terdapat variable x dengan nilai 50, kemudian kita bertanya, "Hai Javascript! Apakah x lebih dari 70? ".

Kita juga bisa mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if. Contohnya adalah seperti program berikut : */

let language = "French";
let greeting = "Selamat Pagi"

if (language === "English"){
    greeting = "Good Morning ! "
} else if (language === "French"){
    greeting = "Bonjour !"
} else if (language === "Japanese"){
    greeting = "Ohayou Gozaimasu !"
}

console.log(greeting);

/* Pengecekan kondisi akan dilakukan dari stetament if paling awal. Sehingga, ketika nilai language adalah "French", maka pengecekan untuk language untuk Language === "Japanese " tidak akan dilakukan.

Selain if stetament diatas, javascript juga mendukung ternary operator atau conditional expression. dengan ini, kita bisa melakukan if-else stetament hanya dalam satu baris. */

// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

/* Ternary operator membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi. Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda titik dua. Terakhir adalah expression yang dieksekusi ketika kondisinya salah. Karena merupakan conditional expression, maka operand kedua harus mengembalikan nilai */


/* Truthy & Falsy */

/* Di dalam if statement kita perlu memasukkan expression yang akan di evaluasi. Umumnya, expression tersebut mengembalikan nilai boolean untuk menentukan kondisi true atau false. Lalu bagaimana jika kita menuliskan expression yang tidak mengembalikan nilai boolean? jawaban nya bisa.

Setiap nilai pada javascript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy. Nilai falsy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false. Jadi manakah yang termasuk truthy dan falsy? selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain :

- Number 0
- BigInt 0n
- String kosong seperti "" atau ''
- null 
- undefined
- NaN, atau Not a Number

Selain contoh diatas maka nilai nya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true. Berikut ini contohnya dalam kode : */

let Name = "";

if (Name) {
    console.log(`Halo, ${Name}`);
} else {
    console.log("Nama masih kosong");
}