const food = [
  {
    name: "20 Piece McNuggets",
    price: "$4.99",
    typeof: "Sides",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-20-chicken-mcnuggets:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
    alt: "20 Pieces",
  },
  {
    name: "McChicken",
    price: "$3.89",
    typeof: "Sandwiches",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0383_CrispyChickenSandwich_PotatoBun_1564x1564-1:nutrition-calculator-tile?resmode=sharp2",
    alt: "fast food",
  },
  {
    name: "Large Fries",
    price: "$3.79",
    typeof: "Sides",
    Image:
      "https://www.mcdonalds.com.sg/sites/default/files/2025-02/French%20Fries%20-%20L.jpg",
    alt: "fast food",
  },
  {
    name: "McFlurry",
    price: "$4.39",
    typeof: "Desserts",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_3832_OREOMcFlurry_1564x1564-1:product-header-mobile?wid=1313&hei=1313&dpr=off",
    alt: " fast food",
  },
  {
    name: "Big Mac",
    price: "$6.72",
    typeof: "Sandwiches",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0005-999_BigMac_1564x1564-1:product-header-mobile?wid=1313&hei=1313&dpr=off",
    alt: "fast food",
  },
  {
    name: "Snack Wrap",
    price: "$2.99",
    typeof: "Sides",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202504_25254_RanchSnackWrap_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off",
    alt: "fast food",
  },
  {
    name: "Spicy McCrispy",
    price: "$3.89",
    typeof: "Sandwiches",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0116_SpicyCrispyChicken_PotatoBun_1564x1564-1?product-header-desktop&wid=1000&hei=1000&dpr=off",
    alt: "fast food",
  },
  {
    name: "Egg McMuffin",
    price: "$3.99",
    typeof: "Sandwiches",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202004_0046_EggMcMuffin_1564x1564?wid=1000&hei=1000&dpr=off",
    alt: "fast food",
  },
  {
    name: "Sausage Burrito",
    price: "$2.89",
    typeof: "Sides",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-breakfast-burrito-white-tortilla:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
    alt: "fast food",
  },
  {
    name: "Filet-O-Fish",
    price: "$3.99",
    typeof: "Sandwiches",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_5926-999_Filet-O-Fish_HalfSlice_Alt_1564x1564-1?wid=1000&hei=1000&dpr=off",
    alt: "fast food",
  },
  {
    name: "Vanilla Ice Cream",
    price: "$2.99",
    typeof: "Desserts",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202106_0336_LargeVanillaCone_1564x1564-1:nutrition-calculator-tile?resmode=sharp2",
    alt: "fast food",
  },
  {
    name: "Apple Pie",
    price: "$2.99",
    typeof: "Desserts",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0706_BakedApplePie_Broken_1564x1564-1?wid=1000&hei=1000&dpr=off",
    alt: "fast food",
  },
  {
    name: "Happy Meal",
    price: "$6.77",
    typeof: "Combos",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonalds/TinyTAN_Hamburger_1564x1564?wid=1000&hei=1006&dpr=off",
    alt: "fast food",
  },
  {
    name: "Quarter Pounder",
    price: "$3.99",
    typeof: "Sandwiches",
    Image:
      "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564?wid=1000&hei=1000&dpr=off",
    alt: "fast food",
  },
];

function inject(food) {
  const container = document.querySelector(".container");
  food.forEach((food) => {
    container.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="card" data-type="${food.typeof}">
        <h2 class="card-header">${food.name}</h2>
        <img class="card-img" src="${food.Image}" alt="${food.alt}" />
        <h3 class="card-price">${food.price}</h3>
        <button class="button">Add to Cart</button>
      </div>
    `
    );
  });
}

inject(food);

function getCards() {
  const buttons = document.querySelectorAll(".button");
  const btnArr = Array.from(buttons);
  btnArr.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.target.textContent = "Added!";
      setTimeout(() => {
        event.target.textContent = "Add to Cart";
      }, 1000);
    });
  });
}

getCards();

function filterbyType(FilteredFoodType) {
  const foods = document.querySelectorAll(".card");
  foods.forEach((food) => {
    const FoodType = food.getAttribute("data-type");
    if (FoodType === FilteredFoodType) {
      food.style.display = "";
    } else {
      food.style.display = "none";
    }
  });
}

document.querySelector("filter-sandwiches");
addEventListener("click", () => {
  filterbyType("Sandwiches");
});
