"use strict"
//

//window.alert();- popup box
//window.prompt();- input field
//window.confirm();- true or false

//document.write(); -- testing
//console.log(); -- testing/debugging

//console.warn(); --testing/debbuging
//console.error(); --testing/debbuging
//console.table(); --testing/debbuging

//innnerHTML -with html tag
//innerText -only text
//value -form elements

//----------------------------------------------Selectors------------------------------
// document.getElementById("");
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.getElementsByName();
// document.querySelector();
// document.querySelectorAll();
// document.forms[];

//------------------------------------------------operators
/*
1. Arithmetic Operators
Used to perform arithmetic calculations:

+ : Addition
- : Subtraction
* : Multiplication
/ : Division
% : Modulus (Remainder)
++ : Increment (adds 1 to a number)
-- : Decrement (subtracts 1 from a number)
2. Assignment Operators
Used to assign values to variables:

= : Assign (e.g., x = 5)
+= : Add and assign (e.g., x += 5 is equivalent to x = x + 5)
-= : Subtract and assign
*= : Multiply and assign
/= : Divide and assign
%= : Modulus and assign
3. Comparison Operators
Used to compare two values:

== : Equal to
=== : Strictly equal to (checks value and type)
/ != : Not equal to
/!== : Strictly not equal to
> : Greater than
< : Less than
>= : Greater than or equal to
<= : Less than or equal to
4. Logical Operators
Used for logical expressions:

&& : Logical AND (returns true if both operands are true)
|| : Logical OR (returns true if one of the operands is true)
/! : Logical NOT (inverts the value)
5. Bitwise Operators
Operate on binary representations of numbers:

& : Bitwise AND
| : Bitwise OR
^ : Bitwise XOR
~ : Bitwise NOT
<< : Left shift
>> : Right shift
>>> : Zero-fill right shift
6. String Operators
Used to work with strings:

+ : Concatenation (e.g., "Hello " + "World" results in "Hello World")
+= : Add and assign (e.g., str += " World" is equivalent to str = str + " World")
7. Ternary Operator
A shorthand for if-else statements:

condition ? expr1 : expr2 (if the condition is true, return expr1; otherwise, return expr2)
8. Type Operators
Used for type checking and conversions:

typeof : Returns the type of a variable (e.g., typeof "hello" returns "string")
instanceof : Checks if an object is an instance of a specific class (e.g., object instanceof Array)
9. Nullish Coalescing Operator
/?? : Returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
10. Spread/Rest Operators
... : Used to expand elements of an array or object in place (spread) or to collect remaining elements (rest).
These operators are essential in manipulating values and performing logic in JavaScript.
*/

// var x=11;
// var y=13;
// var z=x+y;

// document.write(`<h1>The sum of ${x} and ${y} is ${z}</h1>`)

// document.write(10 % 2 ==0 ?'<h1>Even</h1>':'<h1>Odd</h1>');

// var cars=['BMW','AUDI',"PORSCHE"];
            
// document.write(car)

//---------------------------------------VARIABLES-----------------------------------------------------


//Identifiers

// unique
// start with alphabets
// _ and $sign can be used
// it can contain numbers
// case sensitive

//scope

/*
Data type:      var    let     const
Ccope:         Global  block   block
Reassign:       ✔️     ✔️     ✖️
Redeclaration:  ✔️     ✖️     ✖️



*/


{
    var age=2;
    console.log(age);
    
}   

console.log(age);

// String Methods
