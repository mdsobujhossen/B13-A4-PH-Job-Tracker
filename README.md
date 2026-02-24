
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer:
 a.getElementById: we use this to get one spacfiq element with there id i have to know the id name

 b. getElementsByClassName: it gives us all html collection of elements array like object thats are written with the same class name it is live .

 c. querySelector: it select the first match element. We can use CSS selector like .class, #id, div p.

 d.querySelectorAll: it gives us all matched elements node list it's not live. we can use foreach loop with it 



### 2. How do you create and insert a new element into the DOM?
answer:we can create element with document.createElement("element name") this method, we can insert a new element into the dom with appendChild.(chiled name) this methed

### 3. What is Event Bubbling? And how does it work?
Answer: event bubbling means when click into any element on the webpage like a button then it go into its parent then grandparent then parent of grandparent like this.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation means we add event listener to parent instead of    adding to many child elements. when we click into the child of the parent we had added the eventlistener we can use event.target to get the exactly button  clicked. so we dont have to use 10 events listener for 10 button we simply can add eventslistener to its parent

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
preventDefault() is stop defalt browser action like when we submit a form page reaload we can stop it with preventdefault() method. 

stopPropagation() method is used for stop event bubbling thats means event will not go to the parent

