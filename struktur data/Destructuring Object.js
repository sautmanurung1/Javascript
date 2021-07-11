/* Destructuring Object */

/* Penulisan Sintaksis destructuring object pada ES6 menggunakan object literal ({}) di sisi kiri dari operator assignment */

// Contoh 

const profile = {
    firstName : "Saut",
    lastName : "Manurung",
    age : 19  
}

const {firstName, lastName, age} = profile;

console.log(firstName, lastName, age);

/* Pada contoh diatas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi. Di dalamnya terdapat firstName, lastName, dan age yang merupakan variable untuk menyimpan nilai properti dari object profile. kita juga perlu perhatikan penamaan variablenya. Pastikan penamaannya sama seperti properti object-nya. Melalui nama variable inilah nilai - nilai properti object akan dimasukkan secara otomatis. Sehingga variable firstName akan berisikan nilai profile.firstName, lastName akan berisikan nilai profile.lastName, begitu juga dengan variable age akan berisikan nilai profile.age.

Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. Sehingga kita tidak perlu membuat variable sebanyak properti yang dimiliki objectnya, 

Contoh nya :

const {lastname} = profile;

*/

/* Destructuring Assignment */

/* Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi variable. Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variable yang sudah di deklarasikan. */

const profil = {
    firstName1 : "Saut Ganteng",
    lastName1 : "Marga Manurung",
    age1 : 19
}

let firstName1 = "Saut Jelek";
let age1 = 20;

// Menginisialisasi nilai baru melalui object destruction

({firstName1, age1} = profil);

console.log(firstName1);
console.log(age1);

/* Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung. Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat javascript mengira kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri assignment.

Contoh 

tidak bisa karena javascript mengira kita membuat block statement
block statement tidak bisa berada pada sisi kiri assignmen 
{firstName, age} = profile;

Nah, inilah fungsinya tanda kurung. Ia akan memberi tahu Javascript bahwa kurawal di dalamnya bukan sebuah block statement melainkan sebuah expression, sehingga assignment dapat dilakukan 

Contoh 
({fisrtName, age} = profile); */

/* Default Values */

/* Ketika kita mendestruksikan object dan menetapkan variable dengan nama yang bukan merupakan properti dari object, maka nilai dari variable tersebut menjadi undefined.

Contoh nya: */

const profiles = {
    firstNames : "Saut",
    lastNames : "Manurung",
    ages: 20
}

const {firstNames, ages, isMale} = profiles;

console.log(firstNames);
console.log(ages);
console.log(isMale);

/* Alternatifnya, kita bisa secara opsional mendefenisikan nilai default pada properti tertentu jika tidak ditemukan. Untuk melakukan nya, tambahkan tanda assignment (=) Setelah nama variable dan tentukan nilai default-nya seperti ini : */

const profile2 = {
    firstName2 : "Saut",
    lastName2 : "Manurung",
    age2 : 20
}

const {firstName2, age2, isMale2 = false} = profile2;

console.log(firstName2)
console.log(age2)
console.log(isMale2)

/* Jika nilai properti tidak ditemukan, maka nilai default akan diterapkan pada variable */


/* Assigning to Different Local Variable Names */

/* Sampai Saat ini kita tahu bahwa untuk melakukan destrukturisasi object pada variable lokal, kita perlu menyeragamkan penamaan variable lokal dengan properti object-nya. Namun, sebenarnya dalam proses destrukturisasi object kita bisa menggunakan penamaan variable lokal yang berbeda. ES6 menyediakan sintaksis tambahan yang membuat kita dapat melakukan hal tersebut. 

Penulisannya mirip seperti kita membuat properti beserta nilainya pada object. */

// Contoh nya seperti ini :

const profile3 = {
    firstName3: "Saut",
    lastName3 : "Manurung",
    age3 : 30
}

const {firstName3: localFirstName, lastName3: localLastName, age3:localAge} = profile3;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);