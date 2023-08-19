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
    processor: "Intel Core i7",
    ram: "32 GB",
    hardDisk: "256GB SSD",
    display: "16 inch",
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
    display: "16 inch",
    graphics: "RTX 2070",
    os: "Windows 11",
    price: "$1,949.99",
    image: "Asus Rog Zephyrus.png",
  },
];

// Get references to HTML elements
const modelSelect = document.getElementById("model");
const processorSelect = document.getElementById("processor");
const ramFilter = document.getElementById("RAM-filter");
const hardDiskFilter = document.getElementById("hard-disk-filter");
const displaySelect = document.getElementById("Display");
const resultsTableBody = document.querySelector("#results-table-body");
const searchButton = document.getElementById("search-button");
const myForm = document.getElementById("salam");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
// Function to filter products based on selected options
function filterProducts() {
  let results = products;
  const selectedModel = modelSelect.value;
  console.log(selectedModel);
  //   const selectedProcessor = processorSelect.value;
  //   const selectedRam = ramFilter.value;
  //   const selectedHardDisk = hardDiskFilter.value;
  //   const selectedDisplay = displaySelect.value;
  if (selectedModel !== "placeholder") {
    results = results.filter((product) => {
      return product.model
        .toLowerCase()
        .includes(selectedModel.toLowerCase());
    });
    updateResultsTable(results);
  }
}

// Function to update the table with filtered results
function updateResultsTable(results) {
  resultsTableBody.innerHTML = "";
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
