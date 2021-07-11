/* Map */

/* Map adalah tipe data yang menyimpan koleksi data dengan format key -value layaknya object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan object yang hanya mengizinkan key bertipe String atau Symbol.

Untuk mendefenisikan Map gunakan constructor seperti dibawah ini :

const myMap = new Map();

Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi seperti ini : */

const myMap = new Map ([
    ['1', 'a String Key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

/* Array pertama (luar) menyimpan masing - masing elemen atau pasangan key - value dari Map. Kemudian array didalamnya memiliki dua elemen, di mana elemen pertama adalah key dan array keduanya merupakan value.

Ketika sudah membuat object Map. Kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key - value baru gunakan metode set().

Contoh : */

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

/* NOTE : 
Meskipun kita bisa menetapkan dan mendapatkan data pada map seperti ini :

const wrongMap = new Map();
wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);

Namun kode diatas bukanlah cara yang sesuai untuk mengoperasikan Map. Ketika kita menetapkan nilai map seperti diatas, data akan disimpan sebagai generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete. */

const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));

/* Jadi, Pastikan untuk menggunakan metode 
.set() dan .get() untuk Map. */