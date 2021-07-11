/* Paradigma Functional Programming */

/* Paradigma Functional Programming adalah paradigma pemrograman dimana proses komputasi didasarkan pada fungsi matematika murni. Functional Programming (selanjutnya akan kita singkat menjadi FP) ditulis dengan gaya deklaratif yang berfokus pada "what to solve" dibanding "how to solve" yang dianut oleh gaya imperatif.

Sebagai gambaran buat anda yang belum tahu apa itu deklaratif dan imperatif lebih jauh ,silahkan simak contoh kode berikut:*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++){
    newNamesWithExcMark.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark);

/* Contoh kode diatas merupakan salah satu gaya penulisan kode imperatif. Di mana proses pengisian nilai array bary (newNames) berdasarkan array lama (names) dilakukan secara manual. inilah maksud dari "how to solve", dimana kita perlu memikirkan bagaimana cara melakukan perulangan (for); kapan perulangannya harus berhenti (i < names.length); bagaimana cara memasukkan nilai baru ke dalam array (newNamesWithExcMark.push). Huft, sangat melelahkan!

Lantas bagaimana dengan gaya deklaratif? Mari kita lihat kode dengan fungsi yang sama namun dengan gaya deklaratif. */

const Names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNameWithExcMark = Names.map((Names) => `${Names}!`);

console.log(newNameWithExcMark);

/* Kesan apa yang pertama anda rasakan ketika melihat kode diatas? coba bandingkan dengan kode sebelumnya, tentu ini jauh lebih mudah dibaca dan ringkas. Yap! inilah yang disebut dengan gaya deklaratif. Kita tidak perlu pusing untuk memikirkan cara manual untuk mencapai sebuah tujuan. Tidak ada proses looping manual; tidak perlu tau kapan harus berhenti dari looping; kita cukup fokus pada "what to solve" alias apa yang ingin kita selesaikan atau capai.

Javascript sendiri merupakan bahasa pemrograman yang mendukung paradigma FP. Banyak High - order Function (kita akan bahas detail tentang ini nanti) yang bisa kita manfaatkan sebagai utilitas, salah satunya fungsi array map() di atas.

Namun FP bukan hanya sekedar menggunakan High - Order Function bawaan saja. Untuk memahami paradigma FP secara mendalam, kita perlu tahu dulu konsep - konsep apa saja yang ada di dalamnya. */