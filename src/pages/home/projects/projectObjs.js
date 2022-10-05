const allProjects = {
	mainProjects: [
		{
			id: 1,
			title: "Personal Website",
			URL: "website",
			languages: ["React", "SASS", "JavaScript"],
			description: [
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia odio, tempora illum id, aliquid, labore quas similique suscipit vel nam ab quasi voluptatibus libero cum! Expedita, non? Tempora, impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia odio, tempora illum id, aliquid, labore quas similique suscipit vel nam ab quasi voluptatibus libero cum! Expedita, non? Tempora, impedit!",
			],
			img: ["/src/assets/test-img.jpg", "/src/assets/test-img-two.jpg"],
			link: {
				demo: "",
				code: "",
				projectPage: "",
			},
		},
		{
			id: 2,
			title: "BookShelf",
			URL: "bookshelf",
			languages: ["React", "CSS", "Axios"],
			description: [
				"Personal project where a user can find and save books to a digital bookshelf. The books have a updatable option for if the book is unread, being read, or read.",
				"Site is built with React, and utilized the Axios library.",
				"Book infromation is pull using Google Books API",
				"Design and layout created using CSS. Project design is responsive to accommodate both desktop and mobile views",
			],
			img: ["/src/assets/test-img.jpg", "/src/assets/test-img-two.jpg"],
			link: {
				demo: "",
				code: "",
				projectPage: "",
			},
		},
		{
			id: 3,
			title: "Personal Website",
			URL: "personal-website",
			languages: ["React", "SASS", "Figma", "Firebase"],
			description: [
				"Personal project designed to showcase current projects.",
				"Site is built with React, utilizing React Router for page URL updates, and Vite for the development process.",
				"Design and mock-up by self creacted within Figma.",
				"Site layout was created using SASS, and is responsive to accommodate both desktop and mobile views",
				"Deployed with Firebase",
			],
			img: ["/src/assets/test-img.jpg", "/src/assets/test-img-two.jpg"],
			link: {
				demo: "",
				code: "https://github.com/NighIsTheEnd/Main-Portfolio-Website",
				projectPage: "",
			},
		},
	],
	smallProjects: [
		{
			id: 1,
			title: "Project Manager",
			URL: "project-manager",
			languages: ["JavaScript", "CSS", "WebPack"],
			description: [
				"Project was an assignment from The Odin Project course.",
				"Project is built with vanilla JavaScript to create the differant Project and Task elements, and controls user interface.",
				"Design and layout created using CSS.",
				"Project utilizes local storage to save user data",
			],
			img: ["/src/assets/test-img.jpg", "/src/assets/test-img-two.jpg"],
			link: {
				demo: "https://nighistheend.github.io/Project-Manager-Dashboard/",
				code: "https://github.com/NighIsTheEnd/Project-Manager-Dashboard",
				projectPage: "",
			},
		},
		{
			id: 2,
			title: "Restaurant Website",
			URL: "restaurant website",
			languages: ["JavaScript", "CSS", "WebPack"],
			description: [
				"Project was an assignment from The Odin Project course.",
				"Site is built with vanilla JavaScript to generate each pages within the restaurant website, and controls all user interations.",
				"Design and layout created by me, with styling done using CSS.",
				"Site is responsive to accommodate both desktop and mobile views",
			],
			img: [
				"/src/assets/restaurant-one.PNG",
				"/src/assets/restaurant-two.PNG",
				"/src/assets/test-img.jpg",
				"/src/assets/test-img-two.jpg",
			],
			link: {
				demo: "https://nighistheend.github.io/top-restaurant-page/",
				code: "https://github.com/NighIsTheEnd/top-restaurant-page",
				projectPage: "",
			},
		},
	],
};

export default allProjects;
