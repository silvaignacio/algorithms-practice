function binarySearch(arr, search) {
    let lower = 0;
    let upper = arr.length - 1;
    // We must sort array by order ascendant
    arr.sort((a,b) => a - b);

    // Begin a loop while we inspect the middlemost value between upper and lower
    while (lower <= upper) {
        // We can divide per 2 the mid point
        let middle = Math.floor((upper + lower ) / 2);
        // We must declarate the value in this position
        let value = arr[middle];

        // If the search value to find it it's equal to value at middle, we must return it
        if(search === value) {
            return middle;
        }
        else if(search <= value) { // If the search value to find it's lower than this middle value, we can search in the earlier values in array
            upper = middle - 1;
        }else if(search > value) {  // If the search value to find it's lower than this middle value, we can search in the latest values in array
            lower = middle + 1;
        }
    }
    return -1;
}

const array = [3, 17, 75, 80, 202];
console.log(binarySearch(array, 80));
