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
