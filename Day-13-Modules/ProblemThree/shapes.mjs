// 3. Named and Default Exports Together
// Problem:

// Create a module file named shapes.js that contains the following:

//1:A default export areaOfSquare(side) that returns the area of a square:-

export default function areaOfSquare(side){

    return side * side;
}

//2: A named export areaOfCircle(radius) that returns the area of a circle.

export function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}