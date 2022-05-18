console.time("linearSearch");
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
console.timeEnd("linearSearch");
const array = Array.from({length: 10000000}, () => Math.floor(Math.random() * 10000000));
console.log(linearSearch(array, 1));

