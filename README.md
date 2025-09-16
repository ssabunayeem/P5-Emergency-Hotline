
  

# 📖 Project Q&A (English Version)

  

## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

  

-  **getElementById** → Selects a single element by its unique `id`. Always returns one element (or `null` if not found).

-  **getElementsByClassName** → Selects multiple elements by their class name. Returns an **HTMLCollection** (live list).

-  **querySelector** → Selects the **first matching element** using CSS selectors.

-  **querySelectorAll** → Selects **all matching elements** using CSS selectors. Returns a **NodeList** 

  

----------

  

## 2. How do you **create and insert a new element into the DOM**?

  

`let newPara = document.createElement("p"); // Create element `

`newPara.innerText = "hello developers"; // Add text`

`document.body.appendChild(newPara); // Insert into body`

  

----------

  

## 3. What is **Event Bubbling** and how does it work?

  

Event Bubbling is the process where an event starts from the **innermost element** (child) and then propagates up through its **parent elements** until it reaches the root (`document`).

  

----------

  

## 4. What is **Event Delegation** in JavaScript? Why is it useful?

  

Event Delegation is a technique where you attach a **single event listener** on a parent element instead of adding listeners to each child.

  

✅ **Benefits:**
- Better performance

- Less memory usage
  

----------

  

## 5. What is the difference between **preventDefault() and stopPropagation()**?

  

-  **preventDefault()** → Stops the browser’s default action.

Example: Prevents form submit when clicking a `<button>` inside a form.

-  **stopPropagation()** → Stops the event from bubbling up or capturing further.

  

----------

  

# 📖 প্রজেক্ট প্রশ্নোত্তর (Bangla Version)

  

## 1. **getElementById, getElementsByClassName, querySelector / querySelectorAll এর মধ্যে পার্থক্য**

  

-  **getElementById** → শুধু একটাই element ধরে, যেটার `id` unique.

-  **getElementsByClassName** → একই class থাকা অনেক element ধরে। (ফলাফল হয় **HTMLCollection**)

-  **querySelector** → CSS selector ব্যবহার করে প্রথম matching element ধরে।

-  **querySelectorAll** → CSS selector দিয়ে সবগুলো element ধরে। (ফলাফল হয় **NodeList**)

  

----------

  

## 2. DOM-এ নতুন element তৈরি ও insert করার উপায়

  

`let newPara = document.createElement("p"); 
newPara.innerText = "প্রশ্নোত্তর শেষ !"; 
document.body.appendChild(newPara); 

  

----------

  

## 3. **Event Bubbling** কীভাবে কাজ করে?

  

Event Bubbling হলো এমন একটা প্রক্রিয়া যেখানে event প্রথমে **সবচেয়ে ভেতরের element** এ ঘটে, তারপর ধাপে ধাপে parent → grandparent → document পর্যন্ত propagate হয়।

  

----------

  

## 4. **Event Delegation** কী এবং কেন দরকার?

  

Event Delegation মানে হলো child element এ আলাদা আলাদা event না দিয়ে, parent element এ একটা event বসানো।

  

✅ **কারণ / সুবিধা:**

  

- Performance ভালো থাকে

- Memory কম লাগে

- পরে নতুন child element এড হলেও কাজ করবে

  

----------

  

## 5. **preventDefault() vs stopPropagation()**

  

-  **preventDefault()** → Browser এর default কাজ বন্ধ করে।

যেমন: form এর মধ্যে `<button>` ক্লিক করলে normaly page reload হয় → এটা prevent করা যায়।

-  **stopPropagation()** → Event টা যেন parent এ bubble হয়ে না যায়, সেটা বন্ধ করে।