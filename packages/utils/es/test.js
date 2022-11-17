export function mySort(arr) {
    let newArr = [arr[0]];
    for (let i = 0; i < (arr).length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] >= arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                newArr[j] = temp;
            }
        }
    }
    console.log(arr);
    console.log(1233);
    return arr;
}
console.log(mySort([1, 2, 3, 34, 5]));
