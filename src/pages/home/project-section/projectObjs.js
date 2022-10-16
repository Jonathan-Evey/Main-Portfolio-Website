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
				"Main resources used in project are React/JavaScript to handle interactions with SASS for site styling.",
				//"Site layout was created using SASS, and is responsive to accommodate both desktop and mobile views",
				"Deployed with Firebase.",
			],
			img: ["/src/assets/test-img.jpg", "/src/assets/test-img-two.jpg"],
			desktopImgs: ["no", "no", "yes", "yes", "no", "no"],
			wrightUp: {
				projectSummary:
					"Personal website to display project I have completed, and a convenient resource for someone to get in contact with me.",
				mainChallenges: [
					"First project that I have fully deployed to the web, and the first time I have made a functional contact form.  First project that I utilized SASS for the site’s main styling.",
				],
				overview:
					"I made the Wedsite using React and SASS as the main technologies. Site design and layout is self created by me, and Figma was used to make the mock-up design files. I utilized React Routs to render each project page once a project overview link is selected.",
				commentsTakeaways:
					"This website did not need to be built with React, but I chose to do so to work on using React. This allowed me to make a contact form React, and gave me exposure to React Routs. Site is deployed using Firebase as a site back-end was not needed.",
				completionDate: "October, 2022",
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
				"Application utility allows a user to save books in a digital book-shelf. Once added, the user can update the book to show if they have read, are reading, or have read the book. If book is marked as read, user can rate the book",
				"Technologies employed in the application are React, with Axios library, Google Books API and CSS",
			],
			img: [
				"/assets/book-shelf-two.PNG",
				"/assets/book-shelf-three.PNG",
				"/assets/book-shelf-one.PNG",
				"/assets/book-shelf-four.PNG",
				"/assets/book-shelf-five.PNG",
				"/assets/book-shelf-six.PNG",
			],
			desktopImgs: ["no", "no", "yes", "yes", "no", "no"],
			wrightUp: {
				projectSummary:
					"BookShelf is a personal project to find and save books to a digital book-shelf. Once saved to the shelf, books can be updated to include notes, a review, a rating, and the current read status. Project is a single-page application using React to generate, and update the content of the application.",
				mainChallenges: [
					"First project that I completed that utilizes React, using state management with State and Effect to make the application responsive. All menus and drop-down components were made custom, in place of using a library, for practice with React. Application is using Google books API to pull the book data that gets displayed.",
				],
				overview:
					"Project idea was to incorporate data pulled from an API into an application that lets users add, update and change data once it has been added and saved by the user. Main functions currently include, searching the shelf by title or author, sorting shelf by author, title or rating, and filtering shelf based on read status, and or rating. Application is built with the base ReactJS, with Axios library for API interactions. All menus, dropdowns and functions are custom built for application. CSS was used for project styling.",
				commentsTakeaways:
					"I did not pre-plan the full functionality of this project, or outline a design before starting work on the project. This has led to updating the layout and style as new features are added to the application, making the scaling of the project more difficult and time consuming.",
				completionDate: "October, 2022",
			},
			link: {
				demo: "https://nighistheend.github.io/book-shelf/",
				code: "https://github.com/NighIsTheEnd/book-shelf",
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
				"/assets/project-manager-six.PNG",
				"/assets/project-manager-three.PNG",
				"/assets/project-manager-one.PNG",
				"/assets/project-manager-two.PNG",
				"/assets/project-manager-four.PNG",
				"/assets/project-manager-five.PNG",
			],
			desktopImgs: ["no", "no", "yes", "yes", "no", "no"],
			wrightUp: {
				projectSummary:
					"Todo List project from The Odin Project - JavaScript Course. Project application is to store and display Todo lists for a user. Each list has a title, description, completion due date and priority. Each list contains a sub-checklist, that you are able to add, edit, make complete or delete each checklist. Project is a single-page application that uses JavaScript to generate, and update the content of the application.",
				mainChallenges: [
					"First project utilizing Object Oriented Programming principles giving the opportunity to learn how to correctly add, update and display data that is being stored as an object. This is my first completed project that takes in data from a user, saves it, and displays it. Project uses local storage JSON to save the application data for the user.",
				],
				overview:
					"I replaced the todo list concept with a project manager application. I made the project list  sortable by task numbers, project priority urgency, and by completion date.  Users can edit the project details, and delete each project (currently, there is no pop-up confirmation to delete a project, which could lead to a stored project being easily deleted on accident by the user). By clicking on a project that project is then displayed, showing a description of the project, and a list of the project's tasks. Users are able to add tasks to the project from this page, and once added, tasks can be marked as completed, or deleted (tasks are not editable at this time, also no deletion confirmation is asked before a task is deleted). Display of tasks can be filtered by all, open, and completed.",
				commentsTakeaways:
					"If application was going to be fully deployed, I would redesign the layout of the sorting options.  Both new project and new task pop-up window do not have a button to close them, the only way to close them is with the escape key. Projects and tasks do not have a confirmation for the user when they are being deleted, leaving a higher chance for a project or task to be accidentally deleted. Tasks do not have an option to be updated. ",

				completionDate:
					"July, 2022. Additional functionality updates October, 2022",
			},
			link: {
				demo: "https://nighistheend.github.io/Project-Manager-Dashboard/",
				code: "https://github.com/NighIsTheEnd/Project-Manager-Dashboard",
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
				overview:
					"I approached this project by making a mockup of the site with just HTML and CSS, and then built out the functionality with JavaScript. At this time I used the HTML files from the mockups and made each file a template and stored them in a JavaScript module. Once the corresponding page is clicked from the main navigation, the template is inserted after the body element instead of generating each HTML element individually in JavaScript. CSS makes heavy use of individual element class names for styling and for a larger project that would not be scalable.",
				commentsTakeaways: "",
				completionDate: "June, 2022. Minor style updates October, 2022",
			},

			img: [
				"/assets/restaurant-page-one.PNG",
				"/assets/restaurant-page-two.PNG",
				"/assets/restaurant-page-three.PNG",
				"/assets/restaurant-page-four.PNG",
				"/assets/restaurant-page-five.PNG",
				"/assets/restaurant-page-six.PNG",
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
