function sumEven(arr) {
    let sumEven = 0;
    let countEven = 0;
    for(let i in arr) {
        if(arr[i] % 2 === 0) {
            sumEven+=arr[i];
            countEven++;
        }
    }
    return sumEven / countEven;
}
console.log(sumEven([1,2,3,4,5,5]));
