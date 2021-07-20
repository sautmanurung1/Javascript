/* Custom Error */

/* Setelah menangani error, pada materi ini kita akan mempelajari bagaimana membuat error sendiri. Ketika mengembangkan suatu aplikasi, akan ada banyak sekali kemungkinan munculnya error. Seringkali, kita membutuhkan kelas error sendiri untuk menunjukkan kesalahan yang spesifik dan tidak tersedia dalam kelas Error bawaan dari Javascript. 

Mari kita lihat kode kita sebelumnya. */

let json = '{"age" : 30}';

try{
    let user = JSON.parse(json);

    if(!user.name){
        throw new SyntaxError("'Name' is required");
    }

    console.log(user.name);
    console.log(user.age);
} catch(error){
    if(error instanceof SyntaxError){
        console.log(`JSON Error : ${error.message}`);
    } else if(error instanceof SyntaxError){
        console.log(error.message);
    }else {
        console.log(error.stack);
    }
}

/* Awalnya, JSON.parse akan mengonversi data String menjadi object. Apabila format String tidak sesuai, maka fungsi tersebut akan melemparkan SyntaxError. Meskipun format atau sintaksis dari json string sudah sesuai, tetap ada kemungkinan data di dalamnya tidak lengkap. Saat ini kita masih menggunakan SyntaxError untuk menandai error akibat data yang tidak lengkap, padahal secara sintaksis tidak ada masalah dari variable json. Tentunya akan lebih baik jika kita punya Error yang lebih spesifik, bukan?

Untuk itu kita bisa membuat kelas Error kita sendiri dengan nama dan pesan yang lebih sesuai. Kelas ini merupakan turunan dari kelas Error yang sudah ada. Sebagi contoh, untuk mengecek validasi data dari json, kita bisa membuat kelas error seperti ini: */

/*class ValidatorError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidatorError";
    }
}*/

/* Kelas ValidatorError memiliki parameter constructor berupa message yang berisi pesan detail terkait erornya. Mari kita lihat penerapannya pada kode sebelumnya. */

class ValidatorError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidatorError";
    }
}

let Json = '{"age" : 30 }';

try{
    let User = JSON.parse(Json);

    if(!User.name){
        throw new ValidatorError("'name' is required.");
    }
    if(!User.age){
        throw new ValidatorError("'age' is required.");
    }

    console.log(User.name);
    console.log(User.age);
} catch(Error){
    if (Error instanceof SyntaxError){
        console.log(`JSON Syntax Error: ${Error.message}`);
    }
    else if (Error instanceof ValidatorError){
        console.log(Error.message);
    }
    else{
        console.log(Error.stack);
    }
}

/* Sekarang kode untuk menangani error menjadi lebih baik bukan? Penggunaan InstanceOf akan memberikan hasil error yang lebih detail dan sesuai dengan error yang terjadi. */