function fib(n) {
    let array = []
    if (n === 0) {
        array = [0]
        return [0];
    } 
   // if (n === 1) {
     //   return [0,1];
    //} 
    array = [0,1]
    for (i = 2; i <= n; i++) {
        array.push(array[i-1] + array[i-2]);    
    }
    return array;
}
