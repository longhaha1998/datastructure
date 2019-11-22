function positionPivot(arr, left, right) {
    let startIndex = left;
    for (let i = left; i<right; i++) {
        if (arr[i]<arr[right]) {
            [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]];
            startIndex++;
        }
    }
    [arr[startIndex], arr[right]] = [arr[right], arr[startIndex]];
    return startIndex;
}

function quickSort(arr, left, right) {
    if (left<right) {
        let pivotIndex = positionPivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1<left?left:pivotIndex - 1);
        quickSort(arr, pivotIndex+1>right?right:pivotIndex+1, right);
    }
    return arr;
}

// 不是原地排序
function quickSortZoom(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i<arr.length; i++) {
        if (arr[i]<pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSortZoom(left), arr[0], ...quickSortZoom(right)];
}

function positionPivotK(arr, left, right) {
    let startIndex = left;
    for (let i = left; i<right; i++) {
        if (arr[i]>arr[right]) {
            [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]];
            startIndex++;
        }
    }
    [arr[startIndex], arr[right]] = [arr[right], arr[startIndex]];
    return startIndex;
}

function kthNum(arr, k){
    if(arr.length<k){return false}
    let p = positionPivotK(arr, 0, arr.length-1);
    while( (p+1) !== k){
        if((p+1) > k){
            p = positionPivotK(arr, 0, p-1);
        } else{
            p = positionPivotK(arr, p+1, arr.length-1);
        }
    }
    return arr[p];
}
  