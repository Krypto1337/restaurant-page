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
		const review_inner = document.createElement("div");
		const review = document.createElement("p");
		const customer = document.createElement("p");
		reviewContainer.classList.add("review-container");
		review_inner.classList.add("review-inner");
		reviewContainer.appendChild(review_inner);
		review.classList.add("review-content");
		customer.classList.add("customer");
		review.innerHTML =
			"Taki's Bar has one of the beast Takoyaki in Japan! The atmosphere is amazing and you have a stunning view over the entire skyline of Tokyo!";
		review.innerHTML +=
			" The customer service clearly makes you feel special! This is this kind of place where you wanna return to over and over again.";
		customer.innerHTML = "René B.";
		review_inner.appendChild(review);
		review_inner.appendChild(customer);
		content.appendChild(reviewContainer);
	}

	function createOpeningHours() {
		const hoursContainer = document.createElement("div");
		const hoursTitle = document.createElement("h1");
		hoursTitle.textContent = "Opening hours";
		hoursContainer.classList.add("hoursContainer");
		hoursContainer.appendChild(hoursTitle);
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
			p.classList.add("days");
			if (element === "Wednesday" || element === "Thursday") {
				p.textContent = `${element}:\t05:00 pm - 02:00 am`;
			} else {
				p.textContent = `${element}:\t\t05:00 pm - 02:00 am`;
			}
			hoursContainer.appendChild(p);
		});
		content.appendChild(hoursContainer);
	}

	createTitle();
	createReview();
	createOpeningHours();
};

export { home };
