/* setTimeout */

/* Fungsi setTimeout() merupakan cara yang paling mudah untuk membuat kode kita dijalankan secara asynchronous. Fungsi ini menerima dua buah parameter. Parameter pertama adalah fungsi yang akan dijalankan secara asynchronous. Kedua adalah nilai number dalam milisecond sebagai nilai tunggu sebelum fungsi dijalankan. Contoh penggunaannya adalah seperti ini : */

console.log("Selamat Datang!");
setTimeout(() => {
    console.log("Terimakasih sudah mampir, silahkan datang kembali!");
}, 3000);
console.log("ada yang bisa dibantu?");

/* Jika hanya mengenal program secara synchronous, maka kita dapat membayangkan hasilnya memiliki urutan sebagai berikut:

- Mencetak => Selamat Datang!
- Menunggu selama tiga detik
- Mencetak => Terima kasih sudah mampir, silahkan datang kembali!
- Mencetak => Ada yang bisa dibantu?

Namun, nyata nya setTimeout() tidak akan menghentikan Javascript untuk melakukan eksekusi kode pada beris berikutnya. Sehingga urutannya seperti berikut :

- Mencetak => Selamat datang!
- Mencetak => Ada yang bisa dibantu?
- Menunggu selama tiga detik
- Mencetak => Terima kasih sudah mampir, silahkan datang kembali !
*/
 