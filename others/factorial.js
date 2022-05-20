function getFactorial(n) {
    if(n === 1 || n === 0) {
        return n;
    }else {
        return n * getFactorial(n -1);
    }
}
console.log(getFactorial(4));
