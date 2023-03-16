
console.log(document);



const heading = document.querySelector('h1');
heading.textContent = 'Lab7 Assignment';
heading.setAttribute("style", "color:blue")
heading.style.fontSize = "32px";

hr = document.createElement("hr");
document.body.appendChild(hr);

let headingClass = document.createElement("style");
headingClass.innerHTML = ".heading { color: red; }";
document.head.appendChild(headingClass);

let h2 = document.createElement("h2")
h2.innerText = "Task";
h2.classList.add("heading");
document.body.appendChild(h2);
// h2.setAttribute("style", "color:red")

let p1 = document.createElement("p");
p1.innerText = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
const word = "only";
const boldWord = '<b>' + word + '</b>';
p1.innerHTML = p1.innerHTML.replace(word, boldWord);
document.body.appendChild(p1);

const ul = document.createElement("ul");

// Create an array of items to add to the list
const items = ["find elements in the DOM (<strong>5 points</strong>);", "create/add/remove elements (5 points);", "change content of the elements (5 points);",
"change styles of the elements (5 points);", "change attributes of the elements (5 points);", "change classes of the elements (5 points)."];
const colors = ["green", "purple", "green", "purple", "green", "purple"];

    // Add list items for each item in the array
items.forEach(function(item, index) {
    const li = document.createElement("li");

    li.innerHTML = item.replace("5 points", "<strong>5 points</strong>");
    // li.textContent = item;
    li.style.color = colors[index % colors.length];
    ul.appendChild(li);
    });

// Append the unordered list to the body
document.body.appendChild(ul);

hr = document.createElement("hr")
document.body.appendChild(hr)

let h3 = document.createElement("h2");
h3.innerText = "Submission"
h3.classList.add("heading");
document.body.appendChild(h3);
// h3.style.color = "red";

let p2 = document.createElement("p");
p2.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p2);


const ul1 = document.createElement("ul");
// Create an array of items to add to the list
const items1 = ["Create a new repository on Github, named <strong>lab7</strong> (<strong>1 point</strong>).",
    "Clone this repository to your local machine and work inside it.",
    "Create a new HTML file, called <strong>index.html</strong>, which has only one &lt;h1&gt; tag with ''Hello, World!'' message (<strong>1 point</strong>).",
    "Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above (<strong>1 point</strong>).",
    "Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section).",
    "Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file (<strong>5 points</strong>).",
    "After you finish your work, submit it to the Github (<strong>2 points</strong>)."];

const colors1 = ["green", "purple", "green", "purple", "green", "purple", "green"];

    // Add list items for each item in the array
items1.forEach(function(item1, index1) {
    const li1 = document.createElement("li");
    li1.innerHTML = item1.replace("<h1>", "&lt;h1&gt;")
    li1.innerHTML = item1.replace("1 point", "<strong>1 point</strong>");
    li1.innerHTML = item1.replace("2 points", "<strong>2 points</strong>");
    
    // li.textContent = item;
    li1.style.color = colors1[index1 % colors1.length];
    ul1.appendChild(li1);
    });

// Append the unordered list to the body
document.body.appendChild(ul1);











