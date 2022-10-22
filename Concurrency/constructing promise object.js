/* Constructing Promise Object */

/*
Promise merupakan sebuah object yang digunakan untuk membuat sebuah komputasi (code) ditangguhkan dan berjalan secara asyncronous. Untuk membuat object promise, kita gunakan keyword new diikuti dengan constructor dari promise 
contoh : 
*/
const coffee = new Promise();
// Namun, jika kita jalankan kode tersebut akan mengakibatkan eror seperti ini:
// TypeError: Promise resolver undefined is not a function 
/*
Di dalam constructor Promise, kita perlu menetapkan resolver function atau bisa disebut executor function. Fungsi tersebut akan dijalankan secara otomatis ketika constructor Promise dipanggil.
contoh nya :
*/

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat")
    } else {
        reject("Mesin Kopi tidak dapat digunakan")
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction)
}
const coffeePromise = makeCoffee()
console.log(coffeePromise)

/* 
Executor function memiliki dua parameter, yaitu resolve dan juga reject yang berupa fungsi. Berikut penjelasan detail nya:
    - resolve() adalah paramater pertama pada executor function. Parameter ini merupakan fungsi yang dapat menerima satu parameter. Biasanya kita gunakan untuk mengirimkan data ketika promise berhasil dilakukan. Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari Pending menjadi fulfilled
    - reject() adalah paramater kedua pada executor function. parameter ini merupakan fungsi yang dapat menerima satu parameter dan digunakan untuk memberikan alasan kenapa Promise tidak dapat terpenuhi. Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi rejected

Executor function akan berjalan secara asyncronous hingga akhirnya kondisi Promise berubah dari pending menjadi fulfilled/rejected.
Pada contoh kode diatas, output nya akan seperti ini 
*/
// Promise { 'Kopi berhasil dibuat' }

/*
Kenapa demikian? Executor function mengeksekusi resolve() dengan membawa data string "Kopi berhasil dibuat". Jika kita ubah nilai dari variable isCoffeeMakerReady menjadi false, maka executor function akan mengeksekusi reject() dengan membawa pesan penolakan "Mesin kopi tidak bisa digunakan" 
*/

/*
Dalam praktik aslinya, Promise digunakan untuk menjalankan proses asyncronous seperti mengambil data dari internet/API. Hasil Permintaan data dapat terpenuhi atau mengalami kegagalan.
Output yang dihasilkan baik ketika fulfilled ataupun rejected masih berupa Promise, bukan nilai yang dibawa oleh fungsi resolve atau reject. Lantas Bagaimana kita bisa mengakses nilai yang dibawa oleh fungsi - fungsi tersebut? Caranya adalah menggunakan method .then() yang tersedia pada object Promise
*/