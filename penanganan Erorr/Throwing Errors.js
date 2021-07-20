/* Throwing Errors */

/* Sekarang kita lihat implementasi try-catch pada kasus yang lebih umum. Perhatikan kode berikut */

let json = '{ "name" : "Yoda", "age" : 20 }';

try {
    let user = JSON.parse(json);
    
    console.log(user.name);
    console.log(user.age);
} catch(error){
    console.log(error.name);
    console.log(error.message);
}

/* Pada kode diatas, fungsi JSON.parse akan melakukan parsing atau konversi dari variable json(string) menjadi sebuah object. Skenario seperti di atas akan banyak kita temui ketika melakukan request ke API.

Jalankan kode diatas pada text editor anda. Seharusnya aplikasi berjalan lancar tanpa menimbulkan error.

Lalu, bagaimana jika json string tidak sesuai dengan format object Javascript? */

let jsoon = '{bad JSON}';

try{
    let user = JSON.parse(jsoon);

    console.log(user.name);
    console.log(user.age);
} catch(error){
    console.log(error.name);
    console.log(error.message);
}

/* Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan error. Error tersebut akan ditangkap oleh blok catch dan kode di dalamnya yang dieksekusi.

Lalu, bagaimana jika json yang di dapat adalah seperti ini? */

let jsons = '{"age" :20 }';

try {
    let user = JSON.parse(jsons);

    console.log(user.name);
    console.log(user.age);
} catch(error){
    console.log(error.name);
    console.log(error.message);
}

/* Secara sintaksis, kode diatas tidak menimbulkan error, sehingga blok catch akan diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan error karena berdampak pada jalannya program kita.

Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan "Melemparkan" error pada program, sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan error kita sendiri : */

let Json = '{"age" :20}';

try {
    let user = JSON.parse(Json);

    if(!user.name){
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name);
    console.log(user.age);
} catch(error){
    console.log(`JSON Error : ${error.message}`);
}

/* Ketika Properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError. Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa error yang terjadi.

Sekarang kita telah mengetahui ada banyak kemungkinan error yang bisa muncul dalam sebuah program. Tentunya akan sangat membantu jika kita bisa memberikan pesan yang sesuai kepada pengguna atau kepada diri kita sendiri untuk menemukan kesalahan dengan lebih mudah.

Sekarang anggaplah json sudah sesuai, tetapi ternyata ada error lain yang terjadi, misalnya karena variable yang belum terdefenisi */

let JSon = '{"name" : "Yoda", "age" : 15}';

try{
    let user = JSON.parse(JSon);

    if(!user.name){
        throw new SyntaxError("'Name' is required");
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch(error){
    if(error instanceof SyntaxError){
        console.log(`JSON Error : ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
    
}

/* Error berhasil ditangani, tetapi konsol tetap menampilkan pesan "JSON Error", lantas bagaimana kita bisa menampilkan pesan error sesuai dengan error yang muncul?

Jawabannya adalah dengan if statement 

    try {
        // ...
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log(`JSON Error: ${error.message}`);
        } else if (error instanceof ReferenceError) {
            console.log(error.message);
        } else {
            console.log(error.stack);
        }
    }

Dengan operator instanceOf, Kita bisa mendapatkan tipe dari error yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani errornya. */