const plan = [
  { pageviews: "10K", price: 8 },
  { pageviews: "50k", price: 12 },
  { pageviews: "100K", price: 16 },
  { pageviews: "500k", price: 24 },
  { pageviews: "1M", price: 36 },
];

const range = document.querySelector(".pricing_range");
const checkbox = document.getElementById("checkbox");
const pageviewsNumber = document.querySelector(".pageviews_number");
const billPriceDesktop = document.querySelector(".bill_price_desktop");
const billPriceMobile = document.querySelector(".bill_price_mobile");

function price(e) {
  const i = parseInt(range.value);
  let price = plan[i].price;

  if (checkbox.checked) {
    const discountPrice = (price * 25) / 100;
    price = price - discountPrice;
  }
  pageviewsNumber.textContent = plan[i].pageviews;
  billPriceMobile.textContent = `$${price}.00 `;
  billPriceDesktop.textContent = `$${price}.00 `;

  const minValue = e.target.min;
  const maxValue = e.target.max;
  const Currentvalue = e.target.value;
  e.target.style.backgroundSize = `
    ${((Currentvalue - minValue) * 100) / (maxValue - minValue)}%`;
}

range.addEventListener("input", price);
checkbox.addEventListener("click", price);
price();
