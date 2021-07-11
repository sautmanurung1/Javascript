/* Closure */

/* Setelah mempelajari tentang scope pada materi selanjutnya, kali ini kita akan membahas seputar closure. Sebelumnya kita telah tahu bahwa fungsi dapat di defenisikan dalam lingkup global atau di dalam fungsi lain. Suatu fungsi yang dapat mengakses variable di dalam lexical scope- nya disebut dengan closure.
Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variable di lingkup induknya. */

function init(){
    var name = 'Saut Manurung'; //variable lokal didalam scope fungsi init

    function greet () { // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`); // memanggil variable yang di deklarasikan di parent function
    }

    greet();
}

init();

/* fungsi init() memiliki variable lokal name dan fungsi greet(). Fungsi greet() adalah inner function yang di defenisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init(). Perhatikan bahwa fungsi greet() tidak memiliki variable lokal. Namun, karena inner function memiliki akses ke variable di parent function-nya, sehingga greet() dapat mengakses variable name. Itulah yang dimaksud dengan lexical scope.

sekarang perhatikan contoh kode berikut : */

function inits() {
    var name = 'Orang Ganteng';

    function greets() {
        console.log(`Halo, ${name}`);
    }

    return greets;
}

let myFunction = inits();
myFunction();

/* Kode diatas akan menghasilkan output yang sama. Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya sebelum dieksekusi. Karena variable name berada dalam scope init(), maka umumnya variable tersebut akan hilang atau dihapus ketika fungsinya selesai dijalankan, namun, pada kasus di atas fungsi greet() yang diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variable name. Variable pada mekanisme di atas telah tertutup (close covered), yang berarti variable tersebut berada di dalam closure.

Memang di awal cukup sulit untuk memahami closure. Jadi, mari kita lihat langsung untuk apa closure ini digunakan pada suatu program yang nyata.

Javascript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variable menjadi private seperti bahasa java. Sehingga sebuah fungsi atau variable bisa diakses dari mana pun, kenapa tidak membutuhkan private method? salah satunya adalah untuk membatasi akses ke fungsi atau variable. perhatikan contoh berikut:*/

let counter = 0;

let add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* Nilai counter akan bertambah ketika kita memanggil fungsi add(). Namun, kita juga bisa mengubah nilai counter secara langsung dengan assignment operator. pada contoh program yang lebih kompleks, sebaiknya hal ini dihindari karena perubahan langsung pada nilai counter bisa saja memunculkan bug.

closure memungkinkan kita membuat fungsi dan variable seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure: */

let adds = () => {
    let counters = 0;
    return () => {
        return ++counters;
    };
}

let addCounter = adds();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());