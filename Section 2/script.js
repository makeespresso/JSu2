// 10. Lecture variables 

/*
var name = 'Ana';
console.log(name);

var lastName = 'Benedict';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: Variables 2

/*
var name ='Ana';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = true; 

console.log(name + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried);

age = 'twenty five';
job = 'programer';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried)

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried);

*/

// 11.OPERATORS 
/*
var now = 2016;
var birthYear = now - 26; 

birthYear = now - 26 * 2;
// 2016 - 52
//1954 

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++; //equals ageJohn + 1
ageMark *= 2;
// is the same, just to not write so much code
// This means he same as above: 
// ageMark = 26

console.log(ageJohn);
console.log(ageMark);


//Interesting math operators: _**_ and increament operator.

*/



//////////////////////////////////////////////////////////////
// LECTURE: if/else statements 
/*
var name = 'Jaque';
var age = 26; 
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon:)');
}

/*another example
isMarried = false;
if(isMarried) {
    console.log('yes');
} else {
    console.log('no');
}


// double = = example:
if(23 == "23") {
    console.log('this is the == example');
}

// triple = = = example: 
if (60 === 60){
    console.log('This is the === example');
}

*/


//////////////////////////////////////////////////
// Lecture: boolean logic and Switch
/*

var age = 25;

if (age < 20) {
    console.log ('john is a teenager'); 
}
else if (age >= 20 && age < 30) {
    console.log('John is a young man');
}
else {
    console.log('John is a man.');
}


///SWITCH STATEMENT:

var job = 'teacher';

job = prompt ('What does Ana do?');

switch (job) {
    case 'teacher':
        console.log('Ana teaches in an elementary school.');
        break;
    case 'programmer':
        console.log('Ana works for Spotify.');
        break;
    case 'barista':
        console.log('Ana owns a coffee shop by the beach.');
        break;
    default:
        console.log('Ana does something else.');
}

*/

/////////////////////////////////////////////////////////////////
// * * * * * C . H . A . L . L .  E . N . G . E . * * * * * *

/*
John and a friend invented a simple game where the player with the highest value of his height (cm) plus five times his age wins.

1. Create variables for the heights and ages of two friends and assign them some values

2. Calculate their scores

3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Do not forget that there can be a draw (both playiers with the same score).

4. EXTRA: Add a third player and now decide who wins. HINT: you will need the && operator to take the desicion. If you can't solve this one, just watch the solution.

*/
/* 
var heightJohn = 162;
var heightMike = 167;
var heightMary = 168;

var ageJohn = 25;
var ageMike = 32; 
var ageMary = 26;

// Calculate score:

var scoreMike = heightMike + 5 * ageMike;
var scoreMary = heightMary + 5 * ageMary; 
var scoreJohn = heightJohn + 5 * ageJohn;
// Caclculate results:

/*
if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!!!');
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game with ' + scoreMike + ' points!!!');
} else if (scoreJohn === scoreMike) {
    console.log ('There is a draw.');
}

*/


// Calculate results with Mary: 
/*

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike){ 
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('there\'s a draw!');
}
 */



///////////////////////////////////////////
/* * * * F . U . N . C . T . I . O . N . S . * * * */


//Using functions for calculate age of people...

/*

function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth; 
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);



function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);

*/ 



// Reviewing functions D   R   Y! 

function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
/*
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);
*/

/*
function yearsUnitlRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
} else { 
    console.log(name + ' is already retired.')
    }
}

yearsUnitlRetirement('John', 1990);
yearsUnitlRetirement('Mike', 1969);
yearsUnitlRetirement('Mary', 1948);

*/


///////////////////////////////////////////////////
// 17. Statements and expressions (& difference)

/*
//FUNCTION STATEMENT EX:
Function someFun (par) {
    //code
}

// FUNCTION EXPRESSIONS EX:
var someFun = function(par){
    //code
}


//The difference between statments and expressions is that an expression produces a value, an outcome whereas the expression just performs and action. 

 // EXPRESSIONS

3 + 4;
var x = 3;

*/






///////////////////////////////////////////////////////////////////////
// A  .  R  .  R  .  A  .  Y  .  S
/*

var names = ['John', 'Jane', 'Mark'];
var years = new Array (1990, 1969, 1948);
 //how to access to the values:

// this is just simply to print the names: 
//         console.log(names);
//but now lets supose that we want to retreive this value, Jane or John: JS is 0 based so A, N, A = 0, 1, 2 

console.log(names[2]);
// Now to mutate; we say that element one should be ben
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('green'); //funtion or method that simply adds and element at the end of the array

john.unshift('Mr.'); //adds an element at the beginning of the array

john.pop(); // removes the last element of the array

john.shift(); // removes the first element of the array

/*alert(john.indexOf('Smith')); // returns the position of the element that we pass into it.  
console.log(john);


if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher.');
}
*/


  ///////////////////////////////////////////////////////////
