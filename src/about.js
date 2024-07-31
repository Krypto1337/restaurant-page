const about = () => {
	const content = document.getElementById("content");
	content.innerHTML = "";

	function createAbout() {
		const aboutDiv = document.createElement("div");
		aboutDiv.classList.add("about-container");
		content.append(aboutDiv);
		aboutDiv.appendChild(createContactCard());
	}

	function createTitle() {
		const title = document.createElement("div");
		title.classList.add("title");
		title.innerHTML = "Contact Us";
		content.append(title);
	}

	function createContactCard() {
		const contactContainer = document.createElement("div");
		contactContainer.classList.add("contact-container");
		const contacts = [
			{
				name: "René B.",
				tel: "123-456-1337",
				mail: "RealMail@totallyreal.com",
				position: "Owner",
			},
			{
				name: "Zlyx",
				tel: "133-765-4321",
				mail: "RealMail2@totallyreal.com",
				position: "Chef",
			},
		];

		contacts.forEach((element) => {
			const _contactCard = document.createElement("div");
			const _contactPhone = document.createElement("p");
			const _contactMail = document.createElement("p");
			const _contactPosition = document.createElement("p");
			const _contactName = document.createElement("p");
			_contactCard.classList.add("contact-card");
			_contactPhone.classList.add("contact-phone");
			_contactPhone.textContent = element.tel;
			_contactMail.classList.add("contact-mail");
			_contactMail.textContent = element.mail;
			_contactPosition.classList.add("contact-position");
			_contactPosition.textContent = element.position;
			_contactName.classList.add("contact-name");
			_contactName.textContent = element.name;
			contactContainer.appendChild(_contactCard);
			_contactCard.appendChild(_contactName);
			_contactCard.appendChild(_contactPosition);
			_contactCard.appendChild(_contactPhone);
			_contactCard.appendChild(_contactMail);
		});
		return contactContainer;
	}
	createTitle();
	createAbout();
};

export { about };
