const setUpObserver = () => {
	let eachSection = document.querySelectorAll(".section");

	const mainObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				document
					.querySelector(".main-btn")
					.classList.toggle("show", !entry.isIntersecting);
				document
					.querySelector(".projects-btn")
					.classList.toggle("show", entry.isIntersecting);
			});
		},
		{
			threshold: 0.25,
		}
	);
	mainObserver.observe(eachSection[0]);
	// const projectsObserver = new IntersectionObserver(
	// 	(entries) => {
	// 		entries.forEach((entry) => {
	// 			console.log("enter");
	// 			document
	// 				.querySelector(".projects-btn")
	// 				.classList.toggle("show", !entry.isIntersecting);
	// 		});
	// 	},
	// 	{
	// 		threshold: 0.15,
	// 	}
	// );
	// projectsObserver.observe(eachSection[1]);
	const contactObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				document
					.querySelector(".contact-btn")
					.classList.toggle("show", !entry.isIntersecting);
				document
					.querySelector(".projects-btn")
					.classList.toggle("show", entry.isIntersecting);
			});
		},
		{
			threshold: 0.25,
		}
	);
	contactObserver.observe(eachSection[2]);
};

export default setUpObserver;
