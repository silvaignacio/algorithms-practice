/**
 * @description Complexity of O(N) because we must iterate only the characters of an string
 * @param str
 * @returns {boolean}
 */
function isPalindrome(str) {
    let leftIndex = 0;

    // We must get the last index of string
    let rigthIndex = str.length - 1;

    // We must iterate until firt reach the middle of string
    while (leftIndex < str.length / 2) {

        if(str[leftIndex] !== str[rigthIndex]) {
            return false;
        }else {
            return true;
        }
        rigthIndex--;
        leftIndex++;
    }
}
console.log(isPalindrome("ama"));
