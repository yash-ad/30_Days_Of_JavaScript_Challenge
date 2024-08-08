///Day 7:Objects:-

//Tasks/Activities:-
//Activity One:-[Object creation and access]:-

//Task 1:- Create an object representing a book with properties like title,author, and year and log the object to the console:-

const bookObj = {
    name: "The way of superior man",
    title: "The masculine energy",
    author: "David deida",
    year: 2016
};
console.log(bookObj);
console.log(`The name of book is '${bookObj.name}'.`);

//Task 2:- Access and log the title and author properties of the book object:-
console.log(`The title of book is '${bookObj.title}' and Author is '${bookObj.author}'.`);


//Activity Two:-[Object Methods]:-
//Task 3:- Add a method to the book object that returns a string with the books title and author and log the result of calling this method:-

bookObj.getDetails = function () {
    return `Title : '${this.title}' , Author : '${this.author}'.`;
}
console.log(bookObj.getDetails());


////Task 4:- Add a method to the book object that takes a parameter (year) and updates the books year property, them log the updated object:_

bookObj.getDetailOfBook = function (year) {
    return `Book Year : ${year}`
};

console.log(bookObj.getDetailOfBook(2018)); //Book Year : 2018.


//Activity Three:-[Nested objects]:-
//Task 5:- Create a nested object representing a library with properties like name and books (an array of  objects) and log the library object to the console.
const library = {
    name: "City-Library",
    books: [
        { 
            title: 'The Way of the Superior Man', 
            author: 'David Deida', 
            year: 1997,
            getDetails: function() {
                return `Title: '${this.title}', Year: ${this.year}`;
            }
        },
        { 
            title: 'The Last Breath', 
            author: 'Katrina Kittle', 
            year: 2006,
            getDetails: function() {
                return `Title: '${this.title}', Year: ${this.year}`;
            }
        },
        { 
            title: 'To Kill a Mockingbird', 
            author: 'Harper Lee', 
            year: 1960,
            getDetails: function() {
                return `Title: '${this.title}', Year: ${this.year}`;
            }
        }
    ]
};

console.log(`Nested object representing a library : ${library}`);


//Task 6:- Access and log the name of the library and the titles of all books in the library:-

console.log(`Name of the library ${library.name}`);

// Iterate over the books array to log the titles of all books
library.books.forEach((book)=> console.log(`The title of the book is: ${book.title}`))

// Iterate over the books array to log the author of all books:-
library.books.forEach((book) => console.log(`The author of the book is : ${book.author}`));



//Activity Four:-[The 'this' keyword]:-
//What is actually 'this' keyword in javascript?
// In javascript `this` keyword refers to the object that is currently executing the code.
// the value of 'this' keyword depends on how a function is called and the context on which it is used.

//Task 7:- Add a method to the book object that uses the 'this' keyword to return a string with the books title and year and log the result of calling this method:-
library.books.forEach(book => {
    console.log(book.getDetails());
});


//Activity Five:-[Object iteration]:-
//Task 8:- use a 'for...in' loop to iterate over the properties of the book object and log each property and its value:-

//Properties = prop.


//use a 'for...in' loop to iterate over the properties of the library object:-

    //Log each property and its value.

for (let prop in library) {
    console.log(`Property:${prop},Value:${library[prop]}`);
    // /If the property is 'books', iterate over the array of book objects:-
if (prop === 'books') {
    library[prop].forEach((book, index) => {
        console.log(`Book ${index + 1}:`);
        for (let bookProp in book) {
            if (typeof book[bookProp] !== 'function') {
                console.log(` ${bookProp}: ${book[bookProp]}`);
            }
        }
    });
}
    }

//Property: books, Value: [object Object],[object Object],[object Object]
//Here the 'Library' is an object with an object there is a property 'books' its an array of objects.


//Task 9:- Use 'object.keys' and 'object.values' methods to log all the keys and values of the book object:-

//Iterate over each book in the books array:-

library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);

    //Log all the keys of book object:-
    console.log('Keys:',Object.keys(book));

    //log all the values of the book object:-
    console.log('Values:',Object.values(book))

})

//In javascript how many different methods you can make an object?
//In javascript there are several ways to declare or construct an object:-
//1.Object
//2.Using Class
//3.using function
//4.object literals
//5.create method
//6.object constructor.


