/* Reusable Function */

/* Dengan menerapkan konsep - konsep yang ada di dalam paradigma FP, fungsi yang anda buat akan bersifat reusable. Karena fungsi yang anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. Hal ini tentu membuat fungsi dapat digunakan berkali - kali tanpa khawatir mendapatkan hasil di luar ekspetasi anda.

Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di javascript. Kami percaya, dengan memahami konsep functional programming secara matang, anda dapat membuatnya sendiri sesuai kebutuhan.

Alih - alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function yang sudah ada di javascript. khususnya beberapa Higher - Order Function yang dimiliki array, seperti map, filter, dan forEach.


/* Array Map */

/* Fungsi array.Map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipa array dan menerima satu buah callback function.

['Harry', 'Ron', 'Jeff', 'Thomas'].map(()=>{ });

Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya.

['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });

Seperti yang anda ketahui di awal, fungsi mapa akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function - nya. Karena callback function dapat mengakses item array. Biasanya developer menggunakannya untuk menghasilkan nilai baru. */

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/* Array Filter */

/* Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di javascript. sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. Bila anda memiliki kasus dimana anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok anda gunakan.

Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. Dimana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.

Sama seperti map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.

Contoh penggunaan ketika anda ingin menghilangkan seluruh nilai falsy pada array : */

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/* Contoh lain, penggunaan filter untuk menyaring array dari object siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat */

const Students = [
    {
        names: 'Harry',
        score: 65,
    },
    {
        names: 'James',
        score: 88,
    },
    {
        names: 'Ron',
        score:90,
    },
    {
        names: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = Students.filter((Students) => Students.score > 85);

console.log(eligibleForScholarshipStudents);

/* Array Reduce */

/* Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi nilai pada setiap elemen dan menampilkan dalam sebuah nilai saja.
arr.reduce(callback( accumulator, currentValue, [, index[, array]]) [, initialValue])

callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat di defenisikan pada bagian initialValue.

Contoh penggunaannya misalkan ketika ingin menjumlahkan total nilai siswa: */

const Stundent = [
    {
        Name: 'Harry',
        Score: 60,
    },
    {
        Name:'James',
        Score: 88,
    },
    {
        Name:'Ron',
        Score:90,
    },
    {
        Name:'Bethy',
        Score: 86,
    }
];

const totalScore = Stundent.reduce((acc,Stundent) => acc + Stundent.Score, 0);

console.log(totalScore);

/* Array Some */

/* array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan.

Fungsi ini akan menghasilkan nilai boolean.

arr.some(callback(element[, index[, array]]) [, thisArg])

Nilai yang dihasilkan di dasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap.
*/

const Array = [1, 2, 3, 4, 5];
const Even = Array.some(Element => Element % 2 === 0);

console.log(Even);

/* Array Find */

/* Mirip dengan array.some(), array,find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function.

Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.

arr.find(callback(element[, index[, array]])[, thisArg])

sebagai contoh, misalkan kita akan mencari siswa dengan nama 'James'. */

const stundents = [
    {
        Nama: 'Harry',
        Score:60,
    },
    {
        Nama: 'James',
        Score:88,
    },
    {
        Nama:'Ron',
        Score: 90,
    },
    {
        Nama:'Bethy',
        Score:75,
    }
];

const findJames = stundents.find(stundents => stundents.Nama === 'James');
console.log(findJames);


/* Array Sort */

/* array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara Default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

arr.sort([compareFunction])

Contoh sederhananya adalah sebagai berikut: */

const monts = ['March', 'Jan', 'Feb', 'Dec'];
monts.sort();
console.log(monts);

const Array1 = [1, 30, 4, 1000, 101, 121];
Array1.sort();
console.log(Array1);

/* Contoh pengurutan di atas di dasarkan pada pengurutan bentuk tipe data string. Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri. */

const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
    return a - b;
};

const sorting = array1.sort(compareNumber);
console.log(sorting);

/* Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).
/** 
 * Jika negatif maka 'a' akan diletakkan sebelum 'b'
 * Jika positive maka 'b' akan diletakkan sebelum 'a'
 * Jika 0 maka tidak ada perubahan posisi.
 */

/* Array Every */

/* array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang di defenisikan. Kembalian dari array.every() adalah nilai Boolean.

arr.every(callbak(element[, index[, array]])[, thisArg])

Sebagai contoh, kita akan mengecek apakah seorang siswa telah lulus semua uji materi : */

const scores = [70, 85, 90];
const minimumScores = 65;

const examPassed = scores.every(scores => scores >= minimumScores);

console.log(examPassed);

/* Array forEach */

/* Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback- nya saja, tidak lebih dari itu.

Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif.

*/

/* Cara imperatif */

const nama = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < nama.length; i++){
    console.log(`Hello, ${nama[i]}!`);
}

/* Cara Deklaratif */

const Nama = ['Harry', 'Ron', 'Jeff', 'Thomas'];

Nama.forEach((Nama) => {
    console.log(`Hello, ${Nama}`);
});

/* Namun ketahui lah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter. */

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < names.length; i++){
    if(names[i] === 'Jeff') continue; //Bisa

    console.log(`Hello, ${names[i]}!`);
}

names.forEach((names)=> {
    if(names[i] === 'Jeff') continue; // tidak bisa
    console.log(`Hello, ${names}`);
});