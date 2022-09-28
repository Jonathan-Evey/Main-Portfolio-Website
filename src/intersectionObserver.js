const setUpObserver = () => {
	let eachSection = document.querySelectorAll(".section");
	const mainObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				document
					.querySelector(".main-btn")
					.classList.toggle("show", !entry.isIntersecting);
			});
		},
		{
			threshold: 0.25,
		}
	);
	mainObserver.observe(eachSection[0]);

	const projectsObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				document
					.querySelector(".projects-btn")
					.classList.toggle("show", !entry.isIntersecting);
			});
		},
		{
			rootMargin: "35% 0% 0% 0%",
			threshold: 0.25,
		}
	);
	projectsObserver.observe(eachSection[1]);
	const contactObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				document
					.querySelector(".contact-btn")
					.classList.toggle("show", !entry.isIntersecting);
			});
		},
		{
			threshold: 0.6,
		}
	);
	contactObserver.observe(eachSection[2]);
};

export default setUpObserver;
