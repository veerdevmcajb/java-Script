// Event Delegation

/*
? What is Event Delegation.?
- Instead of attaching multiple event handlers and monitoring it seperately we can just use one eventHandler where the Child element can bubble the event towards the parent and then parent will decide how to handle the event.
- By doing this we can reduce redundancy and make code more memory and lines efficient.
*/

// Example 1

document.querySelector("#category").addEventListener('click', (e) => {
    console.log("Category Parent CLicked..!");

    console.log(' Now displaying the event object');
    console.log(e);

    console.log(' Now displaying the target Element using target ');
    console.log(e.target);

    // This if will make sure that when only li is clicked it should redirect to this location.

    if (e.target.tagName == 'LI') {
        window.location.href = "/" + e.target.id;
        console.log(e.target.tagName);
    }
  
    // console.log(e.target.id);

});

/*
! Behaviourial patterns using the Event Delegation.
- The patterns that are common for many elements related to certain similar events are called as behavioural patterns.
- In simple words (same behaviour/results for same inputs/triggers).

- Here we can assign this auto capital functionality to all the other input elements just by adding the tag of 'data-uppercase' to that input field.
This means that we can apply this behavioural pattern to others with less efforts and without rewriting the functionality for each input fields event handler.

Pros -
- Saves the memory and mitigates the risk of performance bottlenecks.
- Less code. Number of lines are reduced.
- DOM manipulation becomes easy when parent is handling the events.

Cons
- All the events are not bubbled up thus cant delegate them. Eg- Bluring, focus, resizing window, scrolling. Because they have their own risks involved.
- If we stop propogation any time in our code for the element which delegates the handling it wont be able to delegate the events.
*/

document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    console.log(e.target.dataset);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
});