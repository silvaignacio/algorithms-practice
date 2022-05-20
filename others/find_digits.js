function findDigits(n) {
    // Write your code here

    let original = n;

    let sumEven = 0;
    let separate = n.toString().split("").map(number => parseInt(number));

    for (let j in separate) {
        if (original % separate[j] === 0) {
            sumEven++;
        }
    }
    return sumEven;

}

findDigits(12)
