let a = [1, 25, 7, -7, -3, 12, -22, 0]

// clone git này về
// tạo 1 branch mới tên "buoi-1"
// hoàn thành bên dưới -> commit -> push branch "buoi-1" lên github
function absoluteValueSort(arr) {
    const sortArr = arr.sort(function(num1, num2) {
        return num1 - num2;
    });

    // lọc index âm
    let i = 0;
    console.log('sortArr', sortArr)
    while (i < sortArr.length && sortArr[i] < 0) {
        console.log(i, sortArr[i])
        i++;
    }

    const firstPositiveIndex = i;

    const positiveArray = sortArr.slice(i);
    const negativeArray = sortArr.slice(0, i);
    let result = [];

    console.log('positiveArray', positiveArray)
    console.log('negativeArray', negativeArray)

    let negativeIndex = 0,
        positiveIndex = 0;

    function insertToResult(value) {
        result.forEach((item, i) => {})
    }

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

// absoluteValueSort(a)

console.log(absoluteValueSort(a)) // [0, 1, -3, -7, 7, 12, -22, 25]

var b = {
    name: "Duy",
    age: 21,
    showInfor: function() {
        console.log(this); // 'this' thay thế  cho a
    }
}

// b.showInfor();

var c = {
    func: function() {
        function func2() {
            console.log(this); // 'this' thay thế  cho 'Window'
        }
        func2();
    }
}

// c.func();