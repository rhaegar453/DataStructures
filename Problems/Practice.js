const findGCD=(a, b)=>{
    if(a==0){
        return b;
    }
    if(b==0){
        return a;
    }
    if(a==b){
        return a;
    }
    if(a>b){
        return findGCD(a-b, b);
    }
    else{
        return findGCD(a, b-a);
    }
}

console.log(findGCD(12, 3));