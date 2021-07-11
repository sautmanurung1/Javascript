/* Set */

/* Struktur data yang akan kita bahas berikutnya adalah set. Set sederhananya merupakan kumpulan nilai (Set Of Values). Hal yang membedakan set dengan struktur data yang lain adalah data pada set tidak berurutan dan juga tidak diindeks. selain itu, data di dalam set juga bersifat unik dan tidak ada duplikasi.

Perhatikan contoh deklarasi Set dibawah ini : */

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* Pada Kode diatas terdapat beberapa angka yang duplikat, yaitu angka 1 dan 4 secara otomatis set akan membuang angka yang sama, sehingga nilai yang tersimpan adalah (1, 4 , 6).

Untuk menambahkan data ke dalam set kita bisa memanfaatkan fungsi add().

Contoh : */

const NumberSet = new Set([1, 4, 6, 4, 1]);
NumberSet.add(5);
NumberSet.add(10);
NumberSet.add(6);

console.log(NumberSet);

/* Fungsi add() hanya menerima satu argumen. Jika anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.
*/

const NomorSet = new Set([1,4,6,4,1]);

NomorSet.add(5);
NomorSet.add(10);
NomorSet.add(6);

NomorSet.delete(4);
console.log(NomorSet);

/* ingat bahwa set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya. */