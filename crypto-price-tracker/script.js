let infoDiv = document.querySelector(".info");

async function cryptoFetch() {
  let input = document.querySelector("#input").value.trim();

  if (!input) {
    console.log("Please enter a cryptocurrency name.");
    return;
  }

  input = input.replace(/\s+/g, "-"); // Replace spaces with '-'

  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${input}&vs_currencies=inr`
  );
  const data = await response.json();

  if (Object.keys(data).length === 0) {
    console.log("Invalid cryptocurrency name.");
    return;
  }

  const cryptoName = Object.keys(data)[0]; // Extract crypto name
  const price = data[cryptoName].inr; // Extract price in USD

  let li = document.createElement("li");
  li.innerText = `${cryptoName}: ₹${price}`; // Show name and price
  infoDiv.appendChild(li);
}

// Call this function on button click
document.querySelector("#fetchButton").addEventListener("click", cryptoFetch);
