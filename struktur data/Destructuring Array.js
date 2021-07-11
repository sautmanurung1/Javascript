/* Destructuring Array */

/* Destructuring Array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal {}  sedangkan array menggunakan tanda kurung siku []. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya. Berikut contoh dari destructuring array pada ES6: */

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* Kode diatas merupakan contoh proses destructuring array. Di dalam array favorites terdapat 4 (empat) nilai string yang masing - masing nilainya dimasukkan ke variable lokal firstFood, secondFood,thirdFood, dan fourthFood. Nilai dari array yang dimasukkan ke variable lokal dipilih berdasarkan posisi dimana ia dideklarasikan pada array.

Contoh :

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

sebenarnya kita bebas untuk menentukan nama dari variable lokal. Yang terpenting adalah urutan ketika deklarasi variablenya saja.

Kita juga bisa memilih nilai pada indeks tertentu untuk desktrukturisasi pada array. Contohnya, jik ingin mengambil nilai ketiga dari array pertama, kedua, ataupun keempat. kita bisa melakukan nya dengan membiarkan indeks array yang tidak kita inginkan tetap kosong (tanpa menulis variable lokal). Lebih lanjut, tanda koma (,) tetap diperlukan untuk menunjukkan posisi index - nya seperti ini : */

const favorit = ["Seafood", "Salad", "Nugget", "Soup"];

const[, , thirdFood2] = favorit;

console.log(thirdFood);

/* Destructuring Assignment */

/* Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung. 
Contohnya seperti berikut : */

const favorite = ["Nasi", "Nasi Goreng", "Soup", "Nugget"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorite;

console.log(myFood);
console.log(herFood);

/* Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variable. Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma sorting seperti ini : */

var a = 1;
var b = 2;
var temp;

console.log("Sebelum swap");
console.log("Nilai a : " + a);
console.log("Nilai b : " + b);

temp = a;
a = b;
b = temp;

console.log("Setelah Swap");
console.log("Nilai a : " + a);
console.log("Nilai b : " + b);

/* Untuk melakukan pertukaran nilai, kita membutuhkan variable penengah. Pada contoh kode diatas menggunakan variable temp. Variable penengah dibutuhkan untuk menyimpan data sementara pada variable yang akan ditukar. Hal ini menjadi kurang efektif karena kita harus membuat variable baru yang sebenarnya hanya bersifat sementara.

Dengan array destructuring assignment, kita bisa menukar nilai variable dengan mudah tanpa membuat variable tambahan. */

let c = 1;
let d = 2;

console.log("Sebelum Swap");
console.log("Nilai C : " + c);
console.log("Nilai D : " + d);

[c, d] = [d, c]

console.log("Setelah Swap");
console.log("Nilai C : " + c);
console.log("Nilai D : " + d);


/* Default Values */

/* Ketika melakukan destructuring array, tetapi terdapat variable yang posisinya tidak dapat terjangkau oleh array, maka variable tersebut bernilai undefined. Contohnya:

const favorites = ["Seafood"];
const [myFood, herFood] = favorites

console.log(myFood);
console.log(herFood);

Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variable yang tidak dapat terjangkau oleh array, sehingga nilai pada variable tidak akan menjadi undefined. */

const favoritess = ["Seafood"];

const [MyFood, HerFood = "Lalapan"] = favoritess

console.log(MyFood);
console.log(HerFood);