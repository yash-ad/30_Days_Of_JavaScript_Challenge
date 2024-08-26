// In main.js, set a variable loadHeavyModule to true.
const loadHeavyModule = true;

// Dynamically import and call 'doHeavyTask' only if loadHeavyModule is true:-

if (loadHeavyModule) {
    import('./heavyModule.mjs')
    .then((module) => {
            module.doHeavyTask();  
    })
    .catch((error) => {
      console.error("Failed to load module",error)  
    })
}

const loadLightModule = true;

if (loadLightModule) {
    import('./heavyModule.mjs')
        .then((module) => {
            module.doLightTask()
        })
        .catch((error) => { 
        console.log(error.message)
})
}