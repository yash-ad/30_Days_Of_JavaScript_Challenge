///.Feature Request [For practice purpose]:-

//1:Book Object Script:-
//Write a script that creates a book object and adds methods to it and logs its properties and method results:-

//Create a book object:-

const book = {
    title: 'The Way of the Superior Man',
    author: 'David Deida',
    year: 1998,

    //Add methods to it:-

    //Method to get summary of the book:-
    getSummary: function () {
        return `${this.title} by ${this.author} ,published in ${this.year}`
    },
        
    //Method to get age of the book:-
    getAge: function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year
    }

    
};

//logs its properties:-
console.log(`Book's Title is ${book.title}`);

console.log(`Book's Author is ${book.author}`);

console.log(`Book's Year is ${book.year}`);


//Log the result of calling the summary method:-
console.log(`Book-Summary:${book.getSummary()}`);

console.log(`Book-Age:${book.getAge()}`);


//2:Library object script:-
//Create a script that defines a library object containing an array of book objects and log the library's details:_
const library = {
    name: "City-Library",
    books: [
        {
            title: 'The Way of the Superior Man',
            author: 'David Deida',
            year: 1997,
            //method for library's book detail
            getDetails: function () {
                return `"${this.title}" By ${this.author} and published year is ${this.year}`
            }
        },
        {
            title: 'The Last Breath',
            author: 'Katrina Kittle',
            year: 2006,
            //method for library's book detail
            getDetails: function () {
                return `"${this.title}" By ${this.author} and published year is ${this.year}`
            }
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960,
            //method for library's book detail
            getDetails: function () {
                return `"${this.title}" By ${this.author} and published year is ${this.year}`
            }
        }
    ]
};

library.books.forEach((book) => console.log(book.getDetails()));

//3:Object iteration script:-
//Write a script that demonstrates iterating over an object's properties using 'for...in' loop and 'Object.keys' / 'Object.values':-

for (let prop in library) {
    console.log(`Properties:${prop},Value:${library[prop]}`)
};

//Iterating over an array 'Books':-
library.books.forEach((book,index) => {
    console.log(`Book ${index + 1}`)

    //Log all the keys of object.
    console.log(`Keys:${Object.keys(book)}`);

    //Log all the values of object.
    console.log(`Values:${Object.values(book)}`);
})