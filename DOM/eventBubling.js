//! Event Bubbling, Capturing, trippling and Propogation.

/*

? What is event propogation =
- Please refer to the Image in the source folder.
- When any event occurs on an element it will follow either Bubbling or Capturing and this is known as the Event propogation.

? Why the Heck we need event capturing.?
- Sometimes it is necessary that the parent element or the ancestor element need the awareness abt the event occuring at their child elements.
- This is required when we need to make some changes in the parent elements on the basis of the events occuring on child element.
- Eg - Changing the width and colour of the Parent element on the basis of the Click on the Child element which is just a button.
- It is like updating all the parents about the events occuring on their children.


!- Event Bubbling
- When any event is called on any element it will also propogate the same to its parents. 
Means the method onClickChild() is called for the child and then the onClickParent() will be called. and this will continue till the top of the DOM.

- Simply event acts like a bubble in the water that goes up till the surface. Thus the event will propogate till top of the DOM.

- Eg- We can use this when we need to make changes visible on the child first and then the parents.


!- Event Capturing = aka = Event Trickling
- It is opposit to the bubbling. Here the event starts from the topmost parent and trickle down till the Child where the event has occured.

As per W3C, both types of propogation is accepted.

addEventListner('event', callback Function, useCapture-BooleanArgument)

When use capture is true it will trickledown. IF we dont pass the flag for the third argumetnt then it will by default follow Bubbling Propogation. And when set as false it will compulsarilly Bubble.

Eg.

event = {
    phase : target / bubbling / capturing instead of this we use numbers 1,2,3
}

*/


document.querySelector('#grandParent').addEventListener('click', (event) => {
    console.log(' Grandparent Clicked ');
    // event.target.style.display = "none"
}, true); // Capturing


document.querySelector("#parent").addEventListener('click', () => {
    console.log(' Parent Clicked ');
}, false);  // Bubbling


document.querySelector("#child").addEventListener('click', 
(event) => {
    console.log(' Child Clicked ');
    // event.stopPropagation(); // line 3
},true); // Capturing


/*
By default the capturing happens first and then the event bubbling. Means in above listners's third parameter the true ones will happen first then the false one.
 To stop the Bubbling and capturing the stop propogation method is used.
 eg- eventObj.stopPropogation();

 Line 3 - Here although we used stop propagation but sitll grandparent event will trigger and then the child.
 This is because the capturing occurs from top to bottom and here the capturing is activated.

*/


/*
! Event Propogation in detailed

? What is event propogation =
- Please refer to the Image in the source folder.
- When any event occurs on an element it will follow either Bubbling or Capturing and this is known as the Event propogation.

? What is eventPhase property of Event object.?
- While doing this propogation there is one important property of the event object that comes in picture. That is eventObj.eventPhase;
- This e.eventPhase will have 4 different values as flags:-

*These are as follows.
value = 1 = Capturing.
value = 2 = Target.
value = 3 = Bubbling.
value = 0 = Event has not occured yet.

- Each event object that is triggred during the propogation will have these values as per the proagation.

Means the Target Element where the event Occurs will always have the value set to 2.

If the parent element's event is triggered as the result of bubbling then it will have the value set to 3 and if due to capturing then 1.

? What is the e.target property.?
Every event object triggered in the process of propogation has 'this' value and this value holds the info about the target element where the orignal event has occured.
Here event.target.id will give the id of the target.

? What is this.id property.?
This simply gives the id of the element under current event object where the propogation is happining.

? 2 VVimp properties of event?
- event.phase : This gives you the current phase of the event
- event.target : This gives you the actual reference of the target element so that you can manupulate the target element or get the vaslues from the target element.
*/

// Example 2

let containers = document.querySelectorAll('.container');

console.log(containers);

containers.forEach((i) => {
    i.addEventListener('click', displayEventPhase, true);
    // i.addEventListener('click', displayEventPhase, false);
});

function displayEventPhase(event) {
    let phase = event.eventPhase;

    if (phase === 1) phase = 'Capturing';
    if (phase === 2) phase = 'At Target';
    if (phase === 3) phase = 'Bubbling';
    if (phase === 0) phase = "Event not triggered"
    // After refactoring the above code :-

    // phase = (phase === 1 ? 'Capturing' : phase === 2 ? 'At Target' : phase === 3 ? 'Bubbling' : 'Event Not Triggered');

    console.log('Box: ' + this.id + ' - ' + phase);

    if (this.id === event.target.id) console.log(' Here we are..! Standing @ the Target Element...');

}