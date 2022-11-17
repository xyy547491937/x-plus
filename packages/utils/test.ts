export type Arr = Array<number>
export function mySort<T>(arr:Arr) {
  let newArr:Arr =[arr[0]]
  for(let i:number =0;i<(arr).length; i++) {
    for(let j:number =0;j<newArr.length; j++) {
      if(arr[i]>= arr[i+1]) {
        let temp:number = arr[i]
        arr[i] =arr[i+1]
        arr[i+1] = temp;
        newArr[j] =temp
      }
    }
  }
  console.log(arr);
  console.log(1233);
  
  return arr
}

console.log(mySort([1,2,3,34,5]));

