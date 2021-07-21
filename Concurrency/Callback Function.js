/* Callback Function */

/* Hal yang seringkali membingungkan ketika bekerja dengan synchronous dan asynchronous adalah bagaimana menangani suatu nilai yang di dapatkan secara asynchronous pada program yang berjalan secara asynchronous. Contoh nya seperti kode berikut : */

/*const orderCoffee = () => {
    let coffee = null;
    console.log("selamat membuat kopi, silahkan tunggu ...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi !";
    }, 3000);
    return coffee;
} 
const coffee = orderCoffee();
console.log(coffee);*/

/* Jika kita melakukan hal seperti diatas untuk mencetak nilai coffee, maka hal tersebut tidak akan pernah terjadi. Seperti yang sudah kita ketahui, fungsi setTimeout() tidak akan menghentikan Javascript untuk mengeksekusi koda yang ada selanjutnya. Jadi, fungsi orderCoffee() akan selalu mengembalikan nilai null, karena kode return coffee akan di eksekusi terlebih dahulu di bandingkan dengan coffee = "Kopi sudah jadi !";. Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous. Cara paling dasar adalah dengan callback function.

apa itu callback function? Mari kita bayangkan kembali ketika memesan kopi. Pada kasus ini mungkin terdapat dua aksi yang bisa kita lakukan:

- (Synchronous) kita tetap menunggu di kasir sampai kopi datang,
- (Asynchronous) kita menunggu di meja setelah memesan kopi. Selanjutnya kopi akan diantarkan oleh pelayan. Sehingga, kita perlu menunggu di kasir dan dapat melakukan pekerjaan lain.

Nah, pada javascript, pelayan ini berperan layaknya callback function. Ia diperintahkan pada sebuah fungsi asynchronous kemudian akan dipanggil/digunakan ketika tugas itu selesai.

Bagaimana cara menerapkannya dalam kode? Pertama, kita tambahkan parameter dengan callback pada fungsi asynchronous. */


const orderCoffee = callback => {
    let coffee = null;
    console.log("sedang membuat kopi, silahkan tunggu ...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi !";
        callback(coffee);
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});

/* Kemudian kita panggil atau gunakan callback yang diisikan dengan data yang akan dibawa (coffee) ketika task selesai dilakukan.

setTimeout(() => {
    coffee = "Kopi sudah jadi !";
    callback(coffee);
}, 3000);

Setelah menggunakan callback, fungsi tidak perlu lagi mengembalikan nilai. Sehingga, kita bisa menghapus kode return coffee;. Keseluruhan fungsi akan tampak seperti ini :

const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu ...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi !";
        callback(coffee);
    }, 3000);
}

Kemudian untuk menggunakn fungsi orderCoffee, ubah kode dari :

const coffee = orderCoffee();
console.log(coffee);

Menjadi:
orderCoffee(coffee => {
    console.log(coffee);
});

sehingga ketika dijalankan akan sesuai dengan harapan kita :

const orderCoffee = callback => {
    let coffee = null;
    console.log("sedang membuat kopi, silahkan tunggu ...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi !";
        callback(coffee);
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
}); */

/* Callback Hell */

/* Kita sudah mengetahui bahwa callback dibutuhkan untuk mendapatkan nilai yang berasal dari asynchronous function. Lantas bagaimana jika terdapat proses yang saling bergantuk satu sama lain? Contohnya, untuk membuat kue tahapan yang perlu kita lakukan adalah :

1. Menyiapakan bahan
2. Membuat adonan
3. Memasukkan adonan ke cetakan
4. Memanggang adonan 

Tahapan tersebut sangat bergantung satu sama lain. Kita tidak bisa mencetak adonan sebelum menyiapkan bahan dan membuat adonan. Jika seluruh tahapan tersebut berjalan secara synchronous, Mungkin kita bisa melakukanny seperti ini : */

/*function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients);
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
} */

/* Namun, jika fungsi - fungsi tersebut berjalan secara asynchronous, maka kita akan membuat yang namanya callback hell. Callback hell terjadi karena banyak sekali callback function yang bersarang karena saling membutuhkan satu sama lain. Sehingga, kode akan tampak seperti ini : */

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}

/* Melihat kode seperti ini saja kepala jadi pusing. Terbayang sulitnya memelihara kode ini di masa yang akan datang.

Lantas apa solusi agar kita dapat menghindari callback hell? salah satunya adalah dengan menggunakan promise. */

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}

/* Dengan promise, kita dapat meminimalisir callback hell dan mengubahnya menjadi kode yang sangat mudah dibaca. Bahkan dengan kode seperti itu, non - developer pun dapat mengerti apa maksud dari kode tersebut. */