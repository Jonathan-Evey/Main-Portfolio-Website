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
				"Personal project",
				//"where a user can find and save books to a digital bookshelf. The books have a updatable option for if the book is unread, being read, or read.",
				"Application utility allows a user to save books in a digital book-shelf. Once added, the user can update the book to show if they have read, are reading, or have read the book. If book is marked as read, user can rate the book",
				"Technologies employed in the application are React, with Axios library, Google Books API and CSS",
				//"Site is built with React, and utilized the Axios library.",
				//"Book infromation is pull using Google Books API",
				//"Design and layout created using CSS. Project design is responsive to accommodate both desktop and mobile views",
			],
			img: ["/src/assets/test-img.jpg", "/src/assets/test-img-two.jpg"],
			link: {
				demo: "https://nighistheend.github.io/book-shelf/",
				code: "https://github.com/NighIsTheEnd/book-shelf",
				projectPage: "",
			},
		},
		{
			id: 3,
			title: "Personal Website",
			URL: "personal-website",
			languages: ["React", "SASS", "Figma", "Firebase"],
			description: [
				"Personal project",
				"Project utilization is to easily showcase completed projects, displaying current skills and abilities, and providing a convenient source to get in contact.",
				// "Site is built with React, utilizing React Router for page URL updates, and Vite for the development process.",
				// "Design and mock-up by self creacted within Figma.",
				"Main resources used in project React/JavaScript to handle interactions with SASS for site styling.",
				//"Site layout was created using SASS, and is responsive to accommodate both desktop and mobile views",
				"Deployed with Firebase.",
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
				"Project is an assignment from The Odin Project course.",
				"Assignment was to creat and save a Todo list. Each Todo needed to have a title, description, completion due date, and a priority rating. On each Todo user can add tasks that can be maked complete, or not.",
				"Functionality is controlled with JavaScript.  Design and layout created with CSS.",
				"Project utilizes local storage to save user data.",
			],
			img: [
				"/src/assets/project-manager-six.PNG",
				"/src/assets/project-manager-three.PNG",
				"/src/assets/project-manager-one.PNG",
				"/src/assets/project-manager-two.PNG",
				"/src/assets/project-manager-four.PNG",
				"/src/assets/project-manager-five.PNG",
			],
			desktopImgs: ["no", "no", "yes", "yes", "no", "no"],
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
				"Project is an assignment from The Odin Project course.",
				"Assignment was to built a site using JavaScript to render DOMelements. Once a user selects a new page from the main navigation, new page will render in without linking to a new html index.",
				"Site is built with JavaScript. Design and styling done using CSS.",
				"Site is responsive to accommodate both desktop and mobile views.",
			],
			wrightUp: [],
			img: [
				"/src/assets/restaurant-one.PNG",
				"/src/assets/restaurant-two.PNG",
				"/src/assets/restaurant-three.PNG",
				"/src/assets/restaurant-four.PNG",
				"/src/assets/restaurant-five.PNG",
				"/src/assets/restaurant-six.PNG",
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
