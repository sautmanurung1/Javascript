/* 4 Pilar OOP */

/* Seperti yang sempat kita singgung pada awal modul OOP, terdapat empat pilar dalam OOP, yaitu Encapsulation, abstraction, inheritance, dan polymorphism. */

/* Encapsulation */

/* Enkapsulasi adalah kondisi dimana attribute atau method di dalam class dibungkus dan bersifat privat. Artinya object lain tidak bisa mengakses atau mengubah nilai dari property secara langsung. Pada contoh kasus mail kita tidak bisa langsung mengubah daftar contacts, namun kita bisa menambahkannya melalui fungsi saat kirim pesan atau mengambil data tersebut melalui method showAllContacts. */

class Mail {
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to){
        console.log('You Send :',msg,'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts(){
        return this._contacts;
    }
}

/* Abstraction */

/* Abstraksi dapat dikatakan merupakan penerapan alami dari enkapsulasi. Abstraksi berarti sebuah object hanya menunjukkan operasinya secara high-level. Misalnya kita cukup tahu bagaimana pesan dikirim atau diterima, namun kita tidak perlu tahu seperti apa proses enkripsi dan dekripsi isi pesan, atau bagaimana sebuah daftar contacts dapat bertambah */

/* Inheritance */

/* Beberapa Object bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah object yang sama. Di sinilah inheritance atau pewarisan berperan. SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki juga oleh jenis pesan lainnya, seperti memiliki konten pesan, alamat/ nomor pengirim, alamat/nomor penerima, dsb. Maka dari itu, Email sebagai object turunan (subclass) mewarisi semua sifat dan perilaku dari object induknya (superclass) Mail. Begitu juga dengan object Whatsapp juga mewarisi sifat dan perilaku yang sama. Namun, Whatsapp bisa membuat grup, mengirim broadcast message sedangkan email tidak. */

/* Dari contoh diatas, misalkan kita ingin membuat 2 (dua) child class yaitu Whatsapp dan Email. Maka dalam Javascript cara menuliskan pewarisan terdapat 2 cara, yaitu sebagai berikut :

/Cara 1 : Menggunakan keyword 'extends' jika menggunakan statement 'class' 

class ChildClassName extends ParentClassName{}

/ Cara 2 : Menggunakan 'prototype' Jika menggunakan statement 'function'

ChildClassName.prototype = new ParentClassName()

Misalkan kita akan membuat sebuah child class bernama whatsapp yang mewarisi kelas Mail. Maka Contoh kode nya adalah sebagai berikut : */

class Mails {
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to){
        console.log(`You Send : ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts(){
        return this._contacts;
    }
}

class Whatsapp extends Mails{
    constructor(){
        super();
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile(){
        return `My Name ${this.username}, is ${this.isBussinessAccount ? 'Bussiness' : 'Personal'}`;
    }
}

const wal = new Whatsapp(081264668115);
console.log(wal.myProfile());

// Kita juga dapat mengakses attribute maupun method dari parent class yang accessible. Misalkan :

wal.sendMessage('Halo',081264668115);

/* Polymorphism */

/* Polymorphism dalam bahasa yunani berarti "banya bentuk". Sederhananya object dapat memiliki bentuk atau implementasi yang berbeda - beda pada satu metode yang sama. Semua jenis Mail dapat mengirim pesan, namun whatsapp, email, sms tentunya memiliki cara yang berbeda dalam mengirim pesan, misalkan: Whatsapp dapat mengirim pesan suara sedangkan yang lain tidak. Perbedaan bentuk atau cara mengirim pesan tersebut merupakan contoh dari polymorphism */

