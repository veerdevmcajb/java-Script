// Adding event listeners for all elements to log the flow of events

document.getElementById('div1').addEventListener('click', function(event) {
    console.log('DIV 1 Capturing', event.eventPhase); //     log 1 during capturing phase
}, true); // Setting 'true' to handle the event during the capturing phase

document.getElementById('div1').addEventListener('click', function(event) {
    console.log('DIV 1 Bubbling', event.eventPhase); // Should log 3 during bubbling phase
}, false); // Setting 'false' to handle the event during the bubbling phase

document.getElementById('div2').addEventListener('click', function(event) {
    console.log('DIV 2 Capturing', event.eventPhase); // Should log 1 during capturing phase
}, true);

document.getElementById('div2').addEventListener('click', function(event) {
    console.log('DIV 2 Bubbling', event.eventPhase); // Should log 3 during bubbling phase
}, false);

document.getElementById('button1').addEventListener('click', function(event) {
    console.log('Button Target', event.eventPhase); // Should log 2 during target phase
}, false);

// Additional logging to observe stopPropagation effect
document.getElementById('button1').addEventListener('click', function(event) {
    console.log('Button Bubbling', event.eventPhase); // Should log 3 during bubbling phase
    // event.stopPropagation(); // Uncomment to stop further propagation
}, false);
 