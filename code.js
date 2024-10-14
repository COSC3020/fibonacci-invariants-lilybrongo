function fib(n) {

    let array = [0,1];

    if (n === 0) {

        return [0];

    } else if(n === 1) {

        return array;

    } else {
        for (let i = 2; i <= n; i++) {

            array.push(array[i-1] + array[i-2]);
            
        }
    }
    return array;
}
