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