/* Try and Catch */

/* Untuk menangani eror pada Javascript, gunakan try and catch. Penulisan kode try-catch untuk menangani error adalah seperti ini :

try {
    // kode
} catch(error) {
    // error handling
}

Taruh kode yang berpeluang menimbulkan error di dalam blok try. Apabila terjadi error di dalam blok kode try, maka ia akan ditangkap dan ditangani oleh blok kode catch. Sementara, jika terjadi error pada kode, maka blok catch akan diabaikan. */

try{
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch(error){
    console.log("Tidak terjadi error, maka kode ini diabaikan");
}

/* Output :
    Awal Blok Try
    Akhir Blok Try
*/

/* Kode di dalam blok try di atas tidak akan menghasilkan error, sehingga kode di dalam blok catch akan diabaikan dan tidak di jalankan. Berikut ini adalah contoh kode yang menghasilkan erorr : */

try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch(error){
    console.log("Terjadi Error!");
}

/* Output :
    Awal Blok Try
    Terjadi Error
*/

/* Baris kode (2) akan menghasilkan error. Eksekusi kode di dalam blok try akan dihentikan, sehingga baris kode (3) tidak akan tereksekusi. Kemudian kode akan dilanjutkan ke baris (4) atau blok catch.

Selamat! Anda telah berhasil menangani error dan menghindarkan aplikasi dari crash (Cobalah untuk menghapus sintaks try-catch dan melihat bagaimana aplikasi akan crash). Namun, bagaimana kita bisa tahu apa yang menyebabkan suatu program mengalami error? jika ada informasi yang jelas tentunya akan sangat membantu kita atau pengguna nantinya bukan?

Sekarang perhatikan blok catch. Disana catch memiliki satu parameter error (nama variable nya bisa diubah). Variable error tersebut merupakan sebuah object yang menyimpan detail informasi dari error yang terjadi.

Object error memiliki beberapa properti utama di dalamnya, yaitu: 

1. Name : Nama error yang terjadi
2. Message : Pesan tentang detail error
3. Stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.

Sekarang mari kita coba untuk mengubah kode dan menampilkan properti error diatas.
*/

try{
    console.log("Awal Blok Try"); // (1)
    errorCode; // (2)
    console.log("Akhir Blok Try"); // (3)
} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

/* Output 
    Awal Blok Try
    ReferenceError
    errorCode is not defined
    ReferenceError: errorCode is not defined
    at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/

/* Dari informasi diatas, kita bisa tahu bahwa error yang muncul adalah ReferenceError karena errorCode dianggap sebagai sebuah variable atau nilai yang tidak terdefenisi */

/* Try-Catch-Finally */

/* selain Try and Catch, ada satu blok lagi yang ada dalam mekanisma error handling pada JavaScript, yaitu finally. Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
*/

try{
    console.log("Awal Blok Try");
    console.log("Akhir Blok Try");
} catch(error){
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}

/* Output :
    Awal blok try
    Akhir blok try
    Akan tetap dieksekusi
*/