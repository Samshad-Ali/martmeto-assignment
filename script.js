const fetchData = async () => {
  const res = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448"
  );
  const data = await res.json();
  console.log(data);

  // Creating HTML elements
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  imgContainer.innerHTML = `
        <img class="main-img" src="./assets/Rectangle 4.png" alt="main-img" />
        <div class="slider-img">
          <img src="./assets/Rectangle 8.png" alt="" />
          <img src="./assets/Rectangle 5.png" alt="" />
          <img src="./assets/Rectangle 7.png" alt="" />
          <img src="./assets/Rectangle 8.png" alt="" />
        </div>`;

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  textContainer.innerHTML = `
        <div class="heading">
            <p class="sub-heading">${data?.product.vendor}</p>
            <h2>${data?.product.title}</h2>
        </div>
        <div class="price-container">
            <div class="price-box">
                <span>35% Off</span>
                <p>${data?.product.price}</p>
            </div>
            <span class="over-price">${data?.product.compare_at_price}</span>
        </div>
        <div class="color-container">
            <p>Choose a Color</p>
            <div class="color">
                <div class="first color-box"></div>
                <div class="second color-box"></div>
                <div class="third color-box"></div>
                <div class="fourth color-box"></div>
            </div>
        </div>
        <div class="size-container">
            <p>Choose a Size</p>
            <div class="form-container">
            <div>
            <input type="radio" name="size" id="small" />
            <label for="small">Small</label>
          </div>
          <div>
            <input type="radio" name="size" id="medium" />
            <label for="medium">Medium</label>
          </div>
          <div>
            <input type="radio" name="size" id="large" />
            <label for="large">Large</label>
          </div>
          <div>
            <input type="radio" name="size" id="ex-large" />
            <label for="ex-large">Extra Large</label>
          </div>
          <div>
            <input type="radio" name="size" id="xxl" />
            <label for="xxl">XXL</label>
          </div>
            </div>
        </div>
        <div class="cart-box">
            <button class="quantity">
                <span>-</span>
                1
                <span>+</span>
            </button>
            <button class="btn">
                <img src="./assets/Vector.png" alt="bag" />
                Add To Cart
            </button>
        </div>
        <div class="details">
            <p>
              ${data?.product.description}
            </p>
        </div>`;

  // Appending elements to the container
  const container = document.getElementById("container");
  container.appendChild(imgContainer);
  container.appendChild(textContainer);
};

addEventListener("DOMContentLoaded", fetchData);
