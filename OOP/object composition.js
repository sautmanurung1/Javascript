/* Object Composition */

/** Setelah konsep dari OOP kita pelajari, pasti sudah ada gambaran terkait dengan bagaimana membuat sebuah parent class kemudian membuat berbagai child class yang mana mewarisi sifat - sifat dari parent - nya, serta dapat menambahkan, mengubah, bahkan merombak setiap method yang ada. */

/* Sebuah paradigma OOP akan menghasilkan hierarki, dimana semakin besar software yang kita buat, maka semakin besar dan rumit juga hierarkinya.

Coba bayangkan saja jika kita ingin membuat child class bernama PersonalEnterpriseWhatsaApp di mana blueprint kelas tersebut kita ingin membuat method dan attribute yang ada di PersonalWhatsApp dan BussinessWhatsApp. Kita perlu merombak kembali kelas - kelas parent - nya hanya untuk membuat sebuah kelas baru. Nah, disini lah pendekatan Object Composition berperan.

Object Composition adalah prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class. Prinsip ini didasarkan pada kumpulan perilaku (method/function) yang sudah kita definisikan. Sehingga, ketika ingin membuat alur bisnis lain dengan beberapa perilaku (method) yang sama, kita dapat menggunakan fungsi yang sudah ada tanpa melakukan inheritance/pewarisan.

Pada dasarnya konsep yang harus dilakukan adalah : */

/** 
 * memisahkan fungsi - fungsi umum yang biasa di gunakan
    const yourGenericAction = params => ({
            actionA : () => { // do action A}
            actionB : () => {// do action B}
        });
 * Membuat Class seperti Biasa
        const YourClassName = (paramA, paramB) => {

        } 
 * Kota dapat menyimpan atribut yang kita punya kedalam sebuah object, biasanya seorang engineer menggunakan konstanta dengan nama self atau state untuk menampung attribute
        const YourClassName = (paramA, paramB) => {
            const self = {
                paramsA,
                paramsB
            };
        }
 * Menambahkan perilaku (method/function) yang hanya ada pada kelas tersebut.
        const YourClassName = (paramsA, paramsB) => {
            const self = {
                paramsA,
                paramsB
            };

            const yourSpecificActions = self => ({
                specificActionA: {// do Action A}
            });
        }
 * Membuat kumpulan Attribute, generic method, dan spesific method menjadi satu object.
        const YourClassName = {paramA, paramB} => {
            const self = {
                paramsA,
                paramsB
            };

            const yourSpecificActions = self => ({
                specificActionA: {// do action A}
            });

            return Object.assign(self, yourGenericAction(self), yourSpecificActions(self))
        }
 */
/* Sebagai contoh, dari hirarki Mail yang sudah kita buat sebelumnya. Kita akan merombak dan membuatnya dengan pendekatan Object composition. */

// [1] list of abstarctions
const canSendMessage = self => ({
    sendMessage: () => console.log('Send Message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('Valid Phone', self.from)
});

// [2] create object composition
const PersonalEnterprise = (from,message,store) => {
    // [3] attribute
    const self ={
        from,
        message,
        store
    };
    // [4] method
    const PersonalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });
    // [5] create object composition
    return Object.assign(self, PersonalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pel = PersonalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pel.createCatalog(); // Catalog has created : Dicoding Store
pel.sendMessage(); //  send message : hei produk baru nihh

/** Penjabaran kode diatas :
 * Kita membuat sebuah abstraksi untuk method - method yang umum digunakan (disini misalkan method mengirim pesan, dan validasi nomor hp).
 * Kita membuat sebuah kelas baru dengan nama personalEnterprise, dimana seperti biasa kita dapat menggunakan parameter yang akan digunakan
 * Pada Object composition ini, penggunaan parameter biasa digunakan untuk mendaftarkan attribute - attribute dari kelas tersebut. Pada contoh di atas, kita mengumpulkan attribute tersebut pada konstanta bernama self atau state.
 * Method, kita dapat juga menambahkan method/fungsi yang spesifik hanya ada pada kelas tersebut (kapabilitasnya hanya pada kelas tersebut/tidak umum).
 * Proses pembuatan object dengan perintah object.assign(attribute, method1, method2, methodN).
 */

// Dari contoh kode diatas maka kita dapat membuat sebuah object dengan nama personalEnterprise tanpa harus melakukan pewarisan.
