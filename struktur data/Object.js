/* Object */

/* Kali ini kita akan berkenalan dengan tipe data object. sebuah tipe data yang sangat berguna dalam pengembangan aplikasi dengan javascript. Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks. 

Untuk menetapkan objek pada sebuah variable kita gunakan tanda kurung kurawal {}

Contoh :
const user = {};

Object berisi pasangan key dan value yang juga dikenal dengan property. Key berperan mirip seperti nama variable yang menyimpan sebuah nilai. Sementara, value berisi nilai dengan tipe data apa pun yang termasuk objek lain. key dan value di dalam object dituliskan seperti berikut ini :

let object = {key1 : "value1", key2: "value2", key3: "value3"}

key harus berupa string dan dituliskan sebelum titik dua (:), lalu diikuti dengan value-nya meskipun key merupakan string, kita tidak perlu menuliskan tanda petik kecuali ada karakter khusus seperti spasi.

Tanda koma di akhir properti bersifat opsional. namun, jika tanda koma tersebut ditulis akan lebih memudahkan ketika kita ingin memindah, mengubah, atau menghapus properti.

satu object dapat memiliki beberapa pasang key - value yang dipisahkan dengan tanda koma (,).

Contoh :
const user = {firstName: "Luke", lastName: "Skywalter", age: 19, isJedi: true};


Dalam menuliskan objek, baris baru tidaklah penting dan tidak akan berpengaruh apa pun. sehingga lebih baik setiap kita menetapkan key - value buatlah baris baru untuk memisahkan antar nilainya. Hal ini akan memudahkan kita dalam membaca dan memahami struktur data dari sebuah object.

Contoh :

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

Kemudian untuk mengakses nilai dari property object, kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya, contoh : */

const user = {
    firstName: "Saut",
    lastName: "Manurung",
    age: 19,
    isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/* Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku.

Contoh :
user["Hello World"];

Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan bracket seperti diatas. */

const user1 = {
    firstName1: "Liana",
    lastName1: "Manurung",
    age1: 22,
    isJedi1: true,
    "home world": "Balige"
};

console.log(`Halo, nama saya ${user1.firstName1} ${user1.lastName1}`);
console.log(`Umur saya ${user1.age1} tahun`);
console.log(`Saya berasal dari ${user1["home world"]}`);

/* Setelah mempelajari bagaimana cara membuat object dan menampilkan property di didalamnya, selanjutnya kita akan memodifikasi sebuah object. Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=) */

const spaceship = {
    named: "Saut Manurung",
    manufacturer: "Institut Teknologi PLN",
    maxSpeed: 1200,
    color: "Yellow"
};

spaceship.color = "Pink";
spaceship["maxSpeed"] = 2000;
console.log(spaceship);

/* Tunggu dulu. Object spaceship dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?

Yang perlu diperhatikan adalah mengubah nilai beberapa dengan menginisialisasi ulang nilai. Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variable dari object

Contoh :

const spaceship = {
    name: "Ntah",
    manufacturer: "ntah corporate",
    maxSpeed: 1500,
    color: "Light gray"
};

spaceship = {name: "LALA"}; akan terjadi error

Ketika kita mengubah object menggunakan assignment operator dan property/ key-nya sudah ada, maka nilai didalamnya akan tergantikan dengan nilai yang baru. Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object. */

const spaceship1 = {
    named1: "Lala lili",
    manufacturer1: "Corellian Engineering Corporation",
    maxSpeed1: 2500,
    color1: "Light gray"
};

spaceship1.color = "Glosy red";
spaceship1["maxSpeed1"] = 3000;
spaceship1.class = "Light freighter";

console.log(spaceship1);

/* Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut: */

const spaceship2 = {
    named2: "LELE",
    manufacturer2: "Lele corp",
    maxSpeed2: 5000,
    color2: "Light Black"
};

spaceship2.color2 = "Black";
spaceship2["maxSpeed2"] = 1000;

delete spaceship2.manufacturer2;

console.log(spaceship2);