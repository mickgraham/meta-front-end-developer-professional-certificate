function fib(n, cache = {}) {
    // Step 1: Define the base case(s) here.
    // Hint: What is the value of Fibonacci(0) and Fibonacci(1)?
    if (n < 2) {
        return n;
    }
    
    // Step 2: Define the recursive case here.
    // Hint: Return the sum of Fibonacci(n-1) and Fibonacci(n-2).
    if (!cache[n]) {
        cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
    }
    return cache[n];
}

console.log(fib(5));
console.log(fib(10));