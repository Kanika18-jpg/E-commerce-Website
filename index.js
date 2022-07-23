const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LEVIS",
    price: 119,
    colors: [
      {
        code: "red",
        img: "./img/pic2.jpg",
      },
      {
        code: "orange",
      },
    ],
  },
  {
    id: 2,
    title: "BIBA",
    price: 149,
    colors: [
      {
        code: "grey",
        img: "./img/pic3.jpg",
      },
      {
        code: "blue",
      },
    ],
  },
  {
    id: 3,
    title: "ZARA",
    price: 109,
    colors: [
      {
        code: "black",
        img: "./img/pic4.jpg",
      },
      {
        code: "darkblue",
      },
    ],
  },
  {
    id: 4,
    title: "HM",
    price: 129,
    colors: [
      {
        code: "yellow",
        img: "./img/pic5.jpg",
      },
      {
        code: "darkblue",
      },
    ],
  },
  {
    id: 5,
    title: "GUCCI",
    price: 99,
    colors: [
      {
        code: "black",
        img: "./img/pic6.jpg",
      },
      {
        code: "green",
      },
    ],
  },
  {
    id: 6,
    title: "WESTSIDE",
    price: 99,
    colors: [
      {
        code: "pink",
        img: "./img/pic7.jpg",
      },
      {
        code: "white",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
     //change the current slide
    
    wrapper.style.transform = `translateX(${-84 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
   
  });
});
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
  
  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const button = document.querySelector(".nsButton");

button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})