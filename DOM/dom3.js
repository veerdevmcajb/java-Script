// Function to handle mouse over event
function handleMouseOver() {
    console.log('Mouse over the header!');
    document.getElementById('mouseArea').style.color = 'red';
}

// Function to handle mouse out event
function handleMouseOut() {
    console.log('Mouse out of the header!');
    document.getElementById('mouseArea').style.color = 'black';
}

// Function to handle focus event on input field
function handleFocus() {
    console.log('Input field is focused!');
    document.getElementById('inputField').style.backgroundColor = 'lightblue';
}

// Function to handle blur event on input field
function handleBlur() {
    console.log('Input field loses focus!');
    document.getElementById('inputField').style.backgroundColor = '';
}

// Function to handle click event on button
function handleClick() {
    console.log('Button was clicked!');
    alert('Button Clicked!');
}

// Function to handle double click event
function handleDoubleClick() {
    console.log('Button was double clicked!');
    alert('Button Double Clicked!');
}

// Function to handle form submission event
function handleSubmit() {
    console.log('Form submitted!');
    alert('Form Submitted!');
}

// Function to handle mouse move event
function handleMouseMove(event) {
    document.getElementById("location").innerText = `Mouse position: ${event.clientX}, ${event.clientY}`; 
    // console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);
}

// Additional Events and Handlers
document.addEventListener('keydown', function(event) {
    console.log(`Key down: ${event.key}`);
});

document.addEventListener('keyup', function(event) {
    console.log(`Key up: ${event.key}`);
});

let count = 1;

document.addEventListener('scroll', function() {
    console.log('Page is being scrolled!', count);
    count++;
});
