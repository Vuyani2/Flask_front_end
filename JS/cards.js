// let products = [
//   {
//     imgURL: "https://picsum.photos/300?random=1",
//     imgALT: "Product 1",
//     name: "Glassmorphic Form",
//     techStack: "HTML/CSS",
//     price: "123",
//     description: "Styled form using Formspree and Glassmorphism.com",
//     addToCart: "https://github.com/Vuyani2/boilerplate",
//     buyNow: "https://hopeful-bassi-6437ef.netlify.app",
//     obj: "item1",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=2",
//     imgALT: "Product 2",
//     name: "My Timeline",
//     techStack: "HTML/CSS",
//     price: "123",
//     description: "My Timeline using animation and Glassmorphism.com",
//     addToCart: "https://github.com/Vuyani2/boilerplate",
//     buyNow: "https://hopeful-bassi-6437ef.netlify.app",
//     obj: "item2",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=3",
//     imgALT: "Product 3",
//     name: "My Tersimonials",
//     techStack: "HTML/CSS",
//     price: "123",
//     description: "My testimonials using a slider and Glassmorphism.com",
//     addToCart: "https://github.com/Vuyani2/boilerplate",
//     buyNow: "https://hopeful-bassi-6437ef.netlify.app",
//     obj: "item3",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=23",
//     imgALT: "Product 4",
//     name: "Tempreture Convetor",
//     techStack: "Python",
//     price: "123",
//     description: "Tempreture Convetor using tkinter in Python",
//     addToCart: "https://github.com/Vuyani2/boilerplate",
//     buyNow: "https://hopeful-bassi-6437ef.netlify.app",
//     obj: "item4",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=4",
//     imgALT: "Product 5",
//     name: "Mobile Shoe Store",
//     techStack: "HTML/CSS",
//     price: "123",
//     description: "Mobile shoe store web site using css and HTML",
//     addToCart: "https://github.com/Vuyani2/boilerplate",
//     buyNow: "https://hopeful-bassi-6437ef.netlify.app",
//     obj: "item5",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=5",
//     imgALT: "Product 6",
//     name: "Lotto Numbers App",
//     techStack: "Python",
//     price: "123",
//     description: "Using tkinter in python to genarate a lotto application",
//     addToCart: "https://github.com/Vuyani2/boilerplate",
//     buyNow: "https://hopeful-bassi-6437ef.netlify.app",
//     obj: "item6",
//   },
//   {
//     imgURL: "https://picsum.photos/300?random=6",
//     imgALT: "Product 7",
//     name: "LifeChoices Sign in System ",
//     techStack: "Python",
//     price: "123",
//     description:
//       "Using tkinter in python and mysql databases for user and admin logins for LifeChoices",
//     addToCart: "https://github.com/Vuyani2/boilerplate",
//     buyNow: "https://hopeful-bassi-6437ef.netlify.app",
//     obj: "item7",
//   },
// ];
// let products = [];
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

let cartProducts = [];
function addToCart(id) {
  let products = JSON.parse(localStorage.getItem("products"));
  let cartProduct = products.find((product) => {
    return product[0] == id;
  });
  cartProducts.push(cartProduct);
  localStorage.productsOnCart = cartProducts;
  //
  // localStorage.ProductsOnCart = cartProduct;
  let cartContainer = document.querySelector(".list-group");
  // console.log(cartContainer);
  cartContainer.innerHTML = `
          <li class="list-group-item">
            <div class="itm">${cartProduct[1]}</div>
            <div class="price">${cartProduct[2]}</div>
            <div class="dlt">
              <button onclick="deleteFromCart(${cartProduct[0]})" class="btn btn-danger btn-sm float-right delete">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>
  `;
}

function renderCards() {
  let productContainer = document.querySelector(".products");
  for (product of products) {
    let card = createCard(product);
    productContainer.innerHTML += card;
  }
}

renderCards();

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

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

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

let profile_button = document.querySelector(".profile");
let blog = document.querySelector("#profile");

profile_button.addEventListener("click", () => {
  blog.classList.toggle("active");
});
