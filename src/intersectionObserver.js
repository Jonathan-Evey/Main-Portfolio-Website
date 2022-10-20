const setUpObserver = () => {
	let eachSection = document.querySelectorAll(".section");

	const mainObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					document
						.querySelector(".main-btn")
						.classList.remove("show");
					document
						.querySelector(".contact-btn")
						.classList.add("show");
					document
						.querySelector(".projects-btn")
						.classList.add("show");
				}
				if (!entry.isIntersecting) {
					document.querySelector(".main-btn").classList.add("show");
					document
						.querySelector(".projects-btn")
						.classList.remove("show");
				}
			});
		},
		{
			threshold: 0.25,
		}
	);
	mainObserver.observe(eachSection[0]);
	const contactObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					document
						.querySelector(".contact-btn")
						.classList.remove("show");
					document
						.querySelector(".projects-btn")
						.classList.add("show");
				}
				if (
					!entry.isIntersecting &&
					document
						.querySelector(".main-btn")
						.classList.contains("show")
				) {
					document
						.querySelector(".contact-btn")
						.classList.add("show");
					document
						.querySelector(".projects-btn")
						.classList.remove("show");
				}
			});
		},
		{
			threshold: 0.25,
		}
	);
	contactObserver.observe(eachSection[2]);
};

export default setUpObserver;
