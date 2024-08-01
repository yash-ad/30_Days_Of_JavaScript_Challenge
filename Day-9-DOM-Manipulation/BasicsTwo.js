///.Feature Request [For practice purpose]:-

//1:Text content manipulation Script:-
//Write a script that selects an HTML element by its ID and changes its text content:-

// Select an HTML element by its ID
let changeTitleContent = document.getElementById('title');
  // Change the title using the textContent property

setTimeout(() => {
   changeTitleContent.textContent = "Chai aur code - 30 days of javascript challenge"; 
}, 5000)


//2:Element creation Script:-
//Create a script that demonstrates creating a new 'div' element and appending to the body:-

//lets create a 'div' and append it to the body:-

let createDivEle = document.createElement('div');

createDivEle.textContent = "Hello Everyone,Im from Javascript!";

document.body.append(createDivEle);


//3:Element Removal Script:-
//Write a script that selects an html element and removes it form the dom:-
//selects the html element:-
let removeElement = document.getElementById('removeFromDom');

//Remove from the dom:-
removeElement.remove();


//4:Attribute modification Script:-
//create a script that changes the attributes of an html element:-

let createAttribute = document.getElementById('createAttribute');

createAttribute.setAttribute('href', 'https://www.google.com/');


//5:Event handling Script:-
//Write a script that adds event listeners to html elements to change their content or style based on user interactions:-

//First and foremost thing select elements:-
let hoverOnDiv = document.getElementById('mainDiv');

let changeTextTitle = document.getElementById('mainTitle');



hoverOnDiv.addEventListener('mouseover', () => {
    changeTextTitle.textContent = "Javascript fellow developers";
    changeTextTitle.style.backgroundColor = "orange"
    changeTextTitle.style.borderColor = "Black"
});


hoverOnDiv.addEventListener('mouseout', () => {
    changeTextTitle.style.borderColor = "Red"
})
