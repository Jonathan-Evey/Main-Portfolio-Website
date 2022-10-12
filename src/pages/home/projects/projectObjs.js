const allProjects = {
	mainProjects: [
		{
			id: 1,
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
			desktopImgs: ["no", "no", "yes", "yes", "no", "no"],
			wrightUp: {
				projectSummary: "",
				mainChallenges: [],
				Overview: "",
				completionDate: "",
			},
			link: {
				demo: "",
				code: "https://github.com/NighIsTheEnd/Main-Portfolio-Website",
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
			desktopImgs: ["no", "no", "yes", "yes", "no", "no"],
			wrightUp: {
				projectSummary:
					"BookShelf application is a personal project. Project application for a user to find and save books to a digital book shelf. Once saved, the user can update books to show their current read status, add notes, a review and give a zero to five rating. Project is a single-page application using React to generate, and update the content of the application.",
				mainChallenges: [
					"First project that utilizes React, while using State and Effect to make the application responsive, with state management getting passed to different parts of the application.",
					"Application is using Google books API to pull the book data that gets displayed.",
				],
				Overview:
					"Project idea was to incorporate data pulled from an API into an application that lets users add, update and change data once it has been added and saved by the user. Main functions currently include, searching the book shelf for a book by key word in the title or author, sorting shelf by author, title or rating, filter shelf based on read status, and or rating. Application is built with the base ReactJS, with Axios library for API interactions. All menus, dropdowns and functions are custom built for application.",
				completionDate: "October, 2022",
			},
			link: {
				demo: "https://nighistheend.github.io/book-shelf/",
				code: "https://github.com/NighIsTheEnd/book-shelf",
				projectPage: "",
			},
		},
		// {
		// 	id: 3,
		// 	title: "Personal Website",
		// 	URL: "website",
		// 	languages: ["React", "SASS", "JavaScript"],
		// 	description: [
		// 		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia odio, tempora illum id, aliquid, labore quas similique suscipit vel nam ab quasi voluptatibus libero cum! Expedita, non? Tempora, impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia odio, tempora illum id, aliquid, labore quas similique suscipit vel nam ab quasi voluptatibus libero cum! Expedita, non? Tempora, impedit!",
		// 	],
		// 	img: ["/src/assets/test-img.jpg", "/src/assets/test-img-two.jpg"],
		// 	desktopImgs: ["no", "no", "yes", "yes", "no", "no"],
		// 	wrightUp: {
		// 		projectSummary: "",
		// 		mainChallenges: [],
		// 		Overview: "",
		// 		completionDate: "",
		// 	},
		// 	link: {
		// 		demo: "",
		// 		code: "",
		// 		projectPage: "",
		// 	},
		// },
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
			wrightUp: {
				projectSummary:
					"Todo List project from The Odin Project - JavaScript Course. Project application is to store and display Todo lists for a user. Each list has a title, description, completion due date and priority. Each list contains a sub-checklist, that you are able to add, edit, make complete or delete each checklist. Project is a single-page application that uses JavaScript to generate, and update the content of the application.",
				mainChallenges: [
					"First project utilizing Object Oriented Programming principles giving the opportunity to learn how to correctly add, update and display data that is being stored as an object. Also is my first project that takes in data from a user, saves it, and displays it.",
					"Project uses local storage JSON to save the application data for the user.",
				],
				Overview:
					"I replaced the todo list concept with a project manager application. I made the project list  sortable by task numbers, project priority urgency, and by completion date.  Users can edit the project details, and delete each project (currently, there is no pop-up confirmation to delete a project, which could lead to a stored project being easily deleted on accident by the user). By clicking on a project that project is then displayed, showing a description of the project, and a list of the project's tasks. Users are able to add tasks to the project from this page, and once added, tasks can be marked as completed, or deleted (tasks are not editable at this time, also no deletion confirmation is asked before a task is deleted). Display of tasks can be filtered by all, open, and completed.",
				completionDate:
					"July, 2022. Additional functionality updates October, 2022",
			},
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
				"Assignment was to built a WebPage using JavaScript to re-render DOM-elements. Once a user selects a new page from the main navigation, the new page will render using JavaScript without rendering a new html index.",
				"Site is built with JavaScript. Design and styling done using CSS.",
				"Site is responsive to accommodate both desktop and mobile views.",
			],
			desktopImgs: ["yes", "no", "yes", "no", "yes", "no"],
			wrightUp: {
				projectSummary:
					"Restaurant Page project from The Odin Project - JavaScript Course. Project is a multi-page website that uses JavaScript to generate the content of the website instead of a HTML file for each page.",
				mainChallenges: [
					"This is the first project I made using WebPack to bundle a project's JavaScript files together, giving me the opportunity to learn how to import and export a JS file or function to a different file.",
					"First project that incorporates JavaScript ES6 modules and immediately invoked function expressions.",
					"I made use of CSS media queries, flex and grid to make the site responsive. This was not part of the project's outline, but from my own experience a restaurant's website is visited frequently from a mobile device, and in a real use case the site would need to be responsive.",
				],
				Overview:
					"I approached this project by making a mockup of the site with just HTML and CSS, and then built out the functionality with JavaScript. At this time I used the HTML files from the mockups and made each file a template and stored them in a JavaScript module. Once the corresponding page is clicked from the main navigation, the template is inserted after the body element instead of generating each HTML element individually in JavaScript. CSS makes heavy use of individual element class names for styling and for a larger project that would not be scalable.",
				completionDate: "June, 2022. Minor style updates October, 2022",
			},

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
