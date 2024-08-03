///.Feature Request [For practice purpose]:-

//1:Click event script:-
//Write a script that adds a click event listener to a button to change the text content of a paragraph:-

//First and foremost thing lets add elements from an html page:-

const changeTextContent = document.getElementById('paraContent');

const changeContentBtn = document.getElementById('changeContentBtn');

//Add an event listener to a button to change the text content of a paragraph:-
changeContentBtn.addEventListener('click', function () {
    changeTextContent.textContent = "Hello i'm the content from Javascript";
    changeTextContent.style.backgroundColor = "orange"
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2:Mouse events script:-
//Create a script that handles mouseover and mouseout events to change the background color of an element:-

//Lets select element for an html page:-
const changeBgColor = document.getElementById('changeBgColor');

//Add a function to mouseOver effect to change the bg color:-
function mouseOverEffect() {
    changeBgColor.style.backgroundColor = "Gold";
}


//Add a function to mouseOut effect to reset the bg color:-
function mouseOutEffect() {
    changeBgColor.style.backgroundColor = "brown"
}

changeBgColor.addEventListener('mouseover', mouseOverEffect);

changeBgColor.addEventListener('mouseout', mouseOutEffect);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3:Keyboard events script:-
//Write a script that logs key presses and displays input field values using keydown and keyup event listeners:-

//Select html element:-
const inputText = document.getElementById('inputValue');
//function is resp for keyPressedDown:
function keyPressedDown(event) {
      console.log(`Key pressed down : ${event.key}`);  
}

//function is resp for keyPressedUp:-
function keyPressedUp(event) {
    console.log(`Key pressed up : ${event.target.value}`);
    inputText.textContent = `Current input value:${event.target.value}`
    
}
//Add event listeners to an input field:-
inputText.addEventListener('keydown', keyPressedDown);

inputText.addEventListener('keyup', keyPressedUp);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4:Form events script:-
//Create a script that handles form submission and change events on a select dropdown:-

//Select elements from an html page:-
//Select the form element:-
const form = document.getElementById('myForm');

//select the input element:-
const inputField = document.getElementById('name');

//select the dropdown element:-
const selectOptions = document.getElementById('options');

//Add an event listener for form-submission:-
form.addEventListener('submit', function (event) {
   
    //prevent the default form submission behavior:-
    event.preventDefault();

    //Get the values from the form:-
    const inputValue = inputField.value;

    const selectDropdown = selectOptions.value;

    //Log the form values:-
    console.log('Form submitted!');
    console.log('Name:',inputValue);
    console.log('SelectedOption:',selectDropdown);

});


//Add an event-listener for change events on the select dropdown:-
selectOptions.addEventListener('change', function (event) {
    //Log the selected option:-
  console.log('Dropdown changed to:',event.target.value);
    
})

/////////////////////////////////////////////////////////////////////////////////////////////////

//5:Event delegation  script:-
//Write a script that demonstrates event delegation by handling events on dynamically added child elements:-

//Select elements from a html page:-

const parentElement = document.getElementById('parentElement');

const addChildElement = document.getElementById('addChildElement');

//function for parentElement:-
function parentElementFunc(event) {
    
    //to check if the clicked element is a dynamically added child element:-
    if (event.target && event.target.nodeName === 'child') {
        //Log the textcontent to the console:-
        console.log(event.target.textContent);
        
    }
}
function addChildElementFunc() {
    const newChildEle = document.createElement('div');
    newChildEle.textContent = "I'm a new child";
    parentElement.appendChild(newChildEle)
}

//Add an event listener to the parent element:-
parentElement.addEventListener('click', parentElementFunc);

//Add an event listener to the button element:-
addChildElement.addEventListener('click', addChildElementFunc);
