/*
var country = [
    {name: "USA", capital: "Washington", currency: "dollar"},
    {name: "Russia", capital: "Moscow", currency: "rubl"},
    {name: "Korea", capital: "Seoul", currency: "won"},
    {name: "Turkey", capital: "Anqara", currency: "lira"},
    {name: "Uzbekistan", capital: "Tashkent", currency: "sum"},
    {name: "Italy", capital: "Rim", currency: "euro"},
    {name: "England", capital: "London", currency: "pound sterling"},
    {name: "China", capital: "Beijing", currency: "Yuan"},
    {name: "Spain", capital: "Madrid", currency: "euro"},
    {name: "Katar", capital: "Doha", currency: "riyal"},

];
*/
/*
let str = "I love  JavaScript";
const pattern = /love/;
const patern = "[Ll]ove";
//const result = str.search(pattern);
//const result = str.match(pattern);//qidiryatgan malumotimiz bormi yo'qligini va bo'lsa indexni aniqlab chiqarib beradi
//const result = pattern.test(str); qidiryatgan malumotimiz karobkani ichida bo'lsa "TRUE" chiqaradi
//const matchreplace = str.replace(/love/,"hate")
const maatches = str.match(patern);
console.log(maatches);
*/
/*
const txt = 'This regular expression was made in December 6, 2019';
const pattern = /\b\w{2}\b/g;
const matches = txt.match(pattern);
console.log(matches);
*/
/*
let pattern = /^[A-Z][a-z]{3,12}$/;//A-Z/a-z gacha bo'lgan harflar bo'lsa va 3 tadan 12 tagacha bo'lgan so'z bo'lsa "TRUE" bo'lmasa "FALSE" chiqaradi
let name = "Asabeneh";
let result = pattern.test(name);
console.log(result);
*/

/*
console.error("this is a warning");

const names = ["Abubakir", "Umar", "Usman", "Ali"];
console.info("JavaScript");
*/
/*
console.assert(4<3, "4 is not greater than 3");
console.clear()
*/
//=========================================01.20.24 class======================================================================
/*
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

const person1 = new Person('Asabeneh', 'Yetayeh');

console.log(person1);
*/
/*
class Person {
    constructor(
        firstName = "Asabeneh",
        lastName = "Yetayeh",
        age = 25,
        country = "Finland",
        city = "Helsinki"
    ) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.country = country,
        this.city = city
    }
};

const person1 = new Person();

const person2 = new Person('Sokhibjon', 'Sodikjonov', 27, 'Uzbekistan', 'Ferghana') 

console.log(person2);
*/
/*
class Person {
    constructor (firstName, lastName, age, country, city) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.country = country,
        this.city = city
    }
    getFullName() {
        const fullName = this.firstName+' '+this.lastName;
        return fullName
    }
};

const person1 = new Person ('Sokhibjon', 'Sodikjonov', 27, 'Uzbekistan', 'Ferghana');

console.log(person1.getFullName())
*/
/*
const user = `{
    "user":[
        {
            "firstName":"Asab",
            "lastNmae":"Nasir",
            "age":25,
            "email":"asab@gamil.com"
        },
        {
            "firstName": "Alex",
            "lastNmae" : "Jhons",
            "age" : 25,
            "email" : "jhon@gamil.com"
        }
     ]
}`

const userobj = JSON.parse(user);

console.log(userobj);
*/
/*
const user = {
    firstName:'Asab',
    lastName: 'Jhones',
    country: 'Finland',
    city: 'Helsinki',
    email: 'jhones@gmail.com',
    skills: ['HTML', 'JS', 'Python', 'React'],
    age: 25,
    isLoggedIn: false,
    points: 30
}

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'], 15);

console.log(txt);
*/

//=================================promise==========================================================
/*
const doSomething = callback => {
    setTimeout(()=>{
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)
};

const callback = (err, result) => {
    if(err){
        return console.log(err)
    } 
    return console.log(result)
}
console.log(doSomething(callback));
*/
/*
const doSomething = callback => {
    setTimeout(()=>{
        const skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 2000)
};

const callback = (err, result) => {
    if(err){
        return console.log(err)
    } 
    return console.log(result)
}
console.log(doSomething(callback));
*/

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }
//     return innerFunction
// };

// const innerFunc = outerFunction();

// console.log(innerFunc);
// console.log(innerFunc);
// console.log(innerFunc);


// const callback = (err, result) => {
//     if(err){
//         return console.log(err)
//     } 
//     return console.log(result)
// }
// console.log(doSomething(callback));

// let arr = [2,7,11,15]; target = 9;

// function two_index(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (arr === target) {
        
//         }
        
//     }return arr[i]
    
// }


// function twoSum(array,target) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if (array [i] + array[j] === target) {
//                 return [i, j];
//             }           
//         }
        
//     } 
// }


// console.log(twoSum([15, 7, 11, 2],9))
// console.log(twoSum([3, 2, 4],6))
// console.log(twoSum([3,3],6))

// function isPalindrome (palindrome) {
//     palindrome = palindrome.toString(); 
//     if (palindrome === palindrome.split(" ").reverse().join(" ")) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));




// function isPalindrome(palindrome){ 
//     palindrome = palindrome.toString(); 
//     return palindrome === palindrome.split('').reverse().join('');
// }


// console.log(isPalindrome(121));

// console.log(isPalindrome(-121));

// console.log(isPalindrome(10));


var addTwoNumbers = function(l1, l2) {
    
};