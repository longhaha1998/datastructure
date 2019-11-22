function bucketSort(arr, size=5){
    if(arr.length<2){return arr}
    const buckets = createBuckets(arr, size);
    return sortBuckets(buckets);
}

function createBuckets(arr, size){
    let minVal = Math.min.apply(null, arr);
    let maxVal = Math.max.apply(null, arr);
     // 根据最小值、最大值、桶的大小，计算得到桶的个数
     // 桶的大小不是指里面放几个数，而是指值的个数，如size=5  指的是值为0 1 2 3 4的数都放在这个桶里
    let bucketCount = Math.floor((maxVal - minVal)/size)+1;

    let buckets = [];
    for(let i=0; i<bucketCount; i++){
        buckets[i] = [];
    }
    // 计算每一个值应该放在哪一个桶中
    for(let i=0; i<arr.length; i++){
        let index = Math.floor((arr[i]-minVal)/size);
        buckets[index].push(arr[i]);
    }

    return buckets;
}

function sortBuckets(buckets){
    const result = [];
    for(let i=0; i<buckets.length; i++){
        quickSort(buckets[i], 0, buckets[i].length-1);
        result.push(...buckets[i]);
    }
    return result;
}