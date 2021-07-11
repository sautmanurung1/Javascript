/* Class */

/* Classs adalah hal yang sangat penting dalam pemrograman berorientasi object. Hal itu karena class menyediakan informasi tentang suatu object. Jadi dapat dikatakan object adalah instance dari sebuah class. class sendiri dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefenisikan karakteristik dari sebuah object. Sebagai contoh, misalkan terdapat blueprint untuk mendefinisikan object Mail. Yang mana sms dan postman adalah object dari class mail.

Nama Class                          Mail
Karakteristik                       Pengirim, Penerima, isi pesan 

Kapabilitas/aksi                Kirim pesan, terima pesan

Didalam sebuah class, dapat terdiri dari properti dan method. Properti merupakan karakteristik dari class, sedangkan method adalah kapabilitas atau kemampuan yang dimiliki oleh class.

Nah, untuk penulisan class di Javascript sendiri bisa menggunakan dua cara, yakni melalui sintaks function ataupun class.

Mari kita lihat dulu cara membuat class menggunakan sintaksis function.

Function : menggunakan pendekatan Prototype */
function Mail(){
    this.from = 'pengirim@dicoding.com';
};

Mail.prototype.sendMessage = function n(msg, to){
    console.log(`you send : ${msg} to ${to} from ${this.from}`);
};

// pemanggilan 
const Mail1 = new Mail();
Mail1.sendMessage('Hallo', 'penerima@dicoding.com');

// Function tanpa pendekatan prototype

function Mail2(){
    this.from = "Pengirim@dicoding.com",
    this.sendMessage=function(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};

const Mail3 = new Mail2();
Mail3.sendMessage('Hallo', 'penerima@dicoding.com');

/* Cara pertama memiliki 2 pendekatan :

- Penulisan method menggunakan prototype
- Penulisan method sebagai sebuah properti secara umum.

Cukup berbeda dengan bahasa pemrograman lain pada umumnya, javascript memiliki konsep bernama prototype. prototype adalah properti internal yang akan selalu ada ketika sebuah object dibuat. Dari kedua pendekatan tersebut, pemanggilan terhadap properti dapat dilakukan dengan cara yang sama. Namun, penerapan prototype lebih dianjurkan. Lihatlah sintaksis dibawah ini : */

// menggunakan prototype 
/*const mails = new Mail();
mails.hasOwnProperty('sendMessage');*/

// hasilnya = false

// tanpa prototype

/*const Mails = new Mail2();
Mails.hasOwnProperty('sendMessage');*/

// hasilnya = true

/* Ketika kita meng-instantiate object - object lain, object yang menggunakan prototype tidak meng - copy atribut sendMessage ke setiap object - object. Berbeda ketika kita tidak menggunakan prototype, semua atribut di - copy ke setiap object. Dengan demikian, penggunaan prototype dapat menghemat alokasi memory yang digunakan.

lanjut ke cara kedua, yakni menggunakan sintaksis class */

class Mails{
    constructor(){
        this.from = 'Sautganteng@gmail.com';
    }


    sendMessage(msg, to){
        console.log(`you Send : ${msg} to ${to} from ${this.from}`);
    };
}

const Mails1 = new Mails();
Mails1.sendMessage('Hello', 'Penerima@dicoding.com');

//Cara kedua pada dasarnya menggunakan prototype, penggunaan sintaksis class pada javascript hanyalah syntatic sugar dari prototype itu sendiri. Demikianlah cara umum yang digunakan untuk menuliskan dan menginstansiasi object dari sebuah class.