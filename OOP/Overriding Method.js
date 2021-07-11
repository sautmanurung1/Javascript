/* Overriding Method */

/* Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class. Sehingga, ia dapat disesuaikan dengan behavior di child class. */

/* Overriding Constructor */

/* Sebelumnya kita telah mempelajari tentang constructor dan juga pewarisan. Pada contoh kasus di inheritance atau pewarisan, kita menemukan kasus seperti dibawah ini. */

/* class whatsapp extends Mail{
    constructor(){
        super();
        this.username = 'saut';
        this.isBussinessAccount = true;
    }
}

/pemanggilan 

const wal = new whatsapp(081264668115); */

/* Sekarang bagaimana jika kita menambahkan username dan isBussinessAccount ke dalam constructor? jika kita membuat constructor baru kodenya akan seperti ini : */

/* class whatsapp extends Mails{
    constructor(username, isBussinessAccount, phone){
        super();
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}

const wall = new Whatsapp('dicoding', true, 081264668115); */

/* Error di atas terjadi kerena constructor pada kelas parent gagal di eksekusi, meskipun kita telah menggunakan operator this.nameOfProperty. Solusinya kita dapat menggunakan operator super() untuk mengeksekusi method parent - nya. Sehingga, constructor pada kelas Whatsapp menjadi seperti ini. */

/*constructor(username, isBussinessAccount, phone) {
    super(phone);
    this.username = username;
    this.isBussinessAccount = true;
}*/

/* Overriding Method */

/** Hampir sama dengan overriding constructor, tetapi yang di - override disini adalah method yang ada pada parent class. Pada dasarnya semua method yang ada pada kelas parent dapat diakses langsung di child kelasnya (as is) */

// Contoh

// super.methodName();

/* kadang kita tidak menggunakan sebuah method seutuhnya sama seperti parent kelasnya. Namun, kita dapat menambahkan perintah tertentu ataupun menguranginya. Berikut merupakan contoh override pada method sendMessage. */
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
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    // overriding method => Melakukan Override total
    sendMessage(msg, to){
        console.log('Send by Wa');
    }
}

/* Ketika kita memanggil method sendMessage pada contoh diatas, ia hanya akan mengeksekusi kode yang ada pada child class. */

const wall = new Whatsapp('di', true, 081264668115);
wall.sendMessage('Halo', 081264668115);

/* untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator super.methodName(). */

/* sendMessage(msg, to) {
    super.sendMessage(msg, to);
    console.log('Send by WA');
} */

/** Catatan : 
 * Super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor 
 * super.methodName(...) digunakan untuk memanggil parent method
 */