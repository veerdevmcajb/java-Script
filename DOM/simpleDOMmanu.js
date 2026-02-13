/*
! DOM manupulation 
*/


const body = document.body;


// body = {
//     div : {
//         text : "blablablabla"
//         child : {
//             p:{
//                 text: "Hello World 2"
//             }
//         }
//     }
// }


//! Methods of creating the element on HTML Document

const div = document.createElement("div");
const p = document.createElement("p");

// All the content set added or deleted or manupulated on the HTML using the JS will take place at the last therefore all this data including blablabla will be set after the orignal HTML data, because we use defer or we insert script at last.

div.textContent = "blabalbalblabla";
div.appendChild(p);     //line 1
body.appendChild(div);

// This iT method only gets what is visible on the WebPage. But without the indentation and the properties.

// This line will update the above created p element because this action is done at run time on the browser after appending the child. Means this element is not on the JS now and added later to the DOM, Rather it is created and added on the DOM then we are manupulating it.

// However we can also do vice versa. Means setting text, appending childs in JS then adding the element on the DOM. When we do this we actually manupulate the Element's node on the JS then add the result. This means Line 1,2,3,4,5 all will give same results. 

const innerT = p.innerText = "Hello World";
console.log(innerT);

// div.appendChild(innerT); We can not add the text directly to the Element. It should be created using createTextNode = 'text' if we want to append it like a child.

//?-----------------------

// This tC gets the complete element that is available on the DOM. Doesnt matters whether it is available or vissible on the webpage.

// This will also take all the Indentation and the CSS properties of the element.

// If we add the text directly it will replace the previous text and not add on it. Thus use textNode method and then appendChild it.

const textC = p.textContent = 'Hello World 2';
console.log(textC);

// div.appendChild(p);     //line 2


// This innerHtml method can get and set - means create the new elements on the page directly. We can just write in the text and it will be parsed and created into the DOM Element if the string contains any HTML or css tags. For eg.
const innerH = div.innerHTML = '<p style="color:red"> Dangerous InnerHTML is set Here..</p>'
console.log(innerH);

const iT = document.querySelector('#hb').innerText;
const tC = document.querySelector('#hb').textContent;
console.log(iT);
console.log(tC);
// div.appendChild(p);     //line 3

body.append('I m just a appended string at last as per the sequence in which I am created');
// div.appendChild(p);     //line 4



//! Modifying the HTML = Less dangerous method.

// We must create the Element and append it rather than using inerHTML.
// But Why not - Because it is vulnerable to the JS injection attack / hacking.

const strong = document.createElement("strong");
strong.innerText = "Hey man wassup...!!!";
div.appendChild(strong);

const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye")

spanHi.remove();
spanBye.remove();

// Below line - span elements - will be added at last because we are removing it using js and then adding it using JS. So this will follow the sequence that we are following in JS.

div.appendChild(spanHi);
div.appendChild(spanBye);



//! Setting and getting the attributes. 

console.log(spanHi.getAttribute('title'));
console.log(spanHi.title);

// We can also set Attributes.

spanHi.setAttribute("naming", "NameHi");
console.log(spanHi.getAttribute('naming'));


spanHi.data= "secretCode";
// console.log(spanHi.getAttribute('data'));
console.log(spanHi.data);


spanBye.naming = "NameBye";
console.log(spanBye.naming);

/*
- The way in which we set the attribut only in that way we can get the attribute therefore always use only one standard method for setting attribute. i.e. setAttribute.

~ console.log(spanHi.naming);
This will give undefined because we set the naming attribute using setAttribute.

~ console.log(spanBye.getAttribute('naming'));
 This will give undefined because we set the naming attribute without using setAttribute.
*/


//! Datasets

// const hb = document.querySelector('#hb');
// console.log(hb.p);

const spanData = document.querySelector("#spanData")
console.log(spanData.dataset); // This will give all the data sets as an array.
console.log(spanData.dataset.mypara); // This will give the data set that is named as myPara only.

console.log(spanData.dataset.myPara); // output is Undefined because in html everything is converted to smallcase so myPara becomes invalid and mypara as valid.