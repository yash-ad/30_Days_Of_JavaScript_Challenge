//Day-11:Promises and Async-await:-
//Tasks/Activities:-


//Activity One:-[Understanding promises]:-
//Task 1:-Create a promise that resolves with a message after a 2-second timeout and log the message to the console:-

//Lets create a new promise obj:-
let myPromiseOne = new Promise((resolve, reject) => {
    //Simulate an asynchronous operation.
    setTimeout(() => {
        console.log("Hello i'm an asynchronous code! from task queue");
        resolve("Data from the Promise,and I'm from microtask queue which is a high priority queue.")
    }, 2000)
})
    .then((data) => {
        console.log(`Data:${data}`);
        return "Processed Data" //Return  the data to the next data handler.
    })
    .then((finalResult) => {
        console.log(`finalResult:${finalResult}`)
    })
    .catch((error) => {
      console.log(error.message);
        
    })

//////////////////////////////////////////////////////////////////////
    
//Task 2:-Create a promise that rejects an error message after a 2-second timeout and handle the error using .catch():-
//creating the promise:-
let myPromiseTwo = new Promise((resolve, reject) => {
    //For rejecting an error and delay with 2 seconds:-
    setTimeout(() => {
        reject(new Error("Something went wrong!!")); //Reject with an error message.
    }, 2000)
})
.then(() => {
    console.log("This won't be executed because the promise is rejected.");  
    })
.catch((error) => {
    console.log(error.message);   
})



//Activity Two:-[Chaining promises]:-
//Task 3:-Create a sequence of promises that simulate fetching data from a server.chain the promises to log messages in specific order:-

//Simulate fetching data from a server:-


//fetching data:-
let fetchDataExample = fetch('https://jsonplaceholder.typicode.com/posts/1')
    //The first '.then()' checks if a response is ok, if not not then throw an error ,otherwise it parses the response as JSON.
    .then((response) => {
        // console.log('R',response);
        if (!response.ok) throw new Error("Network response is not ok");
        return response.json(); //Parse the JSON data.
    })
    //Processing data:-
    //The second '.then()' logs the fetched data and processed it by the creating a string with the data.title.
    .then((data) => {
        console.log(`Data fetched from server:${data}`);
        return `Processed ${data.title}` //Process the data and pass it to the next promise.
    })
    //Saving data:-
    //The third '.then()' logs the processed data and saving it:-
    .then((processedData) => {
        console.log(`Processing data:${processedData}`);
        return `Saved ${processedData}`
    })
    //Final operations:-
    //The fourth '.then()' logs a final message indicating the operation is completed.
    .then((savedData) => {
        console.log(`Operation completed with:${savedData}`);
    
    })
    .catch((error) => {
        console.log(`Error:${error.message}`);
    
    });


////////////////////////////////////////////////////////////////////////////////
//Activity Three:-[Using Async/Await]:-

//Task 4:Write an async function that waits for a promise to resolve and then logs the resolved value:-

//Define an async function
async function fetchData() {
    
    //Create a promise that resolves with a value:-
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data has been fetched")
        }, 2000)

    });
         //Await the promise to resolve and get the value:-
        const result = await promise;

        //Log the resolved value:-
       console.log(`${result}`);

};

fetchData();





















//1.What is promise?
//Promise its an object representing an eventual completion or failure of an asynchronous operation.
 
//Syntax of a promise:-
// let myPromise = new Promise((resolve, reject) => {
    
// });


//2.What are the uses of promises in js?
//Promises are used to handle asynchronous operations in javascript.
//An asynchronous operation is one that does not complete immediately it takes time to finish.
//Promises allows to write code that can wait for an asynchronous operation to complete the task,
// without blocking the execution of the other code.


//Now promises has four states:-
//1.Pending state:- That means neither been fulfilled nor been rejected , its in the pending state
//2.Fulfilled state:-This state represents that promise has been fulfilled,means that async operations is completed.
//3.Rejected state:-This state represents that promise has been rejected due to asynchronous operation has failed.
//4.Settled state.:-This state represents that the promise has been either rejected or fulfilled.




//.then() and .catch():-


//1].What is .then()?
//Well '.then()' method is used to handle the successful resolution of a promise and '.then()' is directly connected the resolve of a promise.


//2].What is .catch()?
//Well '.catch()' method is used to handle the rejection of a promise and '.catch()'  method is directly connected to the reject of a promise.


//Syntax below:
// let myPromise = new Promise((resolve,reject) => {
    
//     setTimeout(() => {
//         console.log("Hello I'm ans asynchronous code");
//         resolve("Data from the promise");
        
//     },2000) //Set a delay for 2 seconds
// })
// .then((data) => {
//     console.log(data);
//     return "Processed data" //Return the data to the next data handler.
    
// })
// .then((result) => {
//    console.log(result);
    
// })
// .catch((error) => {
//     console.log(error.message);
    
// })

//What is the return value of '.then()' and '.catch()'?
//Both '.then()' and '.catch()' return a promise .
//this allows to chain promises together to handle resolution or rejection of one promise and then handle the successful or rejection of another promise.

//What is callBack hell?
//callBack hell is a situation where the lot of nested callbacks,which can make to code more difficult to read and maintain.

//How can you use '.then()' and '.catch()' to avoid callback hell?
 //Certainly using '.then()' and '.catch()' to chain promises together.which can help to avoid callback hell.
//'.then()' is used for handling the successful resolution of one promise and then use another '.then()' handle the successful resolution of next promise.


//Best practices for using '.then()' and '.catch()'?
 //Always handle the rejection of a promise even if don't expect to be rejected.
//Use '.then()' to handle chain promises together to avoid callback hells.
 


//Why we do we use '.then()' and '.catch()' in promises:-
//Using '.then()' and '.catch()' into the promises for handling successful resolution or a rejection of an asynchronous operation.
//And it is a structure way of handling the asynchronous code.



//What is fetch():-
//Fetch is an inbuilt function in js , it a webAPI provided by the browser to us.
//to make asynchronous HTTP requests to server.
//Fetch() returns a promise.



