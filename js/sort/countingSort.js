function countingSort(arr){
    if(arr.length<=1){return arr};
    let maxVal = Math.max.apply(null, arr);
    let countingArr = new Array(maxVal+1);
    countingArr.fill(0);

    for(let i=0; i<arr.length; i++){
        countingArr[arr[i]]++;
    }

    for(let i=1; i<countingArr.length; i++){
        countingArr[i] = countingArr[i]+countingArr[i-1];
    }

    let result = [];
    for(let i=arr.length-1; i>=0; i--){
        result[countingArr[arr[i]]-1] = arr[i];
        countingArr[arr[i]]--;
    }

    return result;
}

function countingSortUnstable(arr){
    if(arr.length<=1){return arr};
    let maxVal = Math.max.apply(null, arr);
    let countingArr = new Array(maxVal+1);
    countingArr.fill(0);

    arr.forEach( ele => {
        countingArr[arr]++;
    });

    let sortIndex = 0;
    countingArr.forEach((count, i) => {
        while(count>0){
            arr[sortIndex] = i;
            sortIndex++;
            count--;
        }
    });

    return arr;
}