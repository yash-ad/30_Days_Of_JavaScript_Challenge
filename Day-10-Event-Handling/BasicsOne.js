//Day-10:Event handling:-

//Tasks/Activities:-
//Activity One:-[Basic event handling]:-


//Task 1:-Add a click eventlistener to a button that changes the text content of a paragraph:-
//First and foremost thing select elements:-
let changeParaContent = document.getElementById('para');

let btn = document.getElementById('btnHandler');

//Added an eventlistener to click on a button an event occurs.
btn.addEventListener('click', () => {
    changeParaContent.textContent = "Hello Javascript";
    changeParaContent.style.backgroundColor = "orange"
});


//Task 2:-Add a double click-eventlistener to an image that toggles its visibility:-
//Select elements from an html page:-

// Adding an event listener the property called 'ondbclick':-
   const image = document.getElementById('toggleImage');
        image.ondblclick = () => {
            image.style.display = image.style.display === 'none' ? 'block' : 'none';
};
///////////////////////////////////////////////////////////////////////////////////////////////////////
        
//Activity Two:-[Mouse events]:-

//Task 3:- Add a mouseover event listener to an element that changes its background color:-

//select an element from an html page:-
let hoverEffect = document.getElementById('hoverEffect');

hoverEffect.addEventListener('mouseover', () => {
    alert("Hello-World")
    hoverEffect.style.backgroundColor = "gold";
})

//Task 4:- Add a mouseout event listener to an element that resets its background color:-
hoverEffect.addEventListener('mouseout', () => {
    hoverEffect.style.backgroundColor = "crimson";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Activity Three:-[Keyboard events]:-
//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console:-

//Lets select element from an html page:-


  let keyEvent = document.getElementById('inputField');

        // keyEvent.addEventListener('keydown', (event) => {
        //     console.log(`Key pressed: ${event.key}`);
        // });


//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph:-\

//select an element from an html page:-

// let inputValue = document.getElementById('inputText');

//    keyEvent.addEventListener('keyup', (event) => {
//             console.log(`Key pressed with 'keyup' event: ${event.target.value}`);
//             inputValue.textContent = `Current input value: ${event.target.value}`;
//    });
        
/////////////////////////////////////////////////////////////////////////////////////////////////////
   
//Activity Four:-[Form events]:-
//Task 7:- Add a submit eventlistener to a form that prevents the default submission and logs the form data to the console:-

//Initially select elements:-
  // Select the form element
        // const form = document.getElementById('myForm');

        // // Add submit event listener to the form
        // form.addEventListener('submit', function(event) {
        //     // Prevent the default form submission
        //     event.preventDefault();

        //     // Create a FormData object from the form element
        //     const formData = new FormData(form);

        //     // Create an object to store the form data
        //     const formObject = {};

        //     // Iterate over the FormData entries
        //     formData.forEach((value, key) => {
        //         formObject[key] = value;
        //     });

        //     // Log the form data to the console
        //     console.log(formObject);
        // });

        //Task 8:- Add a change eventlistener to a select dropdown that displays the selected value in a paragraph:-
       // Select the dropdown and paragraph elements
        const dropdown = document.getElementById('dropdown');
        const selectedValueParagraph = document.getElementById('selectedValue');

        // Add change event listener to the dropdown
        dropdown.addEventListener('change', function(event) {
            // Get the selected value
            const selectedValue = event.target.value;

            // Update the paragraph with the selected value
            selectedValueParagraph.textContent = `Selected value: ${selectedValue}`;
        });
                 

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Activity Five :-[Event delegation script]:-
//Task 9:- Add a click event listener to a list that logs the text content of the clicked list item using event delegation:-

//What is an event delegation:-
//Event delegation is a technique in javascript , where we delegate the responsibility of handling an event to a parent element.
//Its a pattern based on 'Event bubbling'.
//What is an 'Event bubbling'?
//'Event bubbling' is by default behavior in javascript when an element receives an event this event bubbles upto the DOM tree hierarchy from parent to ancestor upto root element.
 
//Lets select an element from the html page:-
const list = document.getElementById('myList');

//Here we are using 'Event delegation' process:-
//so what is an event delegation it means by it is process where we delegate the resposibilty of handling an event to a parent element, where event bubbling occurs now what is an event bubbling,'event bubbling' in javascript is a by default behavior of an event occurs on a element this event bubbles upto the DOM hierarchy from parent to ancestors to the root element.
//So here we have targeted in this example 'ul' as a parent element of a list.

//Add a click eventListener to the parent element:-
list.addEventListener('click', function (event) {
    //Check if the click element is a list item.to ensure if the click element its a list element.
    if (event.target && event.target.nodeName === 'LI') {
        //Log the text content of the clicked list item.
        console.log(event.target.textContent);
    
    }
});

//Task 10:- Add an event listener to a parent element that listens for events dynamically added child elements:-

//Select the parent element:-
let parentElement = document.getElementById('parentElement');
let addChildButton = document.getElementById('addChildBtn');

//Add an event listener to the parent element to listen for clicks on dynamically added child elements:-
parentElement.addEventListener('click', function (event) {
    
    //To check if the clicked element is a dynamically added child element:-
    if (event.target && event.target.nodeName === 'child');

    //Log the text content to the console.
    console.log(event.target.textContent);
    
});
//Function to add a child element:-
function addChildElement() {
    const newChild = document.createElement('div');
    newChild.textContent = "I'm a new child";
    parentElement.appendChild(newChild);
}

//Add an event listener to the button to add a child elements:-
addChildButton.addEventListener('click', addChildElement)




/////////////////////////////////////////////////////////

//How event listeners work in js?
//The event listener is a superpower given by the browser to javascript engine through the window or global object inform of webApi which is a DomAPI.
//Event listener register to the callBack method.

//Do js have classes?
//Yes js does have classes were introduced in the version of Js ES6 2015.
//Its important to note that js is prototype based language.

//What is a 'new' keyword in js?
// 'new' keyword it creates an empty object.it creates an instance.

//////////////////////////////////////////////////////////////////

//Events in js:-


//What is an addEventListener:-
//An addEventListener is a method it attaches an event handler to an element.


//Pass an event object:-
//In javascript event handling its common practice to pass an event object as a parameter to the event handler function.
//This event object contains information about the event-occured.


//What is an event propagation?
//Event propagation refers to the way events are handled and processed as they occur in DOM hierarchy.


//What is an event.preventDefault?
//'Event.preventDefault()' is a method in javascript that prevents the default behavior of an event from occuring.
//It usually use with the form , to submitting before.


//What is an event bubbling?
//Event bubbling is a one phase of event propagation in the DOM,when an event occurs on element it triggers from child to the parent element,from bottom to top DOM hierarchy.
//By default its false

//Event.stopPropagation()?
//It is a method thats stops the propagation of an event through the DOM tree.


//Event capturing is similar to the event bubbling where it triggers from parent to the child element.
//from top to bottom
