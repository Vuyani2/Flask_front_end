let products = [
  {
    imgURL: "https://picsum.photos/300?random=1",
    imgALT: "Product 1",
    name: "Glassmorphic Form",
    techStack: "HTML/CSS",
    price: "123",
    description: "Styled form using Formspree and Glassmorphism.com",
    addToCart: "https://github.com/Vuyani2/boilerplate",
    buyNow: "https://hopeful-bassi-6437ef.netlify.app",
    obj: "item1",
  },
  {
    imgURL: "https://picsum.photos/300?random=2",
    imgALT: "Product 2",
    name: "My Timeline",
    techStack: "HTML/CSS",
    price: "123",
    description: "My Timeline using animation and Glassmorphism.com",
    addToCart: "https://github.com/Vuyani2/boilerplate",
    buyNow: "https://hopeful-bassi-6437ef.netlify.app",
    obj: "item2",
  },
  {
    imgURL: "https://picsum.photos/300?random=3",
    imgALT: "Product 3",
    name: "My Tersimonials",
    techStack: "HTML/CSS",
    price: "123",
    description: "My testimonials using a slider and Glassmorphism.com",
    addToCart: "https://github.com/Vuyani2/boilerplate",
    buyNow: "https://hopeful-bassi-6437ef.netlify.app",
    obj: "item3",
  },
  {
    imgURL: "https://picsum.photos/300?random=23",
    imgALT: "Product 4",
    name: "Tempreture Convetor",
    techStack: "Python",
    price: "123",
    description: "Tempreture Convetor using tkinter in Python",
    addToCart: "https://github.com/Vuyani2/boilerplate",
    buyNow: "https://hopeful-bassi-6437ef.netlify.app",
    obj: "item4",
  },
  {
    imgURL: "https://picsum.photos/300?random=4",
    imgALT: "Product 5",
    name: "Mobile Shoe Store",
    techStack: "HTML/CSS",
    price: "123",
    description: "Mobile shoe store web site using css and HTML",
    addToCart: "https://github.com/Vuyani2/boilerplate",
    buyNow: "https://hopeful-bassi-6437ef.netlify.app",
    obj: "item5",
  },
  {
    imgURL: "https://picsum.photos/300?random=5",
    imgALT: "Product 6",
    name: "Lotto Numbers App",
    techStack: "Python",
    price: "123",
    description: "Using tkinter in python to genarate a lotto application",
    addToCart: "https://github.com/Vuyani2/boilerplate",
    buyNow: "https://hopeful-bassi-6437ef.netlify.app",
    obj: "item6",
  },
  {
    imgURL: "https://picsum.photos/300?random=6",
    imgALT: "Product 7",
    name: "LifeChoices Sign in System ",
    techStack: "Python",
    price: "123",
    description:
      "Using tkinter in python and mysql databases for user and admin logins for LifeChoices",
    addToCart: "https://github.com/Vuyani2/boilerplate",
    buyNow: "https://hopeful-bassi-6437ef.netlify.app",
    obj: "item7",
  },
];

function createCard(card) {
  let createdCard = `
      <div class="product-item ${card.obj}" techStack=${card.techStack}>
      <img src="${card.imgURL}" alt="${card.imgALT}">
          <div class="product-details">
              <h2>${card.name}</h2>
              <h3>${card.techStack}</h3>
              <h4>${card.price}</h4>
              <p>${card.description}</p>
          </div>
          <div class="btns-container">
              <a
                href="${card.addToCart}"
                target="_blank"
                class="button"
                >Add to cart</a
              >
              <a
                href="${card.buyNow}"
                target="_blank"
                class="button"
                >Buy Now</a
              >
          </div>
      </div>    
      `;
  return createdCard;
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

let card_button = document.querySelector(".cards");
let blob = document.querySelector("#cart");

card_button.addEventListener("click", () => {
  blob.classList.toggle("active");
});

let profile_button = document.querySelector(".profile");
let blog = document.querySelector("#profile");

profile_button.addEventListener("click", () => {
  blog.classList.toggle("active");
});
