const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grapes",
  "Honeydew",
  "Indian Fig",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli Fruit",
  "Vanilla Bean",
  "Watermelon",
  "Xigua",
  "Yellow Passion Fruit",
  "Zucchini",
  "Avocado",
  "Blackberry",
  "Cantaloupe",
  "Dragon Fruit",
  "Eggplant",
  "Gooseberry",
  "Huckleberry",
  "Jujube",
  "Kumquat",
  "Lychee",
  "Mulberry",
  "Olive",
  "Persimmon",
  "Pomegranate",
  "Starfruit",
  "Tomato",
  "Uvaia",
  "Walnut",
  "Yam",
  "Ziziphus",
];

let timer;
const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("results");

searchInput.addEventListener("input", function (e) {
  clearTimeout(timer); // Clear previous timer
  timer = setTimeout(() => {
    const query = e.target.value.toLowerCase();
    if (query) {
      const filteredResults = items.filter((item) =>
        item.toLowerCase().includes(query)
      );
      displayResults(filteredResults);
    } else {
      resultsContainer.innerHTML = ""; // Clear results if no input
    }
  }, 300); // Debounce delay (adjust as needed)
});

function displayResults(results) {
  resultsContainer.innerHTML = results.length
    ? results.map((item) => `<div class="result-item">${item}</div>`).join("")
    : `<div class="result-item">No results found</div>`;
}
