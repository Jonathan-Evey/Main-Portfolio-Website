const setUpObserver = () => {
	let projectsSection = document.querySelectorAll(".section");
	const observer = new IntersectionObserver(
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

	observer.observe(projectsSection[0]);
};

export default setUpObserver;
