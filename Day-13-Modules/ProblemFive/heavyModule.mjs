// You are building an application that only needs to load a heavy module on demand. Create a module named heavyModule.js that exports a function doHeavyTask() which simply logs "Heavy task completed".

// In another file named main.js, dynamically import doHeavyTask when a specific condition is met (e.g., when a variable loadHeavyModule is set to true), and call it.

// Instructions:

// Create heavyModule.js with a doHeavyTask function.

export function doHeavyTask() {
    console.log("Heavy task completed");   
};

export function doLightTask() {
    console.log("Very easy task completed");
    
};