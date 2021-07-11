const minimal = (a,b) => {
    if(a<b){
        return a;
    } else if(a==b){
        return a;
    } else{
        return b;
    }
}

console.log(minimal(3,3));

const power = (a,b) => a**b;

console.log(power(7, 3));
power(3,3)
power(4, 0.5)