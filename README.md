

# Lab 6.2, Promises and Error Handling

## Description
In this lab asynchronous API calls are simulated to explore Promise's. Calls are resolved and rejected randomly in order to simulate custom error classes and test how they handled. 



## Running the program
To view use this lab, run index.js from /dist
<br>

## Reflection Questions
> Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?
Errors handled separately will call their individual catch statements.

<br>

> How does using custom error classes improve debugging and error identification?
Custom errors can have their error messages specialized to the conditions that result in a thrown error. 

<br>

> When might a retry mechanism be more effective than an immediate failure response?
Anytime a system is waiting to receive information, otherwise an unexpected delay would guarantee no result.
<br>
