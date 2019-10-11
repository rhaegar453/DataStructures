const selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let j_min=i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[j_min]>arr[j]){
                j_min=j;
            }
        }
        if(j_min!==i){
            swap(arr, i, j_min);
        }
    }
    return arr;
}



function swap(A, x, y){
    let temp=A[x];
    A[x]=A[y];
    A[y]=temp;
    return A;
}

console.log(selectionSort([18, 20, 10, 12, 34]));