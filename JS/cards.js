fetch("https://lit-beach-56409.herokuapp.com/sort-product/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    localStorage.products = JSON.stringify(data.data);
  });
// console.log(products);

function createCard(card) {
  let cardContainer = document.querySelector(".products");
  card.forEach((product) => {
    cardContainer.innerHTML += `
      <div class="product-item" techStack=${product[5]}>
      <img src="${product[6]}">
          <div class="product-details">
              <h2>${product[1]}</h2>
              <h3>${product[4]}</h3>
              <h4>${product[2]}</h4>
              <p>${product[3]}</p>
          </div>
          <div class="btns-container">
              <a
                
                target="_blank"
                class="button"
                onclick="addToCart(${product[0]})"
                >Add to cart</a
              >
              <a
               
                target="_blank"
                class="button"
                >Buy Now</a
              >
          </div>
      </div>    
      `;
  });
  // return createdCard;
}
console.log(JSON.parse(localStorage.getItem("products")));
createCard(JSON.parse(localStorage.getItem("products")));

function addToCart(id) {
  fetch("https://lit-beach-56409.herokuapp.com/sort-product/", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      // let products = JSON.parse(localStorage.getItem("products"));
      let products = data.data;
      console.log(products);
      let cartProduct = products.find((product) => {
        return product[0] == id;
      });

      console.log(cartProduct);
      let cartProducts =
        JSON.parse(localStorage.getItem("cart products")) || [];
      cartProducts.push(cartProduct);

      localStorage.setItem("cart products", JSON.stringify(cartProducts));
      showCartItems(cartProducts);
      // localStorage.productsOnCart = cartProducts;
      //     //
      //     // localStorage.ProductsOnCart = cartProduct;
      // let cartContainer = document.querySelector(".list-group");
      // //     // console.log(cartContainer);
      // cartContainer.innerHTML = "";
      // console.log(cartProducts);
      // cartProducts.forEach((product) => {
      //   console.log(product);
      //   cartContainer.innerHTML += `
      //         <li class="list-group-item">
      //           <div class="itm">${product[1]}</div>
      //           <div class="price">${product[2]}</div>
      //           <div class="dlt">
      //             <button onclick="deleteFromCart(${product[0]})" class="btn btn-danger btn-sm float-right delete">
      //               <i class="fas fa-trash-alt"></i>
      //             </button>
      //           </div>
      //         </li>
      // `;
      // });
      // let totalPrice = cartProducts.reduce(
      //   (total, price) => total + parseInt(price[2]),
      //   0
      // );
      // document.querySelector(".calc").innerHTML = "";
      // document.querySelector(
      //   ".calc"
      // ).innerHTML = `<div>TOTAL PRICE: R${totalPrice}</div>`;
    });
}

function showCartItems(cartProducts) {
  let cartContainer = document.querySelector(".list-group");
  //     // console.log(cartContainer);
  cartContainer.innerHTML = "";
  console.log(cartProducts);
  cartProducts.forEach((product) => {
    console.log(product);
    cartContainer.innerHTML += `
          <li class="list-group-item">
            <div class="itm">${product[1]}</div>
            <div class="price">${product[2]}</div>
            <div class="dlt">
              <button onclick="deleteFromCart(${product[0]})" class="btn btn-danger btn-sm float-right delete">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>
  `;
  });

  let totalPrice = cartProducts.reduce(
    (total, price) => total + parseInt(price[2]),
    0
  );
  document.querySelector(".calc").innerHTML = "";
  document.querySelector(
    ".calc"
  ).innerHTML = `<div>TOTAL PRICE: R${totalPrice}</div>`;
}

showCartItems(JSON.parse(localStorage.getItem("cart products")));

function deleteFromCart(id) {
  let products = JSON.parse(localStorage.getItem("cart products"));
  let filtered_products = products.filter((product) => product[0] != id);

  localStorage.setItem("cart products", JSON.stringify(filtered_products));

  showCartItems(JSON.parse(localStorage.getItem("cart products")));
}

function renderCards(products) {
  let productContainer = document.querySelector(".products");
  for (product of products) {
    let card = createCard(product);
    productContainer.innerHTML += card;
  }
}

// renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("product-item");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack=${product[5]}]`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}

function showCart() {
  let card_button = document.querySelector(".cards");
  let blob = document.querySelector("#cart");

  card_button.addEventListener("click", () => {
    blob.classList.toggle("active");
  });
}

function showList() {
  let profile_button = document.querySelector(".profile");
  let blog = document.querySelector("#profile");

  profile_button.addEventListener("click", () => {
    blog.classList.toggle("active");
  });
}
