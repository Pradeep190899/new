// console.log(document);
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// for(let i=0;i<=items.length - 1;i++)
// {
//     items[i].style.fontWeight='bold';
// }
// items[1].style.backgroundColor='green';
// items[2].style = 'display:none';
var itemlist = document.querySelector('#items');
 console.log(itemlist.parentNode);
 itemlist.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
//childnode
// console.log(itemList.childNodes);

//children
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = 'blue';

//firstchild
console.log(itemlist.firstChild);

//firstElementChild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Hello 1';

//last child
console.log(itemlist.lastChild);

//lastelementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'Hello 4';

//nextsibling
console.log(itemlist.nextSibling);

//nextelementsibling
console.log(itemlist.nextElementSibling);

//previoussibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'purple';

//createelement
//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//add attribute
newDiv.setAttribute('title', 'hello div');

//create text node
var newDivText = document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);



