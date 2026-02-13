//! Basic DOM Manipulation

/*
- Basic DOM Manipulation: The changeContent function demonstrates how to change the text of an element by using getElementById to select the element and then modifying its textContent property.

? Use of Selectors:

- getElementById, getElementsByClassName, and getElementsByTagName are traditional methods that return either a single element or a NodeList. (Keep in mindd this will be in the array format.)
- querySelector and querySelectorAll are more versatile selectors that allow CSS-like selections.
- querySelector returns the first matching element, while querySelectorAll returns all matching elements as a NodeList.

? DOM Traversal:

- parentNode, childNodes, nextSibling, and previousSibling are used to navigate between different nodes in the DOM tree. 
- These properties allow you to move up, down, or sideways in the tree, depending on your needs.


! DOM Manipulation Techniques:

? innerHTML vs. innerText:
- innerHTML allows you to get or set the HTML content of an element. This means you can include HTML tags which will be parsed and rendered by the browser.
- innerText is used to get or set the text content of an element, ignoring any HTML tags and rendering only the text.
- classList.add: This method is used to add a new class to an element's class list, enhancing the ability to manipulate CSS classes dynamically.

? Advanced DOM Traversal:

- firstChild and lastChild: These properties are used to access the first and last child of the node list of an element, including text nodes.
- nextElementSibling and previousElementSibling: Similar to nextSibling and previousSibling, but these properties skip text nodes and only return elements, which is more useful in practice.
- setAttribute and getAttribute: Methods used to manipulate the attributes of elements. They are particularly useful for working with data attributes.

? CSS Manipulation:

- Direct style changes via JavaScript using style: 
This method allows you to directly modify the inline style of an element, in this case changing the background color.

*/ 


// Changing the text content of an element using innerHTML
function changeContent() {
    const header = document.getElementById('header');
    header.innerHTML = '<strong>Content Changed</strong>'; // Changes the HTML content
    console.log('Header changed using getElementById and innerHTML');
secondListItem.classList.remove('new-class');
secondListItem.style.color = "red"

}

// Using innerText to safely add text to an element
const headerText = document.getElementById('header');
headerText.innerText = 'Welcome Back to DOM Manipulation';
console.log('Header text updated with innerText:', headerText.innerText);

// Using Various Types of Selectors
const header = document.getElementById('header');
console.log('Selected by ID:', header.textContent);

// This will always give you array of elements / nodes
const paragraphs = document.getElementsByClassName('paragraph');
console.log('Selected by Class:', paragraphs[0].textContent);

const listItems = document.getElementsByTagName('li');
console.log('Selected by Tag Name:', listItems[0].textContent);

const firstParagraph = document.querySelector('.paragraph');
console.log('Selected by CSS Selector (first match):', firstParagraph.textContent);

const allParagraphs = document.querySelectorAll('.paragraph');
allParagraphs.forEach((para, index) => {
    console.log(`All paragraphs [${index}]: ${para.textContent}`);
});

//!---------------- DOM Traversal

// Child to parent traversal - syntax = element.parentNode
const listItemParent = document.querySelector('.item').parentNode;
console.log('Parent Node:', listItemParent.tagName);

// Parent to Child traversal - syntax = element.childNodes
const allChildren = listItemParent.childNodes; // This will get you element and text node also.
allChildren.forEach((child, index) => {
    if (child.nodeType === Node.ELEMENT_NODE) {
        console.log(`Child [${index}]: ${child.textContent.trim()}`);
    }
});

const nextSibling = document.querySelector('.item').nextSibling;
console.log('Next Sibling Content:', nextSibling.textContent);

const previousSibling = document.querySelectorAll('.item')[1].previousSibling;
console.log('Previous Sibling Content:', previousSibling.textContent.trim());

//! Advance DOM Traversal and Manipulation

// firstChild and lastChild vs firstElmentChild and lastElementChild
// firstChild and lastChild = This may give you the text node if available.
// firstElmentChild and lastElementChild = This will always give you only the elements. (Safe for use)

const firstChild = listItemParent.firstChild;
console.log('First Child:', firstChild.textContent.trim()); // No output because text node = "/n"

const firstChildElement = listItemParent.firstElementChild;
const lastChildElement = listItemParent.lastElementChild;
console.log('First Child:', firstChildElement.textContent.trim());
console.log('Last Child:', lastChildElement.textContent.trim());

// Element siblings and manipulation using classList
const secondListItem = document.querySelector('.item:nth-child(2)');
secondListItem.classList.add('new-class');
console.log('Second list item classes:', secondListItem.className);
// secondListItem.classList.remove('new-class');

// previousElementSibling and nextElementSibling (ignores text nodes)
const nextElementSibling = secondListItem.nextElementSibling;
const previousElementSibling = secondListItem.previousElementSibling;
console.log('Next Element Sibling:', nextElementSibling.textContent);
console.log('Previous Element Sibling:', previousElementSibling.textContent);

// Updating style directly via JavaScript
document.querySelector('.content').style.backgroundColor = 'lightblue';
console.log('Changed background color of content div');

// Using data attributes
const specialParagraph = document.querySelector('[data-custom="special"]');
specialParagraph.setAttribute('data-custom', 'updated');
console.log('Updated data attribute:', specialParagraph.getAttribute('data-custom'));

