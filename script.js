const bigImage = document.querySelector(".big-image");
// const smallImage = document.querySelectorAll("[small-img]");
const image1 = document.querySelector("[img1]");
const image2 = document.querySelector("[img2]");
const image3 = document.querySelector("[img3]");
const image4 = document.querySelector("[img4]");

const largeImages = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

image1.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 1)";
//Displays the larger image when clicked
image1.addEventListener("click", () => {
  bigImage.src = largeImages[0];
  image1.classList.add("border");
  image1.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 1)";
  image2.classList.remove("border");
  image2.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image3.classList.remove("border");
  image3.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image4.classList.remove("border");
  image4.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
});
image2.addEventListener("click", () => {
  bigImage.src = largeImages[1];
  image1.classList.remove("border");
  image1.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image2.classList.add("border");
  image2.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 1)";
  image3.classList.remove("border");
  image3.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image4.classList.remove("border");
  image4.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
});
image3.addEventListener("click", () => {
  bigImage.src = largeImages[2];
  image1.classList.remove("border");
  image1.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image2.classList.remove("border");
  image2.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image3.classList.add("border");
  image3.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 1)";
  image4.classList.remove("border");
  image4.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
});
image4.addEventListener("click", () => {
  bigImage.src = largeImages[3];
  image1.classList.remove("border");
  image1.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image2.classList.remove("border");
  image2.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image3.classList.remove("border");
  image3.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 0)";
  image4.classList.add("border");
  image4.parentElement.style.border = "3px solid hsla(26, 100%, 55%, 1)";
});

const remove = document.querySelector(".remove");
const add = document.querySelector(".add");
const number = document.querySelector(".number");

//Increases and decreases number of items on the counter
add.addEventListener("click", () => {
  number.textContent++;
});
remove.addEventListener("click", () => {
  if (number.textContent > 0) {
    number.textContent--;
  }
});

const noOfItems = document.querySelector(".no-of-items");
const totalPrice = document.querySelector(".total-price");
const addToCart = document.querySelector(".add-to-cart");
const clear = document.querySelector(".delete");
const emptyCart = document.querySelector(".empty-cart");
const cartCheckout = document.querySelector(".checkout");
const checkout = document.querySelector(".checkout-button");
const count = document.querySelector(".count");

//Adds item to cart and shows the total amount
addToCart.addEventListener("click", () => {
  if (number.textContent > 0) {
    emptyCart.style.display = "none";
    cartCheckout.style.display = "grid";
    checkout.style.display = "block";
    noOfItems.textContent = number.textContent;
    totalPrice.textContent = `$${(125 * noOfItems.textContent).toFixed(2)}`;
    count.style.opacity = "1";
    count.style.zIndex = "1";
    count.textContent = number.textContent;
  }
});
//Clears the cart
clear.addEventListener("click", () => {
  emptyCart.style.display = "block";
  cartCheckout.style.display = "none";
  checkout.style.display = "none";
  count.style.opacity = "0";
  count.style.zIndex = "-1";
});

const cart = document.querySelector(".cart");
const cartDetails = document.querySelector("[cart-details]");

//Opens and closes the cart
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[cart-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[cart-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[cart-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[cart-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

const closeBtn = document.querySelector(".close-nav");
const menuBar = document.querySelector(".menu");
const nav = document.querySelector("#nav");
const darkBack = document.querySelector(".dark-back");

//opens the side nav
menuBar.addEventListener("click", () => {
  nav.style.width = "65%";
  darkBack.style.background = "rgba(0, 0, 0, 75%)";
  darkBack.style.zIndex = "3";
});
//closes the side nav
closeBtn.addEventListener("click", () => {
  nav.style.width = "0";
  darkBack.style.background = "rgba(0, 0, 0, 0)";
  darkBack.style.zIndex = "-1";
});
var x = window.matchMedia("(min-width: 375px) and (max-width:768px)");
window.addEventListener("mouseup", (e) => {
  if (x.matches) {
    if (e.target != nav && e.target.parentNode != nav) {
      nav.style.width = "0";
      darkBack.style.background = "rgba(0, 0, 0, 0)";
      darkBack.style.zIndex = "-1";
    }
  }
});

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bigImagesContainer = document.querySelector(".big-images");
//
right.addEventListener("click", () => {
  bigImagesContainer.scrollLeft += screen.width;
});
left.addEventListener("click", () => {
  bigImagesContainer.scrollLeft -= screen.width;
});

const pop = document.querySelector(".pop");
const arrowLeft = document.querySelector(".pop-left");
const arrowRight = document.querySelector(".pop-right");
const bigPopImages = document.querySelector(".big-pop-images");
const closePop = document.querySelector(".pop-close");

arrowLeft.addEventListener("click", () => {
  bigPopImages.scrollLeft -= 500;
});
arrowRight.addEventListener("click", () => {
  bigPopImages.scrollLeft += 500;
});

var y = window.matchMedia("(min-width:769px)");
if (y.matches) {
  bigImage.addEventListener("click", () => {
    pop.style.display = "block";
  });
}
closePop.addEventListener("click", () => {
  pop.style.display = "none";
});

const bigpopimg1 = document.querySelector("[bigpopimg1]");
const bigpopimg2 = document.querySelector("[bigpopimg2]");
const bigpopimg3 = document.querySelector("[bigpopimg3]");
const bigpopimg4 = document.querySelector("[bigpopimg4]");
const popimg1 = document.querySelector("[popimg1]");
const popimg2 = document.querySelector("[popimg2]");
const popimg3 = document.querySelector("[popimg3]");
const popimg4 = document.querySelector("[popimg4]");

popimg1.classList.add("border");
popimg1.parentElement.style.border = "2px solid hsla(26, 100%, 55%, 1)";
popimg1.addEventListener("click", () => {
  bigpopimg1.scrollIntoView();
  popimg1.classList.add("border");
  popimg1.parentElement.style.border = "2px solid hsla(26, 100%, 55%, 1)";
  popimg2.classList.remove("border");
  popimg2.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg3.classList.remove("border");
  popimg3.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg4.classList.remove("border");
  popimg4.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
});
popimg2.addEventListener("click", () => {
  bigpopimg2.scrollIntoView();
  popimg1.classList.remove("border");
  popimg1.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg2.classList.add("border");
  popimg2.parentElement.style.border = "2px solid hsla(26, 100%, 55%, 1)";
  popimg3.classList.remove("border");
  popimg3.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg4.classList.remove("border");
  popimg4.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
});
popimg3.addEventListener("click", () => {
  bigpopimg3.scrollIntoView();
  popimg1.classList.remove("border");
  popimg1.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg2.classList.remove("border");
  popimg2.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg3.classList.add("border");
  popimg3.parentElement.style.border = "2px solid hsla(26, 100%, 55%, 1)";
  popimg4.classList.remove("border");
  popimg4.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
});

popimg4.addEventListener("click", () => {
  bigpopimg4.scrollIntoView();
  popimg1.classList.remove("border");
  popimg1.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg2.classList.remove("border");
  popimg2.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg3.classList.remove("border");
  popimg3.parentElement.style.border = "2px solid hsla(0, 0%, 0%, 0.75)";
  popimg4.classList.add("border");
  popimg4.parentElement.style.border = "2px solid hsla(26, 100%, 55%, 1)";
});