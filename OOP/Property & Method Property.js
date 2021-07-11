/* Property & Method Property */

/* Property adalah atribut dari sebuah object, property sendiri dapat berupa tipe data primitive-- seperti yang sebelumnya dibahas -- bahkan bisa juga berbentuk object dan fungsi. Misalkan isi pesan, list penerima, data pengirim, perintah kirim, dll. sebagai contoh : */

// Cara 1
class mail {
    constructor(){
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessege(msg, to){
        console.log(`you send : ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to);
    };
}

const mail1 = new mail();
mail1.sendMessege('Hallo', 'Penerima@dicoding.com', 'smanurung360@gmail.com');

// Cara 2
function Mails(){
    this.from = 'Pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherProperty = 'the values';
};
Mails.prototype.sendMessege = function(msg,to) {
    console.log(`you send : ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to);
};
const mail2 = new Mails();
mail1.sendMessege('Hallo', 'Saut Manurung@dicoding.com', 'smanurung360@gmail.com');

/* Contoh class diatas memiliki 3 (tiga) property dan method. Yang perlu diingat, this merupakan representasi bahwasannya variable yang ditunjuk adalah atribute yang bersifat global dan menempel dengan object tersebut. Sehingga, variable dapat diakses dari method ataupun property di dalam kelas tersebut dengan menambahkan this di depannya. Sebagai gambaran, kita akan coba ubah kode diatas menjadi seperti berikut ini. */

class Mail{
    constructor(){
        this.from = 'Pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessege(msg, to, from){
        console.log(`you send : ${msg} ${to} from ${from}`);
        this.contacts.push(to);
    };
}

const Mail3 = new Mail();
Mail3.sendMessege('Hallo','Saut Manurung Ganteng@dicoding.com', 'smanurung360@gmail.com');

/* Contoh diatas menunjukan bahwa ketika kita ingin menginisialisasi ataupun mengakses sebuah attribute global dari sebuah kelas, maka harus menggunakan this.attributeName.

Dalam OOP sendiri, properti dibagai menjadi 2:

- Internal Interface : Method dan property yang dapat diakses oleh method lain namun tidak bisa diambil/dijalankan diluar kelas tersebut.

- External Interface : Method dan Property yang dapat diakses diluar kelas itu sendiri.

Sedangkan di dalam Javascript sendiri terdapat 2 jenis akses identifier untuk sebuah field :

- Public : Dapat diakses dari mana pun
- Private : hanya dapat diakses dari dalam kelas itu sendiri.

Secara default,  semua atribut yang di defenisikan adalah public. Sehingga semua attribute tersebut dapat diakses oleh object yang telah meng-instansiasi kelas tersebut. Sebagai contoh :
const mail1 = new Mail();
mail1.from; / 'Pengirim@dicoding.com'
mail1.contacts; / ['penerima@dicoding.com']
mail1.sendMessage('Hallo','penerima@dicoding.com'); / Method Mengirim Pesan.

Dari contoh tersebut, bagaimana jika kita ingin mengubah attribute contacts yang tidak dapat diakses langsung oleh object yang telah meng-instansiasi. Kita perlu mengubah sedikit pada kode class Mail yang kita miliki : */

/** Cara 1, Menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement 'function') */ 

//var contacts = [];
// contoh :
/** function Email(){
    this.from = 'Pengirim@dicoding.com';
    var contacts = [];
}  **/

/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/

//this._contacts = []

// Contoh 

/** class Email{
    constructor(){
        this._contacts = [];
        this.from = 'Pengirim@dicoding.com';
    }
} **/

/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
//#contacts = [];
// contoh
/** class Email {
    #contacts = [];
    constructor(){
        this.from = 'Pengirim@dicoding.com';
    }
} **/

/** Dari contoh diatas, ketika kita ingin mengakses attribute contacts secara langsung melalui object yang menginisiasi maka return - nya adalah undefined. Ketiga cara tersebut juga dapat digunakan pada sebuah method atau function. */

// const mail = new Mail();

// mail.contacts; // undefined

/** Catatan : Ketahuilah bahwa cara ke - 2 bukanlah cara murni yang diusung Javascript dalam menetapkan atribut private. Namun, Cara tersebut merupakan standarisasi penulisan yang biasanya digunakan oleh pengembang software (dengan JS) untuk membedakan variable - variable yang merupakan private variable
*/

/** Sedangkan untuk cara 3, belum sepenuhnya didukung oleh Javascript Engine versi lama. ini merupakan proposal pengembangan javascript terkait dengan identifier pada js */

/* Class method */

/** Class Method adalah function atau method yang ada di dalam sebuah object. Untuk menggunakannya, Sebuah class harus di-instantiate terlebih dahulu menjadi object baru bisa dijalankan, contoh class mail diatas, kita akan menggunakan method sendMessage maka kita harus meng-instantiate Mail terlebih dahulu. */

const mail3=new mail();
mail3.sendMessege('Hallo', 'Penerima@dicoding.com');

/** Kita tidak dapat langsung mengakses sendMessage tanpa melakukan instansiasi terlebih dahulu, misalkan : */

//mail.sendMessege('Hallo','Penerima@dicoding.com');

/* Static method */

/* Static method adalah function atau method yang sama seperti class method, akan tetapi untuk mengakses nya tidak perlu meng-instantiate class. Kita cukup menuliskan nama kelas dan nama method-nya secara langsung (NamaClass.namaMethod()).

Sebagai contoh, kita menambahkan sebuah method untuk memeriksa apakah sebuah input adalah nomor handphone :
*/

/*class mails{
    static isValidPhone(phone){
        return typeof phone === 'Number';
    }
}*/

/* dari contoh diatas, kita dapat memanggil fungsi tersebut tanpa membuat instance kelas Mail terlebih dahulu. */

//mails.isValidPhone(081264668115);

/* Constructor */

/* ketika kita membuat sebuah object, adakalanya karakteristik dari blueprint yang kita buat harus sudah di defenisikan bersamaan dengan sebuah object saat pertama kali di inisiasi. Constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat. Dari contoh kelas yang kita buat sebelumnya, kita akan membuat from sebagai sebuah value yang harus ditulis ketika sebuah object di inisiasi. Maka dalam Javascript ada dua cara, yaitu :

/ Cara 1, Jika kita menggunakan statement class */

/*class YourClassName{
    constructor(params1, params2, ...) {
        // do something here
    };
} */

// Cara 2, jika kita menggunakan statement function 

/*function mails(params1,params2, ....) {
    this.yourPropertyName = params1;
    // do something here
}*/

// Contoh penerapannya sebagai berikut :

// cara 1
class mails{
    constructor(author){
        this.from = 'Pengirim@dicoding.com';
        console.log('Is instantiated', author);
    };
}

function mails1(author){
    this.from = author;
    console.log('Is instantiated', author);
}

// Dari contoh constructor diatas, maka cara pemanggilannya menjadi seperti di bawah ini :

const mail4 = new mails("emailku@dicoding.com");
const mail5 = new mails1("Emailku@dicoding.com");

// Karena Javascript bukan bahasa dengan dukungan static type maka sebenarnya kita dapat melakukan instansiasi dengan parameter sesuka kita :

const mail6 = new mails1(081264668115);
const mail7 = new mails("emailku@gmail.com");