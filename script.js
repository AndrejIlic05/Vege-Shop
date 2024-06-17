let allTotal = 0;

function addToCart(element) {
  let mainEl = element.closest(".single-item");
  let price = mainEl.querySelector(".price").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let quantity = mainEl.querySelector("input").value;
  let cartItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {
    price = price.substring(1);
    let total = parseInt(price) * parseInt(quantity);

    allTotal += total;

    cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>$${price} * ${quantity} = $<span>${total}</span></p>
                                    <button onclick="removeFromCart(this)" class="remove-item">Delete</button>
                                <div>`;

    document.querySelector(".total").innerText = `Total: ${allTotal}`;

    element.innerText = "Added";
    element.setAttribute("disabled", "true");
  } else {
    alert("Choose a quantity");
  }
}

function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  let price = mainEl.querySelector("p span").innerText;

  let name = mainEl.querySelector("h3").innerText;
  let vegetables = document.querySelectorAll(".single-item");

  price = parseInt(price);
  allTotal -= price;

  document.querySelector(".total").innerText = `Total: ${allTotal}`;

  mainEl.remove();

  vegetables.forEach(function (vege) {
    let itemNAme = vege.querySelector(".si-content h3").innerText;
    if (itemNAme === name) {
      vege.querySelector(".actions input").value = 0;
      vege.querySelector(".actions button").removeAttribute("disabled");
      vege.querySelector(".actions button").innerText = "Add";
    }
    console.log(vege);
  });
}
