const home = () => {
	const content = document.getElementById("content");

	function createTitle() {
		const title = document.createElement("div");
		title.classList.add("title");
		title.textContent = "Taki's Bar";
		content.appendChild(title);
	}
	function createReview() {
		const reviewContainer = document.createElement("div");
		const review = document.createElement("p");
		const customer = document.createElement("p");
		reviewContainer.classList.add("review-container");
		review.classList.add("review-content");
		customer.classList.add("customer");
		review.innerHTML =
			"Taki's Bar has one of the beast Takoyaki in Japan! The atmosphere is amazing and you have a stunning view over the entire skyline of Tokyo!";
		review.innerHTML +=
			"The customer service clearly makes you feel special! This is this kind of place where you wanna return to over and over again!";
		customer.innerHTML = "René B.";
		reviewContainer.appendChild(review);
		reviewContainer.appendChild(customer);
		content.appendChild(reviewContainer);
	}

	function createOpeningHours() {
		const hoursContainer = document.createElement("div");
		const days = [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		];
		days.forEach((element) => {
			const p = document.createElement("p");
			p.classList.add(element);
			p.textContent = `${element}: 05:00 pm - 02:00 am`;
			hoursContainer.appendChild(p);
		});
		content.appendChild(hoursContainer);
	}

	createTitle();
	createReview();
	createOpeningHours();
};

export { home };
