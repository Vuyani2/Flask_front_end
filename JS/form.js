let form = document.querySelector("#contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let price = document.querySelector("#price").value;
  let type = document.querySelector("#type").value;
  let descreption = document.querySelector("#description").value;
  let image = document.querySelector("#image").value;

  let product = {
    name,
    price,
    type,
    descreption,
    image,
  };

  fetch("https://lit-beach-56409.herokuapp.com/create-product/", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

function createNewProuct() {
  productInfo = [];
  let input = document.querySelector("input");
  //   for (i = 0; i < input.length; i++) {
  //     productInfo.push(input[i]);
  //   }
  console.log(input);
  newProduct = {};
  newProduct["name"] = productInfo[0];
  newProduct["price"] = productInfo[1];
  newProduct["type"] = productInfo[2];
  newProduct["descreption"] = productInfo[3];
  newProduct["image"] = productInfo[4];
  console.log(newProduct);
  //   fetch("https://lit-beach-56409.herokuapp.com/create-product/", {
  //     method: "POST",
  //     body: JSON.stringify(newProduct),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
}