// O  B  J  E  C  T  S  
/*
//Object literals
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990, 
    job: 'teacher',
    isMarried: false
};

// this below are two different ways to print values out of an object. 
console.log(john. lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

//data mutation works in the similar way as arrays: 
john.name = 'Ana';
john.lastName = 'Mendivil';
john['job'] = 'programmer';

console.log(john);

//different way to create an object

var jane = new Object();
jane.name = 'Will';
jane.lastName = 'Benedict';
jane.yearOfBirth = 1989;
jane.job = 'analyst';
jane.isMarried = true;

console.log(jane);
// or do like this:

/*
jane['yearOfBirth'] = 1989;
jane['job'] = 'analyst';
jane['isMarried'] = true;
*/


///////////////////////////////////////////////////////
// OBJECTS AND METHODS

//An object can hold different types of data such as an array
/* VERSION 1.0
var liza = {
    name: 'Elizabeth',
    lastName: 'Benedict',
    yearOfBirth: 1994,
    job: 'Counselor',
    isMarried: false,
    family: ['Louis', 'William', 'Ana'],
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    }
};

//console.log(john.family[2]);
//nowletscallafunction * function name associated with the function:

//console.log(liza.calculateAge(1990));
console.log(liza.calculateAge());

var age = liza.calculateAge();
liza.age = age;

console.log(liza);
*/

/*
//VERSION 2.0 
var liza = {
    name: 'Elizabeth',
    lastName: 'Benedict',
    yearOfBirth: 1994,
    job: 'Counselor',
    isMarried: false,
    family: ['Louis', 'William', 'Ana'],
    calculateAge: function() {
       // return 2017 - this.yearOfBirth;
        this.age = 2017 - this.yearOfBirth;
    }
};

liza.calculateAge();
console.log(liza);



//read this.xxxx

var louis = {
    name: 'Louis',
    lastName: 'Benedict',
    yearOfBirth: 1992,
    job: 'accountant',
    isMarried: false,
    family: ['Louis', 'William', 'Ana'],
    calculateAge: function() {
       // return 2017 - this.yearOfBirth;
        this.age = 2017 - this.yearOfBirth;
    }
};

louis.calculateAge();
console.log(louis);
*/



////////////////////////////////////////////////////////////
//            L    O  O O O O O O O O O O O O Pssss
//LOOPS are very important in programming, used to repeat code, there are different types of Loops in JS
    // here, we start with the initial value of a counter, and a counter is basically a variable that keeps updated after each itinerarion of a look. *i*
// for (var i = 0;)
//the second part we have a condition, and this wills top the loop other wise infinty

/*for (var i = 0; i < 10; i++) {
    console.log(i);
}  
*/


/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
.
9, true, print 9, update i to 10
10, false, end loop! 
*/


// * * * For Loop * * * //
/*
var names = ['Will', 'Ana', 'Liza', 'Louis', 'Jackson', 'Tita'];

for (var i = 0; i < names.length; i++) {
    console.log (names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);

}
     
*/


/*

// * * * While Loop * * * //

var names = ['Sabas', 'Ivette', 'Defilia', 'Martin', 'Ana'];
//the while loop only has the condition that is evaluated for each loop.
// counter: 
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

//*** Statements for loops- break and continue:
//BREAK:is to break out of the loop, finish at certain point.
for (var i = 1; i <=5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}

//CONTINUE:QUIT the current one and continue with the next one.
for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    
    console.log(i);
}


*/

//Coding Challenge  2
/*
1. Create an array with some years where persons were born
2. Create an empty array (just [])
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of
	full age (18 or older), as well as their age
5. Finally, create a function called printFullAge which receives the vector of
	years as an argument, executes the steps 2., 3 and 4. and returns a vector
	of true/false, boolean values: true if the person is of full age (>= 18 years)
	and false if not (< 18 years)
6. Call the function with two different vectors and store the results in two 
	variables: full_1 and full_2

* Example input: [1965, 2008, 1992]
* Example output: [true, false, true]

? HINT: You can use a loop not only to read from an array, like y[i],
	but also to set values in an array, like y[i] = ... You can also use 
	the specific array methods.

	*/
/*
var years = [1991, 1989, 1992, 2013, 2005];


function printFullAge(years) {
    var ages = [];
    var fullAges = [];   
    
for (var i = 0; i < years.length; i++) {
    ages[i] = 2016 - years[i];
    }

// Use another loop to log in into the console

for(i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is full age.');
    fullAges.push(true);
    } else {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT full age.');
        fullAges.push(false);
            }
    }
    return fullAges;
}

var years = [1991, 1989, 1992, 2013, 2005];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

*/

















