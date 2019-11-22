// 数组必须有序   且没有重复
function binaryFind(arr, val){
    if(arr.length === 1){return arr[0] === val}

    let low=0,high=arr.length-1;

    while(low<=high){
        let middle = Math.floor((high-low)/2);
        if(arr[middle] === val){
            return middle;
        }else if(arr[middle]<val){
            low = middle+1;
        }else{
            high = middle-1;
        }
    }

    return -1;
}

// 变体问题  数组有序，可以有重复
// 找第一个等于给定值的值
function findFirstEqual(arr, val){
    if(arr.length === 1){return arr[0] === val}

    let low=0, high=arr.length-1;

    while(low === high){
        let middle = Math.floor((high-low)/2);
        if(arr[middle]>val){
            high = middle-1;
        }else if(arr[middle]<val){
            low = middle+1;
        }else{
            if(middle === 0 || arr[middle-1]<val){
                return middle;
            }else{
                high = middle-1;
            }
        }
    }

    return -1;
}

// 找最后一个等于给定值的值
function findLastEqual(arr, val){
    if(arr.length === 1){return arr[0]===val}

    let low=0,high=arr.length-1;

    while(low<=high){
        let middle = Math.floor((high-low)/2);
        if(arr[middle]<val){
            low = middle+1;
        }else if(arr[middle]>val){
            high = middle-1;
        }else{
            if(middle === arr.length-1 || arr[middle+1]>val){
                return middle;
            }else{
                low = middle+1;
            }
        }
    }
}

// 找第一个大于等于给定值的值
function findFirstLarger(arr, val){
    if(arr.length === 1){return arr[0]>=val}

    let low=0, high=arr.length-1;

    while(low<=high){
        let middle = Math.floor((high-low)/2);
        if(arr[middle]<middle){
            low = middle+1;
        }else{
            if(middle === 0 || arr[middle-1]<val){
                return middle;
            }else{
                high = middle-1;
            }
        }
    }
}

// 找最后一个小于等于给定值的值
function findLastSmaller(arr, val){
    if(arr.length === 1){return arr[0]>=val}

    let low=0, high=arr.length-1;

    while(low<=high){
        let middle = Math.floor((high-low)/2);
        if(arr[middle]>val){
            high = middle-1;
        }else{
            if(middle === arr.length-1 || arr[middle+1]>val){
                return middle;
            }else{
                low = middle+1;
            }
        }
    }
}