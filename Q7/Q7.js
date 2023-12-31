const products = [
  {
    model: "Legion Pro 7i",
    processor: "Intel Core i9",
    ram: "16 GB",
    hardDisk: "1 TB SSD",
    display: "16 inch",
    graphics: "RTX 4070",
    os: "Windows 11",
    price: "$1,949.99",
    image: "Legion Pro 7i.png",
  },
  {
    model: "Razer Blade 15",
    processor: "Intel Core i5",
    ram: "32 GB",
    hardDisk: "256GB SSD",
    display: "18 inch",
    graphics: "GTX 1660 Ti",
    os: "Windows 11",
    price: "$1,949.99",
    image: "Razer Blade 15.png",
  },
  {
    model: "ROG Zephyrus M15",
    processor: "Intel Core i7",
    ram: "16 GB",
    hardDisk: "1 TB SSD",
    display: "15 inch",
    graphics: "RTX 2070",
    os: "Windows 11",
    price: "$1,949.99",
    image: "Asus Rog Zephyrus.png",
  },
  {
    model: "Huawei MateBook X Pro",
    processor: "Intel Core i7",
    ram: "8 GB",
    hardDisk: "512 GB SSD",
    display: "13 inch",
    graphics: "RTX 2070",
    os: "Windows 11",
    price: "$1,949.99",
    image: "Huawei matebook pro.png",
  },
];

// Get references to HTML elements
const modelSelect = document.getElementById("model");
const processorSelect = document.getElementById("processor");
const ramFilter = document.getElementById("RAM-filter");
const hardDiskFilter = document.getElementById("hard-disk-filter");
const displaySelect = document.getElementById("Display");
const resultsTableBody = document.getElementById("results-table-body");
const searchButton = document.getElementById("search-button");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //prevent from refreshing
});
// Function to filter products based on selected options
function filterProducts() {
  let results = products;
  const selectedModel = modelSelect.value;
  const selectedProcessor = processorSelect.value;
  const selectedDisplay = displaySelect.value;

  if (selectedModel !== "placeholder") {
    results = results.filter((product) => {
      return product.model
        .toLowerCase()
        .includes(selectedModel.toLowerCase());
    });
  }
  if (selectedProcessor !== "placeholder") {
    results = results.filter((product) => {
      return product.processor
        .toLowerCase()
        .includes(selectedProcessor.toLowerCase());
    });
  }
  if (selectedDisplay !== "placeholder") {
    results = results.filter((product) => {
      return product.display
        .toLowerCase()
        .includes(selectedDisplay.toLowerCase());
    });
  }
  updateResultsTable(results);
}

// Function to update the table with filtered results
function updateResultsTable(results) {
  resultsTableBody.innerHTML = "";
  //clear the table each time
  for (const product of results) {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td>${product.model}</td>
                <td><img src="${product.image}" alt="${product.model}"></td>
                <td>${product.processor}</td>
                <td>${product.ram}</td>
                <td>${product.hardDisk}</td>
                <td>${product.display}</td>
                <td>${product.graphics}</td>
                <td>${product.os}</td>
                <td>${product.price}</td>
                <td><button>Add to Cart</button></td>
            `;
    resultsTableBody.appendChild(row);
  }
}

// Attach event listener to the search button
searchButton.addEventListener("click", function () {
  filterProducts();
});

//taking placeholders back after each refresh
document.addEventListener("DOMContentLoaded", function () {
  modelSelect.value = "placeholder";
  processorSelect.value = "placeholder";
  displaySelect.value = "placeholder";
});

//pause and play for video
const video = document.querySelector("video");
const pauseButton = document.querySelector(".pause-button");

// Add a click event listener to the pause button
pauseButton.addEventListener("click", () => {
  if (video.paused) {
    // If the video is paused, play it
    video.play();
  } else {
    // If the video is playing, pause it
    video.pause();
  }
});
video.addEventListener("play", () => {
  pauseButton.style.opacity = 0; // Hide the button
});

video.addEventListener("pause", () => {
  pauseButton.style.opacity = 1; // Show the button
});

//the values of the dropdown menu
ramFilter.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const selectedRam = event.target.textContent;
    console.log(selectedRam);
    // results = results.filter((product) => {
    //   return product.ram.toLowerCase().includes(selectedRam.toLowerCase());
    // });
  }
});
hardDiskFilter.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const selectedHardDisk = event.target.textContent;
    console.log(selectedHardDisk);
    // results = results.filter((product) => {
    //   return product.hardDisk
    //     .toLowerCase()
    //     .includes(selectedHardDisk.toLowerCase());
    // });
  }
});
