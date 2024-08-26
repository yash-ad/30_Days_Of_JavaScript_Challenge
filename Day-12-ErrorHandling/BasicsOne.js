//Day-12:Error-Handling:-
//Tasks/Activities:-


//Activity One:-[Basic Error Handling in a Function]:-
//Task 1:-Write a JavaScript function named divideNumbers that takes two arguments, a and b, and returns the result of dividing a by b. However, you need to handle the following cases:
//If either a or b is not a number, throw an error with the message "Both arguments must be numbers".
//If b is zero, throw an error with the message "Division by zero is not allowed".
//If the division is successful, return the result.


//Lets write a function called 'divideNumbers':-

let divideNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers.")
    }

    if (a === 0 || b === 0) {
        throw new Error("Division by zero is not allowed.")
    }

    return a / b;
};
//lets handle the error gracefully:
try {

    console.log(divideNumbers(10,5)); //2
    
  
} catch (error) {
  console.error(error.message)  
}

try {
  console.log(divideNumbers('a',10)); 
    
}
catch (error) {
  console.log(error.message);//Both arguments must be numbers.
    
}

try {
   console.log(divideNumbers(0,10)); 
    
}
catch (error) {
   console.error(error.message) //Division by zero is not allowed.
}


//Activity Two:-[Checking for Valid Array Index]:-
//Write a function called getElement that takes an array and an index as arguments. The function should return the element at the given index. 
//However, handle the following cases:
//If the index is not a number, throw an error with the message "Index must be a number".
// If the index is out of bounds (less than 0 or greater than or equal to the length of the array), throw an error with the message "Index out of bounds".
// If everything is fine, return the element at the specified index.

//Lets create a function called 'getElement':-

let getElement = (arr, index) => {
    if (typeof index !== 'number') {
        throw new Error("Index must be a number")
    }
    if (index < 0 || index >= arr.length) {
        throw new Error("Index out of bounds")
    }
    return arr[index];
};

try {
    console.log(getElement([1, 2, 3], 3));
    console.log(getElement([1,2,3],2))
    
} catch (error) {
   console.error(error.message) 
};

try {
    console.log(getElement([1,2,3],'a'));
    
} catch (error) {
    console.error(error.message)
};



//Activity Three:-[ Validating User Input]:-
// Create a function called validateUserInput that takes a string as an argument. The function should check if the string meets the following criteria:
//The string should not be empty. If it is, throw an error with the message "Input cannot be empty".
// The string should contain only alphabets (a-z, A-Z). If it contains any other characters, throw an error with the message "Input must contain only alphabets".

//Lets create a function called 'validateUserInput':-
let validateUserInput = (Input) => {
    if (Input === '') {
        throw new Error("Input cannot be empty.")
    }
    if (!/^[a-zA-Z]+$/.test(Input)) {
        throw new Error('Input must contain only alphabets.')
    }
    return true;
}
try {
    console.log(validateUserInput("Hello"));
    console.log(validateUserInput(""));
      
} catch (error) {
  console.error(error.message)  
};
try {
   console.log(validateUserInput("123"));
    
} catch (error) {
    console.error(error.message)
};


//Activity Four:-[Parsing JSON]:-
// Write a function called safeParseJSON that takes a string as an argument. 
//This function should attempt to parse the string as JSON.
//If the parsing is successful, return the parsed object.If the string is not valid JSON, catch the error and return null.

let safeParseJSON = (jsonstring) => {
    try {
        return JSON.parse(jsonstring)
    } catch (error) {
        return error.message
    }
};

console.log(safeParseJSON('{"name":"Yash"}'));
console.log(safeParseJSON("Invalid Json"));



//Activity Five:-[ Fetching Data from an API]:-
//Write an async function called fetchData that takes a URL as an argument and fetches data from that URL using fetch. Handle the following cases:
//If the fetch is successful, return the JSON data.
//If the fetch fails (e.g., network error), catch the error and throw a new error with the message "Failed to fetch data".
//the response status is not 200, throw an error with the message "Error: [status code]".


async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error:${response.status}`)
        }
        return await response.json()
    } catch (error) {
      throw new Error("Failed to fetch data")  
    }
};
fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log(data))
    .catch(error => console.error(error.message));


// fetchData("https://invalid-url.com")
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));