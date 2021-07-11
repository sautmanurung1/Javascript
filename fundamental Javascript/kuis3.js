// soal 1 :
if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}

const stock = 0;
const milkNeeded = 25;
// soal 2 :
if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}

console.log('Thank you');
// soal 3 :
let x;
x = 7;
x = 'JS is great';
console.log(x);