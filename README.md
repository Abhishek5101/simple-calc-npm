# Calculator

A simple calculator for addition, subtraction, multiplication, and division

## Installing

```bash
npm i simple-calc
```

## Express

```javascript
const express = require("express");
const app = express();
const calculator = require("simple-calc");
```

## Methods

### calculator.add(...numbers) --> number

- **numbers** - Any number of digits to add together

```javascript
// 1+2+3+4+5
calculator.add(1,2,3,4,5) --> 15

// 2+12+4+1+11
calculator.add(2,12,4,1,11) --> 30
```

### calculator.subtract(...numbers) --> number

- **numbers** - Any number of digits to subtract

```javascript
// 1-2-3-4-5
calculator.subtract(1,2,3,4,5) --> -13

// 2-12-4-1-11
calculator.subtract(2,12,4,1,11) --> -26
```

### calculator.multiply(...numbers) --> number

- **numbers** - Any number of digits to multiply

```javascript
// 1*2*3*4*5
calculator.multiply(1,2,3,4,5) --> 120

// 2*12*4
calculator.multiply(2,12,4) --> 96
```

### calculator.divide(num1, num2) --> number

- **num1** - The number to be divided
- **num2** - The number to divide num1 by

```javascript
// 9/3
calculator.divide(9,3) --> 3

// 72/8
calculator.divide(72, 8) --> 9
```
