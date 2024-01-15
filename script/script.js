// toggle navbar code
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const navList = document.getElementById("navList");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});

//domin category
const fetchDominCategory = async () => {
  const res = await fetch("../data/dominCategory.json");
  const dominCategory = await res.json();
  displayDominCategory(dominCategory.dominCategory);
};
const displayDominCategory = (datas) => {
  const pricingHeaderList = document.getElementById("pricing_header_list");

  datas.forEach((data) => {
    const liContainer = document.createElement("li");
    const active = data.title === ".sg $7.91";
    if (active) {
      liContainer.classList.add("pricing_header_list_style");
    }
    liContainer.innerHTML = `${data.title}`;
    console.log(liContainer);
    pricingHeaderList.appendChild(liContainer);
  });
};

//card items
const fetchCardItems = async () => {
  const res = await fetch("../data/cardItems.json");
  const cardItems = await res.json();
  displayCardItems(cardItems.card);
};
const displayCardItems = (datas) => {
  const pricingCardContainer = document.getElementById("pricing_card");
  datas.forEach((data) => {
    const div = document.createElement("div");
    const classAdd = data.cardTitle === "Business";
    if (classAdd) {
      div.classList.add("pricing_card_two");
    } else {
      div.classList.add("pricing_card_one");
    }
    div.innerHTML = `
    <div class=${
      classAdd ? "pricing_card_two_header" : "pricing_card_one_header"
    }>
              <p>${data.cardTitle}</p>
              <div class="pricing_card_one_header_text">
                <h1 class="pricing_card_one_header_title">
                  ${
                    data.cardPricing
                  }<span class="pricing_card_one_header_sub_title"
                    >/month</span
                  >
                </h1>
                <button class=${
                  classAdd
                    ? "pricing_card_two_header_btn"
                    : "pricing_card_one_header_btn"
                }>${data.cardOffers}</button>
              </div>
              <h3 class="pricing_card_one_header_description">
                ${data.cardDescription}
              </h3>
            </div>
            <div class="pricing_card_one_features_list">
              <ul>
                ${data.cardService
                  .map((service) => `<li><img class="card_tick" src="https://i.postimg.cc/hjTpNp97/checkmark.png" alt="" /> ${service}</li>`)
                  .join("")}
                 </ul> 
              <button class="pricing_card_btn_one">Buy Now</button>
            </div>
    `;
    pricingCardContainer.appendChild(div);
  });
};

//hosting cloud
const fetchHostingCloud = async () => {
  const res = await fetch("../data/hostingCloud.json");
  const hostingCloud = await res.json();
  displayCloudData(hostingCloud.cloud);
};
const displayCloudData = (datas) => {
  const hostingCloudItemsContainer = document.getElementById(
    "hosting_cloud_items"
  );
  datas.forEach((data) => {
    // Create a new div element for each hosting item
    const hostingItemDiv = document.createElement("div");
    hostingItemDiv.classList.add("easy_item");

    // Build the HTML content for each item
    hostingItemDiv.innerHTML = `
      <div class="easy_item_container">
       <div class="container1">
         <div class="easy_item_container_image">
         <img class="easy_item_container_icon" src="${data.image}" alt="" />
        </div> 
         <h1 class"easy_item_title">${data.title}</h1>
         <p>${data.description}</p>
         <button class="easy_item_btn">LEARN MORE</button>
        </div>
        <div class="container2">
        <img src="${data.cloud_images}" alt="" />
      </div>
        </div>
      `;
    hostingCloudItemsContainer.appendChild(hostingItemDiv);
  });
};
//footer service
const fetchFooterServiceData = async () => {
  const res = await fetch("../data/footerServie.json");
  const footerService = await res.json();
  displayFooterServiceData(footerService.service);
};
const displayFooterServiceData = (datas) => {
  console.log(datas);
  const footerServiceContainer = document.getElementById("footer_service");

  datas.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3 class="footer_service_title">${data.title}</h3>
      <ul class="footer_service_list">
        ${data.serviceList.map((service) => `<li><a href="#">${service}</a></li>`).join("")}
      </ul>
    `;
    footerServiceContainer.appendChild(div);
  });
};
fetchDominCategory();
fetchCardItems();
fetchHostingCloud();
fetchFooterServiceData();
