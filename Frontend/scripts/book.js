window.addEventListener("DOMContentLoaded", function () {
  const defaultOption = document.querySelector(".option");
  defaultOption.classList.add("active");
  const popup = document.getElementById("popup");
  popup.classList.add("active");
  const body = document.getElementById("body");
  body.classList.add("bodydim");
  const maindiv = document.querySelector(".main-div");
  maindiv.style.display = "none";
});

fetchRenderInScrollBar();

let Gobaldata;

function toggleOption(opt) {
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.classList.remove("active");
  });
  opt.classList.add("active");
}

function openPopup() {
  const popup = document.getElementById("popup");
  const body = document.getElementById("body");
  const maindiv = document.querySelector(".main-div");

  maindiv.style.display = "none";
  body.classList.add("bodydim");
  popup.classList.add("active");
}

function closePopup() {
  const popup = document.getElementById("popup");
  const maindiv = document.querySelector(".main-div");
  maindiv.style.display = "block";
  popup.classList.remove("active");
  body.classList.remove("bodydim");
  const bar = document.getElementById("search");
  bar.value = "";
  fetchRenderInScrollBar();
}

const scrollbarDiv = document.getElementById("scrollable-div");

function fetchRenderInScrollBar() {
  fetch("https://dull-teal-pelican-vest.cyclic.app/admin/salons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Render salon details in the scrollable div

      renderData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function renderData(data) {
  const scrollableDiv = document.getElementById("scrollable-div");
  scrollableDiv.innerHTML = "";
  data.forEach((salon) => {
    const salonName = salon.name;
    const salonAddress = salon.address;
    const salonContact = salon.contact;
    const salonCity = salon.city;

    // Create a div element for the salon details
    const salonDiv = document.createElement("div");
    salonDiv.classList.add("salon-details");

    // Create and append elements for name, address, contact, and city
    const nameElement = document.createElement("h2");
    nameElement.textContent = salonName;
    salonDiv.appendChild(nameElement);

    const addressElement = document.createElement("p");
    addressElement.textContent = `Address: ${salonAddress}`;
    salonDiv.appendChild(addressElement);

    const contactElement = document.createElement("p");
    contactElement.textContent = `Contact: ${salonContact}`;
    salonDiv.appendChild(contactElement);

    const cityElement = document.createElement("p");
    cityElement.textContent = `City: ${salonCity}`;
    salonDiv.appendChild(cityElement);

    // Add event listener to the salon div
    salonDiv.addEventListener("click", () => {
      // Perform the desired action when the div is clicked
      const centerName = document.getElementById("centerName");
      console.log(`Salon ${salonName} clicked!`);
      centerName.textContent = salonName;
      Gobaldata = salon;

      // Convert the data to JSON string
      const jsonData = JSON.stringify(Gobaldata);

      // Assign the data to local storage with a specific key
      localStorage.setItem("SalonData", jsonData);

      showCategory("Body");
      console.log(salon);
      closePopup();
    });

    // Append the salon div to the scrollable div
    scrollableDiv.appendChild(salonDiv);
  });
}

function bodysub() {
  showCategory("Body");
}

function hairsub() {
  showCategory("Hair");
}

function skinsub() {
  showCategory("Face");
}

function showCategory(category) {
  // Get the services container element
  const servicesContainer = document.getElementById("services-container");

  // Clear the container
  servicesContainer.innerHTML = "";

  // Get the services of the selected category from the fetched data
  const selectedServices = Gobaldata.services[category];

  // Iterate over the services and create HTML elements to display them
  selectedServices.forEach((service) => {
    const serviceElement = document.createElement("div");
    serviceElement.classList.add("service");
    console.log(service["time"]);
    serviceElement.innerHTML = `
      <div class="service-details">
      <div class="service-name">${service.name}</div>
      <div class="service-desc">${service.desc}</div>
    </div>
    <div class="service-info">
      <div class="service-price">Price: ${service.price}</div>
      <div class="service-time">Time: ${service.time}</div>
    </div>
      `;

    serviceElement.addEventListener("click", () => {
      let selectedServices = {
        name: service.name,
        desc: service.desc,
        price: service.price,
        time: service.time,
      };

      const selectedServiceJson = JSON.stringify(selectedServices);
      localStorage.setItem("selected_service", selectedServiceJson);
      window.location.href = "../pages/confirmSlot.html";
    });

    servicesContainer.appendChild(serviceElement);
  });
}

function handleSearch(name) {
  console.log(name);
  fetch("https://dull-teal-pelican-vest.cyclic.app/admin/salons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Render salon details in the scrollable div

      renderData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
