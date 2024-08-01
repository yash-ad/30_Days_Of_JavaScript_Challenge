//Day 7:Objects:-

//Tasks/Activities:-
//Activity One:-[Selecting and manipulating elements]:-


//Task 1:-Select an HTML element by its ID and change its text content:-
//Lets change the text content by selecting an ID:-

let changeTextContent = document.getElementById('changeText');
setTimeout(() => {
    changeTextContent.textContent="Chai aur code";
    
}, 5000);

//Task 2:- Select an HTML element by its class and change its background color:-

//Lets change the background color by selecting a class:-

let changeBgColor = document.querySelector('.changeBgColor');

setTimeout(() => {
    changeBgColor.style.backgroundColor = "Orange";
}, 5000)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Activity Two:-[Creating and appending elements]:-
//Task 3:- create a new div element with some text content an append it to the body:-

//Lets create a div element from the js file into the body:-
// Create a new div element
let createDivEle = document.createElement('div');

// Set the text content of the new div
createDivEle.textContent = "I came from JavaScript";

//change the background color:-
createDivEle.style.backgroundColor = "Red"

// Append the new div to the body:-
document.body.appendChild(createDivEle);


//////////////////////////////////////////////////////////////////////////////////////////////

//Task 4:- create a new div 'li' element and add it to an existing 'ul' list:-
//Create a new 'li' element:-
let createLiEle = document.createElement('li');

// selected the 'ul' element by an ID:_
let ulElement = document.getElementById('myList');

// set the text content of the new li:-
createLiEle.textContent = "A new list came from the javascript";

//Append the new 'li' to the ul:-
ulElement.appendChild(createLiEle);

/////////////////////////////////////////////////////////////////////////////////////////////////

//Activity Three:-[Removing elements]:-
//Task 5:- Select an HTML and remove it from the DOM:-

//lets remove an html element from the DOM:-
let removeEle = document.querySelector('.changeBgColor');

//Using remove method() for removing from the DOM.
removeEle.remove();


//Task 6:- Remove the last child of a specific HTML element:-
// Select the specific HTML element (assuming it has an id of 'myElement')
// let myElement = document.getElementById('myElement');

// // Check if the element has any children
// if (myElement.lastChild) {
//  // Remove the last child
//     myElement.removeChild(myElement);
// };


///////////////////////////////////////////////////////////////////////////////////////////////////////

//Activity Four:-[Modifying attribute and classes]:-
//Task 5:- Select an HTML element and change one of its attributes:-

//Lets add attribute to the html element 'img' tag:-

let changeAttribute = document.getElementById('myImage');

// Change the 'src' attribute to the provided image URL
changeAttribute.setAttribute('src', "https://imgproxy.learnyst.com/https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/171024/schoolLogo/1717484431216banner_lyst1717484431227.png?w=0&h=0&resizetype=fit");


//Task 8:- Add and remove a CSS class to/from an HTML element:-

let createClass = document.getElementById('MyElement');

//Add a Css class:-
createClass.classList.add("newClass");

createClass.style.backgroundColor = "Green";

//Remove a Css class:-
//With setTimeout():_

setTimeout(() => {
    
    createClass.classList.remove("newClass")
}, 2000);

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Activity five:-[Event handling]
//Task 9: Add a click event listener to a button that changes a text content to a paragraph:-


//Select the button element by its ID:-
let changeContentBtn = document.getElementById('changeContent');


// Select the paragraph element by its ID
let headingTitle = document.getElementById('title');

// Add a click event listener to the button
changeContentBtn.addEventListener('click', () => {
    console.log("Button clicked");
    headingTitle.textContent = "Chai aur code - by Hitesh choudhary sir";
});

//task 10: Add a mouseover event listener to an element that changes its border color:-

//Select the div for a hover effect:-
let hoverOverDiv = document.getElementById('hoverEffect');

//Add an event listener to the div:-
hoverOverDiv.addEventListener('mouseover', () => {
    hoverOverDiv.style.borderColor = "Red"
});


// When mouseout to the hover reset to the border color:-
hoverOverDiv.addEventListener('mouseout', () => {
     hoverOverDiv.style.borderColor = "Black"  
})