//Day-11:Promises and Async-await:-

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
let myPromise = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        console.log("Hello I'm ans asynchronous code");
        resolve("Data from the promise");
        
    },2000) //Set a delay for 2 seconds
})
.then((data) => {
    console.log(data);
    return "Processed data" //Return the data to the next data handler.
    
})
.then((result) => {
   console.log(result);
    
})
.catch((error) => {
    console.log(error.message);
    
})

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







//Tasks/Activities:-
//Activity One:-[Basic event handling]:-

