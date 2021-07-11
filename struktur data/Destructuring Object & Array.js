/* Destructuring Object & Array */

/* Literasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data di javascript. JSON (Javascript Object Notation) merupakan format data paling populer yang digunakan dalam transaksi data saat ini.

Contoh JSON Sederhana :

{
    {
        "id" : 14,
        "tittle" : "Belajar Fundamental Aplikasi Android",
        "author" : "Google ATP"
    },
    {
        "id" : 15,
        "tittle" : "Belajar Membuat Aplikasi Android untuk pemula",
        "author" : "Google ATP"
    },
    {
        "id" : 123,
        "tittle" : "Belajar Dasar Pemrograman Web",
        "author" : "Dicoding Indonesia"
    },
    {
        "id" : 163,
        "tittle" : "Belajar Fundamental Front-End Web Development",
        "author" : "Dicoding Indonesia"
    }
}

Jika kita lihat pada struktur JSON di atas, kita dapat menyimpulkan struktur tersebut dibangun dari array dan object. Karena kedua hal ini banyak digunakan untuk mengelola data pada javascript untuk memudahkan developer, ES6 menambahkan fitur untuk destructuring object dan array.

Apa sebenarnya destructuring object dan array itu? Destructuring dalam javascript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil

Secara tidak sadar mungkin kita pernah melakukan destructuring. Namun, sebelum ES6 hal tersebut dilakukan dengan cara seperti ini. */

// Array 

const foods = ['Pie', 'Cake', 'Honey']

const myFood = foods[0]
const yourFood = foods[1]
const ourFood = foods[2]

console.log(myFood, yourFood, ourFood);

// Object 

const profile = {
    firstName : "Saut",
    lastName : "Manurung",
    age : 19 
}

const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age

console.log(firstName, lastName, age);

    