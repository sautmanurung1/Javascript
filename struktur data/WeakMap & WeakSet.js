/* WeakMap & WeakSet */

/* WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage Collection adalah proses dimana interpreter javascript mengambil kembali memori yang tidak lagi "dapat dijangkau" dan tidak dapat digunakan oleh program. Garbage Collection di javascript dilakukan secara otomatis dan bukan menjadi urusan dari developer.

Yang dimaksud weak dalam WeakMap adalah referensi terhadap nilai yang disimpan. Apabila suatu nilai yang disimpan di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, maka referensi ke memorinya akan dihapus.

Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap :

- Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection. 

- WeakMap memiliki method get(), Set(), has() dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().

- WeakMap juga tidak memiliki properti size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.

Masih bingung? Mari kita lihat contoh kode dan perbedaan antara Map dan WeakMap.

Contoh :

let visitsCountMap = new Map(); /Untuk menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count +1);
}

let jonas = { name : "Jonas"};
countUser(jonas);     / Menambahkan user "Jonas"

jonas = null;        /Data Object "Jonas" dihapus

console.log(visitsCountMap);

Ketika reference object jonas dihapus dengan mengubahnya menjadi null, seharusnya map tidak lagi menyimpan data user (garbage collected). Namun, kenyataannya data jonas masih tersedia di dalam Map. Artinya, data jonas masih tersimpan di dalam memori sampai kita benar - benar menghapusnya.

Berbeda jika kita menggunakan WeakMap seperti ini :

let visitsCountMap = new WeakMap();

ketika nilai jonas sudah tidak bisa dijangkau, object jonas akan dihapus dari memori termasuk informasi yang disimpan di dalam weakMap. */

let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { named: "Jonas"};

countUser(jonas);

jonas = null;

console.log(visitsCountMap);

/* Seperti halnya WeakMap, WeakSet adalah versi weak reference dari Set. Perbedaan antara WeakSet dan Set antara lain:

- WeakSet tidak bisa menyimpan nilai primitif
- WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
- WeakSet tidak memiliki properti size. */