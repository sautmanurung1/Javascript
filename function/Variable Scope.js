/* Variable Scope */

/* Sejauh ini kita sudah mengenal function. Setelah kita memisahkan kode kedalam blok atau fungsi terpisah, ada satu hal penting yang perlu kita tahu, yaitu variable scoping. Ada banyak keadaan di mana kita membutuhkan variable untuk diakses di seluruh script yang kita buat. Tetapi ada juga keadaan di mana kita ingin variable tersebut hanya dapat diakses pada cakupan fungsi dan fungsi turunannya saja.

Variable yang dapat diakses dari seluruh script disebut dengan "globally scoped", sementara variable yang hanya diakses hanya pada fungsi tertentu disebut dengan "locally scoped".

Variable javascript menggunakan fungsi untuk mengelola cakupannya. Jika variable di defenisikan di luar fungsi, maka variable tersebut bersifat global. Jika variable di defenisikan di dalam fungsi, maka variable bersifat lokal dan cakupannya hanya pada fungsi tersebut beserta turunannya.

Berikut ini merupakan contoh scoping dalam kode :

global variable, dapat diakses pada parent() dan child()
const a = 'a';

function parent() {
    local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.

    const b = 'b';

    function child() {
        local variable, dapat diakses hanya pada fungsi child()

        const c = 'c';
    }
}

Kita harus berhati - hati dalam mendefenisikan variable di dalam fungsi. pasalnya, kita bisa mendapatkan hasil yang tidak diperkirakan, contohnya seperti berikut : */

function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number = multiply(15);

console.log(total)

/* mungkin kita berharap nilai total akan tetap 9, mengingat variable total pada fungsi multiply seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan variable total sebagai cakupan lokal. Kita tidak menggunakan keyword const atau let ketika mendeklarasikan variable total pada fungsi multiply() sehingga variable total menjadi global. */

// Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variable, maka variable tersebut akan menjadi global.

/* sebisa mungkin kita harus menghindari pembuatan variable global, karena variable global dapat diakses pada seluruh script yang kita tuliskan. semakin banyak variable global yang kita tuliskan, semakin tinggi kemungkinan tabrakan (collision) terjadi.
