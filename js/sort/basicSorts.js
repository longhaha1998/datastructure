// 冒泡排序
function bubbleSort(arr) {
    for (let i = 0;i<arr.length;i++) {
        let flag = false;
        for (let j = 0;j<arr.length-i-1;j++) {
            if (arr[j]>arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    return arr;
}

// 插入排序
function insertSort(arr) {
    for (let i = 1; i<arr.length; i++) {
        let temp = arr[i];
        let j = i-1
        for (; j>=0; j--) {
            if (arr[j]>temp) {
                arr[j+1] = arr[j]
            } else {
                break;
            }
        }
        arr[j+1] = temp;
    }
    return arr;
}

// 选择排序
function selectSort(arr) {
    for (let i = 0; i<arr.length-1; i++) {
        let minIndex = i;
        for (let j = i+1; j<arr.length; j++) {
            if (arr[j]<arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}