const menu = () => {
	const content = document.getElementById("content");
	content.innerHTML = "";

	function createTitle() {
		const title = document.createElement("div");
		title.classList.add("title");
		title.innerHTML = "Menu";
		content.appendChild(title);
	}

	function createMenu() {
		const menuDiv = document.createElement("div");
		content.append(menuDiv);
		menuDiv.appendChild(createDrinks());
		menuDiv.appendChild(createMainDishes());
	}

	function createDrinks() {
		const drinkContainer = document.createElement("div");
		const drinks = [
			{
				drink: "Beer",
				content:
					"The best beer you'll ever had! It's imported from a german brewery!",
				price: "¥ 600",
			},
			{
				drink: "Cola",
				content: "Ice cold Cola! Served with slice of lemon.",
				price: "¥ 450",
			},
			{
				drink: "Fanta",
				content:
					"Ice cold Fanta! Server with ice cubes to keep it longer cool.",
				price: "¥ 450",
			},
			{
				drink: "Iced Tea",
				content: "Peach flavored ice tea! Available sparkling and still.",
				price: "¥ 400",
			},
		];
		drinkContainer.classList.add("drink-container");
		drinks.forEach((element) => {
			const _drinkCard = document.createElement("div");
			const _drink = document.createElement("p");
			const _drinkTitle = document.createElement("h3");
			const _drinkPrice = document.createElement("p");
			_drinkTitle.classList.add("drink-title");
			_drinkTitle.innerHTML = element.drink;
			_drink.textContent = element.content;
			_drinkPrice.textContent = element.price;
			_drink.classList.add("drink");
			_drinkPrice.classList.add("price");
			drinkContainer.appendChild(_drinkCard);
			_drinkCard.appendChild(_drinkTitle);
			_drinkCard.appendChild(_drink);
			_drinkCard.appendChild(_drinkPrice);
		});
		return drinkContainer;
	}

	function createMainDishes() {
		const dishContainer = document.createElement("div");
		const dishes = [
			{
				dish: "Sushi",
				content:
					"Sushi consists of vinegared rice accompanied by various ingredients such as raw fish, seafood, vegetables, or eggs. Common types include Nigiri (slices of fish on rice), Maki (rolls), and Sashimi (slices of raw fish without rice).",
				price: "¥ 5000",
			},
			{
				dish: "Ramen",
				content:
					"Ramen is a Japanese noodle soup typically made with wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso. It is topped with ingredients like sliced pork, nori (seaweed), menma (bamboo shoots), and green onions.",
				price: "¥ 1000",
			},
			{
				dish: "Tempura",
				content:
					"Tempura consists of seafood or vegetables that are coated in a light batter and deep-fried to achieve a crispy texture. It is commonly served with a dipping sauce made from soy sauce, mirin, and dashi.",
				price: "¥ 1200",
			},
			{
				dish: "Takoyaki",
				content:
					"Takoyaki are round, fried dough balls filled with diced octopus, tempura scraps, pickled ginger, and green onions. They are cooked in a special molded pan and topped with takoyaki sauce, mayonnaise, aonori (seaweed powder), and bonito flakes.",
				price: "¥ 500",
			},
			{
				dish: "Okonomiyaki",
				content:
					"Okonomiyaki is a savory Japanese pancake made with a batter of flour, egg, and water, mixed with shredded cabbage and various fillings like meat, seafood, or cheese. It is often topped with a special sauce, mayonnaise, and bonito flakes.",
				price: "¥ 850",
			},
		];

		dishes.forEach((element) => {
			const _dishCard = document.createElement("div");
			const _dishTitle = document.createElement("h3");
			const _dish = document.createElement("p");
			const _dishPrice = document.createElement("p");
			_dishCard.classList.add("dish-card");
			_dishTitle.classList.add("dish-title");
			_dishTitle.innerHTML = element.dish;
			_dish.classList.add("dish");
			_dish.textContent = element.content;
			_dishPrice.classList.add("price");
			_dishPrice.textContent = element.price;
			dishContainer.appendChild(_dishCard);
			_dishCard.appendChild(_dishTitle);
			_dishCard.appendChild(_dish);
			_dishCard.appendChild(_dishPrice);
		});
		return dishContainer;
	}

	createTitle();
	createMenu();
};

export { menu };
