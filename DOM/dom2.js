// Adding a class to an element
document.getElementById('addClassBtn').addEventListener('click', addClassClickHandler);

function addClassClickHandler() {
    document.getElementById('header').classList.add('highlight');
    console.log('Class "highlight" added to the header.');
}

// Removing a class from an element
document.getElementById('removeClassBtn').addEventListener('click', function() {
    document.getElementById('header').classList.remove('highlight');
    console.log('Class "highlight" removed from the header.');
});

// Toggling inline styles
document.getElementById('toggleStyleBtn').addEventListener('click', toggleHandler);

function toggleHandler() {
    const textElement = document.getElementById('text');
    if (textElement.style.fontSize === '24px') {
        textElement.style.fontSize = ''; // Reset to default
        console.log('Text size reset to default.');
    } else {
        textElement.style.fontSize = '24px'; // Set to larger size
        console.log('Text size changed to 24px.');
    }
}

// Changing attributes of an element
document.getElementById('changeAttrBtn').addEventListener('click', changeImage);

function changeImage() {
    const imgElement = document.getElementById('dynamicImage');
    if (imgElement.alt.includes('Placeholder')) {
        imgElement.src = 'https://via.placeholder.com/300'; // Change source
        console.log('Image source changed to larger placeholder.');
        imgElement.alt = "";
    } else {
        imgElement.src = 'https://via.placeholder.com/150'; // Reset source
        console.log('Image source reset to original placeholder.');
        imgElement.alt = "Placeholder";
    }
}
// Using CSS Transitions and Transformations
document.getElementById('content').addEventListener('mouseenter', function() {
    this.style.opacity = '0.5'; // Dim the content
    console.log('Content opacity changed to 0.5 on mouse enter.');
});
document.getElementById('content').addEventListener('mouseleave', function() {
    this.style.opacity = '1'; // Restore opacity
    console.log('Content opacity restored on mouse leave.');
});

