/* Function Parameter */

/* Pada materi sebelumnya, kita telah berkenalan dengan fungsi yang merupakan suatu blok kode yang dapat menerima input dan menghasilkan output tertentu. Input ke dalam sebuah fungsi dikirimkan melalui paramter.

Di dalam fungsi kita akan banyak bertemu istilah parameter & argument. Penggunaan istilah ini sering kali tertukar, bahkan di kalangan developer.

Perbedaan mendasar antar keduanya antara lain:

Parameter merupakan variable yang didefenisikan sebagai inputan dari sebuah fungsi 

Contoh :

function multiply(a, b){
    return a * b;
}

Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi.

Contohnya :
multiply(3, 4);

Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, bahkan fungsi lain.

Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. Contohnya seperti berikut : */

const user = {
    id : 25,
    displayName: 'Saut Manurung',
    fullName: 'Saut Kristian Wiratama Manurung',
};

function introduce({displayName, fullName}){
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* Default Parameters */

/* Fungsi pada Javascript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah di defenisikan. */

function exponentsFormula(baseNumber, exponent){
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent}= ${result}`);
}

exponentsFormula(3);

/* Seperti yang kita lihat pada contoh kode diatas, ketika argumen lebih sedikit dari parameternya, maka parameter yang tidak terdefenisi akan bernilai undefined. Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter. Nilai ini akan digunakan jika kita tidak memasukkan parameter. */
function exponentFormula(baseNumber, exponent  = 2 ) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentFormula(10);

/* Rest Parameter */

/* Masih ingat dengan spread operator (...)? jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. Penasaran?

Rest Parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti. 

Sebagai contoh adalah fungsi yang menjumlahkan seluruh nilai argument seperti berikut : */

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1,2,3,4,5));