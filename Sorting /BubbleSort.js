const bubbleSort = (arr) => {
    let swapp;
    do {
        swapp = false;
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i];
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapp = true;
            }
        }
    } while (swapp);
    return arr;
}


console.log(bubbleSort([12, 13, 2, 4, 18, 45, 16, 12]));