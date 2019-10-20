function bubleSort(arr){
  if(arr.length===1) return arr;

  for(let i=0; i<arr.length-1; i++){
      let left = arr[i];
      let right = arr[i + 1];

      if (left > right) {
        arr[i] = right;
        arr[i + 1] = left;
      }
  }
  const last = arr.pop();

  return [...bubleSort(arr), last]
}

console.log('--',bubleSort([7,9,2,22,1,5,6,3,123,4,32]));