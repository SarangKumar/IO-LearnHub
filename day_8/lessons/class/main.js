console.log('js is working')

let h = document.getElementById("heading");
console.log(h)
// h.textContent = 'JS Tut';
h.style.color= 'red';
h.style.backgroundColor= 'black';
// h.innerHTML = '<em>Hello</em>'
h.textContent = '<em>Hello</em>'


let list = document.querySelectorAll('ul > li');
console.log(list)

list[0].style.color = 'green';