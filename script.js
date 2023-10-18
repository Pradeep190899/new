console.log(document);
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
for(let i=0;i<=items.length - 1;i++)
{
    items[i].style.fontWeight='bold';
}
items[2].style.backgroundColor='green';



