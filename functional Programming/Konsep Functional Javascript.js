/* Konsep - Konsep Functional Programming */

/* Setelah anda memiliki sedikit gambaran tentang bagaimana paradigma FP dapat membuat kode yang anda tuliskan lebih mudah dibaca dan ringkas, kini saatnya anda ketahui, apa saja konsep - konsep dasar yang ada di dalam paradigma FP. 

Disini kita akan membahas 4 konsep besar yang ada di FP, yakni Pure Function, Immutability, Recursive, dan High - Order Function. */

/* Pure Function */

/* Salah satu konsep besar dari paradigma FP adalah pure function. Apa artinya? Pure function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. Sehingga mau seperti apa keadaannya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.

Untuk lebih jelasnya, simak kode berikut: */

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(7));

PI = 15;

console.log(hitungLuasLingkaran(15));

/* menurut anda, apakah fungsi hitungLuasLingkaran merupakan pure function atau impure function (lawan dari pure function)? Jika anda menjawab impure function, Anda tepat sekali!

Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.

Lantas, bagaimana cara membuat fungsi tersebut menjadi pure? Mudah! */

const HitungLuasLingkaran = (JariJari) => {
    return 3.14 * (JariJari * JariJari);
}

console.log(HitungLuasLingkaran(15));
console.log(HitungLuasLingkaran(90));
console.log(HitungLuasLingkaran(99));

/* Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah. Dengan begitu fungsi selalu menghasilkan nilai yang sama bila nilai parameter yang diberikan sama.

Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

Untuk lebih jelasnya, coba lihat contoh kode berikut : */

const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    Name : 'Bobo'
};

const newperson = createPersonWithAge(20, person);

console.log({
    person,
    newperson
});

/* Fungsi createPersonWithAge bertujuan untuk membuat object person baru dengan tambahan properti age dari object person yang ada. Namun alih - alih hanya membuat object baru, ia juga malah mengubah nilai dari object lama. Nah, hal inilah yang menyebabkan fungsi createPersonWithAge bukanlah pure function.

Lalu bagaimana cara membuat fungsi tersebut menjadi pure? Mudah, kita manfaatkan destructuring object daripada mengubah object tersebut secara langsung. */

const CreatePersonWithAge = (age, Person) => {
    return { ...Person, age};
};

const Person = {
    Names : 'Saut'
};

const newPerson = CreatePersonWithAge(22, Person);

console.log({
    Person,
    newPerson
});

/* Lihat! Lagi - Lagi mudah dan singkat bukan? 

Agar lebih mudah dalam mengetahui apakah fungsi yang adan buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang anda buat. */
/**
 * Mengambalikan nilai yang sama bila inputannya (nilai parameter) sama.
 * Hanya bergantung pada argumen yang diberikan
 * Tidak menimbulkan efek samping.
 */

// Bila 3 konsep diatas terpenuhi, maka bisa dipastikan anda membuat sebuah pure function.

/* Immutability */

/* Konsep yang kedua adalah immutability. Immutable berarti sebuah object tidak boleh diubah setelah object tersebut dibuat. Kontras dengan mutable yang artinya object boleh diubah setelah object tersebut dibuat.

Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih - alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru. */

const Names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = Names.map((Names)=> `${Names}!`);

console.log({
    Names,
    newNamesWithExcMark,
});

/* Lantas, bagaimana bila kita benar - benar perlu mengubah nilai dari sebuah object? Contohnya seperti ini : */

const user = {
    firstname : 'Harry',
    lastname : 'Protter', // ups, typo
}

const renameLastNameUser = (NewLastName,user) => {
    user.lastname = NewLastName;
}

renameLastNameUser('Potter', user);

console.log(user);

/* Yup! Tujuan anda memang tercapai namun itu bukanlah konsep dari paradigma FP. Bila anda ingin menerapkan FP sepenuhnya, hindari cara seperti diatas. Lantas bagiaman solusinya? Sama seperti fungsi array map(), alih - alih mengubah nilai object secara langsung, terapkan perubahan tersebut pada nilai return dalam object baru. */

const User = {
    FirstName : 'Harry',
    LastName : 'Protter', // ups typo!
}

const CreateUserWithNewLastName = (NewLastName, User) => {
    return {...User, LastName : NewLastName}
}

const NewUser = CreateUserWithNewLastName('Potter', User);

console.log(NewUser);

/* Hasilnya sama kan? Selain itu, anda juga bisa menyesuaikan nama fungsi nya dari renameLastNameUser menjadi createUserWithNewLastName. Hal itu perlu untuk mengindikasikan bahwa fungsi mengembalikan atau menghasilkan object user baru. */

/* Rekursif */

/* Konsep selanjutnya yang ada di functional Programming adalah rekursif. Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakn sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif. */

const countDown = start =>{
    do {
        console.log(start);
        start -=1;
    }
    while(start > 0);
};

countDown(15);

// Maka bentuk rekursif nya adalah sebagai berikut :

const CountDown = Start => {
    console.log(Start);
    if(Start > 0) CountDown(Start-1);
};

CountDown(15);

// Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursif. Namun tidak sebatas itu saja, dengan rekursif kita dapat membuat dan mengolah data structure seperti tree dan array.

/* High - Order Function */

/* Javascript memiliki kemampuan First Class Functions, karena itu fungsi pada javascript dapat diperlukan layaknya sebuah data. Kita bisa menyimpan function dalam variable, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function*/

const Hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

Hello();
say(Hello);
sayHello()();

/* Karena dengan kemampuan First Class Function-nya itu, kita dapat membuat Higher - Order Function secara mudah. Tunggu, tunggu. Apa itu Higher - Order Function ?

Higher - Order Function menjadi bagian konsep pada paradigma FP. Higher - Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan kedua nya.

Teknik Higher - Order Function biasanya digunakan untuk : */

/** 
 * Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise dan lainnya
 * Membuat utilities yang dapat digunakan diberbagai tipe data.
 * Membuat teknik currying atau function composition
 */

/* Array Map() merupakan salah satu contoh Higher - Order Function yang ada di Javascript. Karena dalam penggunaannya, IA MENERIMA SATU BUAH ARGUMEN YANG MERUPAKAN SEBUAH FUNCTION.

Dengan mengetahui adanya Higher - Order Function, Anda bisa membuat fungsi map() versi anda sendiri!. */

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
    return loopTrough(arr, action);
}

const newNames = arrayMap(names, (Name) => `${Name}!`);

console.log({
    names,
    newNames,
});

