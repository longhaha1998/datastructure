function mergeSort(arr){
    if(arr.length === 1){return arr}
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return mergerArr(mergeSort(left), mergeSort(right));
}

function mergerArr(left, right){
    let temp = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(left.length>leftIndex && right.length>rightIndex){
        if(left[leftIndex]<=right[rightIndex]){
            temp.push(left[leftIndex]);
            leftIndex++;
        }else{
            temp.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return [...temp, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}