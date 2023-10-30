let products = {
    data: [
      {
        productName: "Ford F-150 Lightning XLT",
        category: "Ford",
        price: "55,425",
        image: "Ford-F.webp",
      },
      {
        productName: "Ford Transit-350 Base",
        category: "Ford",
        price: "51,965",
        image: "Ford2.webp",
      },
      {
        productName: "Ford Mustang Mach-E Premium",
        category: "Ford",
        price: "44,790",
        image: "Ford3.webp",
      },
      {
        productName: "Audi Q8 e-tron 55 Prestige",
        category: "Audi",
        price: "90,050",
        image: "Audi.webp",
      },
      {
        productName: "Audi Q8 e-tron Premium",
        category: "Audi",
        price: "78,019",
        image: "Audi2.webp",
      },
      {
        productName: "Audi RS e-tron GT Base",
        category: "Audi",
        price: "140,290",
        image: "Audi3.webp",
      },
      {
        productName: "Model X",
        category: "Tesla",
        price: "68,590",
        image: "Homepage-Model-X.avif",
      },
      {
        productName: "Model 3",
        category: "Tesla",
        price: "65,090",
        image: "Homepage-Model-3.avif",
      },
      {
        productName: "Model S",
        category: "Tesla",
        price: "71,090",
        image: "Homepage-Model-S.avif",
      },
      {
        productName: "BMW iX xDrive50",
        category: "BMW",
        price: "86,660",
        image: "BMW1.webp",
      },
      {
        productName: "BMW i4 Gran Coupe M50",
        category: "BMW",
        price: "74,245",
        image: "BMW2.webp",
      },
      {
        productName: "BMW iX M60",
        category: "BMW",
        price: "121,395",
        image: "BMW3.webp",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };