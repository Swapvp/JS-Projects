# Debounced Search Bar

A simple **Debounced Search Bar** built using **Vanilla JavaScript** that dynamically filters a list of items. The search function is **debounced** to improve performance, ensuring that the filtering is only triggered after the user stops typing for a specified delay.

## 🚀 Features

✅ **Debounced Input** - Reduces unnecessary function calls  
✅ **Dynamic Search** - Filters a dataset based on user input  
✅ **Performance Optimized** - Uses `setTimeout` and `clearTimeout` for smooth UX  
✅ **Scrollable Results** - Displays multiple results efficiently  
✅ **Lightweight** - No external libraries needed

## 📂 Project Structure

/debounced-search-bar │── index.html # Main HTML structure │── style.css # Styling for the search bar (if separated) │── script.js # JavaScript logic for debouncing │── README.md # Project documentation

## 🛠️ How It Works

1. The user types in the search bar.
2. A **debounce function** waits for `300ms` before executing the search.
3. If the user types again within this time, the previous function call is **canceled**.
4. Once the user stops typing, the function **filters** the dataset and updates the UI.

## 🔧 Installation & Usage

1. Clone this repository:

   ```sh
   git clone https://github.com/Swapvp/JS-Projects/tree/main/debounced-search.git

   ```

2. Open index.html in your browser.
3. Start typing in the search bar to see debouncing in action!

🔥 Future Enhancements
Fetch results from an API instead of a static dataset.
Add loading indicators for a better user experience.
Implement highlighting of matched text in results.
Support keyboard navigation for selecting results.

📜 License
This project is licensed under the MIT License. Feel free to use and modify it.
