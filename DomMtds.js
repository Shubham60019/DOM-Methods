// Dom Methods
let a = document;
console.log(a);

let b = document.title;
console.log(b);

let c = document.head;
console.log(c);

let d = document.title="DOM";
console.log(d);

let f = document.URL;
console.log(f);

// Types of Dom
// id
let d1= document.getElementById("tt");
console.log(d1);
d1.style.color="red";
d1.innerHTML="<p>yes it is</p>"; //innerHtml give only content
d1.innerText="<p>no its not</p>"; //innerText give tag along with content


// class
let d2= document.getElementsByClassName('demo');
console.log(d2);
d2[0].style.color='red';
d2[2].style.backgroundColor='green';
d2[1].innerHTML='Hello';


// tag name
let r =document.getElementsByTagName('section');
console.log(r);
r[1].style.backgroundColor="yellow";


// query selector
let o=document.querySelector(".demo");
console.log(o);


// query selectorAll
let u=document.querySelectorAll(".demo1");
console.log(u);
u[2].style.backgroundColor="black"
