// Active learning: Printing those products!
total = 0;
let products=  [  'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (let i = 0; i <= products.length - 1; i++) {

let name = products[i].split(':');

let stang = name.join(',');

let index = stang.indexOf(',');

let price = Number(stang.slice(index + 1));

let name1 = stang.slice(0, index);

  price += total

let itemText = name1 + '-' + "$"+ `${price}` ;
  console.log(itemText);
}


// Active learning: Top 5 searches:
const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
myHistory.unshift(searchInput.value);
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
myHistory.pop();

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
