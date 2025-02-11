# Crypto Price Tracker

A simple web app that fetches real-time cryptocurrency prices using the **CoinGecko API**. Users can enter a cryptocurrency name, and the app will display its current price in USD.

## Features

- Search for any cryptocurrency by name.
- Fetches real-time price data from the **CoinGecko API**.
- Handles user input dynamically.
- Automatically replaces spaces in the search query with `-` to match CoinGecko's API format.
- Displays results in a clean and simple UI.

## Technologies Used

- **HTML** – Structure the UI
- **CSS** – Style the application
- **JavaScript** – Fetch data and update the UI dynamically
- **CoinGecko API** – Retrieve live crypto prices

## How to Use

1. Open the `index.html` file in a browser.
2. Enter the name of a cryptocurrency in the search box (e.g., `bitcoin`, `ethereum-classic`).
3. Click the **Fetch Price** button.
4. The app will display the cryptocurrency's price in USD.

## API Endpoint

The app uses the following API endpoint to fetch prices:

```
https://api.coingecko.com/api/v3/simple/price?ids={crypto-name}&vs_currencies=usd
```

**Example:** Fetching Bitcoin's price:

```
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
```

## Future Improvements

- Add support for multiple fiat currencies (EUR, GBP, etc.).
- Display additional details like market cap and 24h change.
- Improve UI with better styling and animations.
- Implement auto-refresh to update prices in real time.

## License

This project is open-source and available under the MIT License.

---

Made with ❤️ using HTML, CSS, and JavaScript!
