function linearSearch(arr, search) {
    arr.sort((a,b) => a -b);

    for(let [index, element] of arr.entries()) {
        if(element === search) {
            return index;
        }else if(element > search) {
            break;
        }
    }
    return -1;
}

const arr = [0,1,2,3,4,5,6];
