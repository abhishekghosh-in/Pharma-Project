let search_bar = document.getElementById("shop-search-bar");
let cards = document.querySelectorAll(".card-spacing");
let error_msg = document.querySelector('#shop-bottom-area .center-shop');
error_msg.style.visibility = 'hidden';

document.getElementById('shop-search-btn').onclick = function() {
  let boxvalue = search_bar.value;
  let curr = boxvalue.toLowerCase();
  let flag = false;
  for(let i = 0; i < cards.length; i++) {
    let product_name = cards[i].firstElementChild.lastElementChild.firstElementChild.textContent;
    product_name = product_name.toLowerCase();
    if(product_name.startsWith(curr)) {
      cards[i].style.display = "block";
      flag = true;
    }
    else {
      cards[i].style.display = "none";
    }
  }
  if(flag) {
    error_msg.style.visibility = 'hidden';
  } else {
    error_msg.style.visibility = 'visible';
    error_msg.firstElementChild.innerHTML = "Sorry! We could not find any items starting with '"+boxvalue+"'";
  }
}