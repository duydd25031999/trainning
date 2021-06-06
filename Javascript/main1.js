/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var addNegabinary = function(arr1, arr2) {
    arr1 = arr1.reverse();
    arr2 = arr2.reverse();
    
    let num1 = arr1.reduce((sum, item, i) => (sum + item * Math.pow(2, i)), 0);
    let num2 = arr2.reduce((sum, item, i) => (sum + item * Math.pow(2, i)), 0);
    
    let sum = Math.abs(num1 + num2);
    let result = [];
    
    if (sum == 0) {
        result = [0];
    } else {
        while (sum > 0) {
            result.push(sum % 2);
            sum = parseInt(sum / 2);
        }
    }
    
    return result.reverse();
};

console.log('addNegabinary', addNegabinary([1,1,1,1,1], [1,0, 1])) //[1,0,0,0,0]
