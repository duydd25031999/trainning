let a  = [1, 25, 7, -7, -3, 12, -22, 0]

function absoluteValueSort(arr) {
    const sortedAscendingArray = arr.sort((itemPrev, itemNext) => itemPrev - itemNext);

    let firstPositiveNumberIndex = 0,
            result = [];

    if (sortedAscendingArray.length < 1) {
        return result;
    }

    while (firstPositiveNumberIndex < sortedAscendingArray.length
                && sortedAscendingArray[firstPositiveNumberIndex] < 0) {
        firstPositiveNumberIndex++;
    }

    const negativeArray = sortedAscendingArray.slice(0, firstPositiveNumberIndex).reverse();
    const positiveArray = sortedAscendingArray.slice(firstPositiveNumberIndex);

    let negativeIndex = 0, positiveIndex = 0;

    while (negativeIndex < negativeArray.length || positiveIndex < positiveArray.length) {

        if (negativeIndex < negativeArray.length && positiveIndex < positiveArray.length) {
            if (0 - negativeArray[negativeIndex] <= positiveArray[positiveIndex]) {
                result.push(negativeArray[negativeIndex]);
                negativeIndex++;
            } else {
                result.push(positiveArray[positiveIndex]);
                positiveIndex++;
            }
        
        } else if (negativeIndex < negativeArray.length) {
            result.push(negativeArray[negativeIndex]);
            negativeIndex++;
        } else {
            result.push(positiveArray[positiveIndex]);
            positiveIndex++;
        }
        
    }

    return result;
}

console.log(absoluteValueSort(a)) // [0, 1, -3, -7, 7, 12, -22, 25]
