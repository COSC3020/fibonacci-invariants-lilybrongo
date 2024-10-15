# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

I think a good invariant for my recursive implementation of 'fib()' would be using the two previous fibonnaci elements, which would be $(i-2) and (i-1)$. At the start of teh loop, the array conatians fib(0) and fib(1). These satisfy the base cases for the sequence. As the loop continues to iterate through, the invariant shows that for each index i, from 2 to n, the elements of fib(i-2) and fib(i-1) are represented. Since the definition of the fibonacci sequence is the sum of the two preceding values, during each iteration fib(i) is calculated using this method. And after seeing this pattern, the invariant remains applicable to this implementation.  

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Referrenced fellow student Collin Davis's repository to see an outline of code, and modified to how I understood it. Also communicated with Will Greiner to get an understanding of the problem. Referenced lecture slides to see how invarients worked and how to pick the best case.


I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.


