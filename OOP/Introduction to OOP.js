/* Introduction to OOP */

/* Object Oriented Programming (OOP) adalah salah satu paradigma dalam dunia pemrograman komputer. Ia adalah pendekatan berbasis object, dimana suatu object terdiri dari kumpulan atribut dan method di dalamnya. Di dalam Javascript, atribut adalah variable yang digunakan untuk menyimpan nilai. Sementara method adalah fungsi yang digunakan untuk menjalankan suatu proses.

Untuk lebih mudah memahami apa itu OOP, kita bisa menggunakan pemodelan hal - hal dunia nyata ke dalam program yang kita buat. Ambil contoh kucing, ia berperan sebagai object.

Kita ibaratkan ada seekor kucing yang memiliki karakteristik bulunya berwarna kuning, tinggi badan 23 cm, dan juga berat badan 4kg. Kucing tersebut juga memiliki kemampuan khusus yaitu mampu berlari, melompat, dan juga tidur.

Nah, dalam konteks OOP, karakteristik kucing (warna bulu, tinggi badan, dan berat badan) merupakan atribut dari suatu object kucing. Ia adalah nilai - nilai yang dimiliki oleh seekor kucing. Sedangkan kemampuan (berlari, melompat, tidur) adalah method dari seekor kucing, ia adalah suatu aktivitas yang bisa dilakukan oleh seekor kucing.

Javascript memiliki kapabilitas untuk membuat program dengan menerapkan paradigma OOP. Meskipun ada beberapa perbedaan dan perdebatan mengenai OOP di javascript dengan yang ada di bahasa pemrograman lain.

Sebelumnya kita sudah mengenal dan mempelajari object yang dapat merepresentasikan sebuah layer data. Jika string di analogikan sebagai kata (kumpulan karakter), number sebagai angka, dan boolean sebagai pernyataan benar atau salah; maka object dianalogikan sebagai sebuah benda yang lebih kompleks. OOP pun sama, tatapi lebih kompleks lagi karena di dalam paradigma OOP terdapat 4 pilar utama, yaitu encapsulation, abstraction, inheritance, dan polymorphism.

Sebagai contoh, kita memiliki sebuah data object bernama mail seperti contoh dibawah ini.*/

const mail = {
    from : "pengirim@dicoding.com",
    sendMessege:function (msg,to){
        console.log(` you send : ${msg} to ${to} from ${this.from}`);
    }
};

console.log(mail.from);
mail.sendMessege('apakabar','penerima@dicoding.com');

/* Object diatas memiliki atribut dengan tipe data string (from) dan sebuah fungsi atau method untuk mengirim pesan (sendMessage). Selain itu kita juga dapat mengubah isi dari salah satu atribut dari object tersebut 

Contoh nya :
mail.from = "pengirim2@dicoding.com";

atau, menambahkan sebuah fungsi baru bernama saveContact .

mail.saveContact = function(addr) {
    console.log(`email saved ${addr}`);
}

contoh diatas adalah penulisan dengan gaya format object literal, yaitu penulisan object dengan langsung menuliskan key dan value nya dalam object yang dibuat. Hal - hal tersebut belum sepenuhnya merangkum konsep object dalam OOP.

Lalu, di benak anda muncul beberapa pertanyaan sebagai berikut :

1. Bagaimana jika saya ingin membuat object baru bernama mail 2 dengan atribut yang sama namun nilai yang berbeda dengan mail? apakah harus mendefenisikan attribute dan function/method yang sama secara berulang?
2. Bagaimana jika saya ingin membuat mail2 tanpa method saveContact?
3. Bagaimana jika saya ingin menambahkan fungsi tambahan pada mail2?

Dari 3 pertanyaan diatas, maka fungsi paradigma OOP dapat menjadi solusi dikarenakan memiliki 4 pilar yang sudah disebutkan sebelumnya. Sederhananya kita akan membuat base template dari sebuah object, kemudian dari base tersebut kita dapat meng-instansiasi dalam bermacam bentuk object. Di bawah ini adalah gambaran di mana mail adalah base template dan sms, email, mailgroup adalah instansiasi dari mail.

Contoh lainnya, misalkan base template dari sebuah object adalah animal dan dapat merepresntasikan berbagai bentuk misalkan aves, mamalia, pisces, dll. Untuk membuat base template tersebut, maka kita akan mempelajari class terlebih dahulu. */