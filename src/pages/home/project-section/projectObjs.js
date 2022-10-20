const allProjects = {
	mainProjects: [
		{
			id: 1,
			title: "Personal Website",
			URL: "personal-website",
			languages: ["React", "SASS", "Figma", "Firebase"],
			description: [
				"This is my personal portfolio site made to showcase my completed projects, displaying current skills and abilities, and providing a convenient source to get in contact with me.",
				"Site is a static website, but was made using React to reinforce my knowledge of React. This gave me the opportunity to work with React Router, and Formik for the first time.",
				"Main resources used in the project are React/JavaScript, Figma was used for design, with SASS for site styling. Site was deployed using Firebase.",
			],
			img: [
				"/assets/personal-website-five.PNG",
				"/assets/personal-website-six.PNG",
				"/assets/personal-website-one.PNG",
				"/assets/personal-website-two.PNG",
				"/assets/personal-website-three.PNG",
				"/assets/personal-website-four.PNG",
			],
			wrightUp: {
				projectSummary:
					"Personal website to display projects that I have completed, and a convenient resource for someone to get in contact with me.",
				overview:
					"I made the Website using React and SASS as the main technologies. Site design, layout and mock-ups were self created by me using Figma, with SASS used for the site styling. I utilized React Router to render each project page once a project’s overview link is selected.",
				mainChallenges: [
					"First application that I have completed that has been fully deployed. First application that I have worked with SASS for styling, with a more scalable approach in the CSS structure and class naming.",
				],
				commentsTakeaways:
					"This website did not need to be built with React, but I chose to do so to reinforce my knowledge of React. This allowed me to make a React contact form, and gave me exposure to React Router.",
				completionDate: "October, 2022",
			},
			link: {
				demo: "",
				code: "https://github.com/Jonathan-Evey/Main-Portfolio-Website",
			},
		},
		{
			id: 2,
			title: "BookShelf",
			URL: "bookshelf",
			languages: ["React", "CSS", "Axios"],
			description: [
				"This was a personal project that I made to reinforce my working knowledge of React.",
				"Project is an application where a user can save books to a digital book-shelf. Once added, the user can update each book to show their read status of the book. Users can also add notes, and if the book is marked as read, users can add a review and rating.",
				"Technologies I employed in the application are React, with Axios library, Google Books API and CSS.",
			],
			img: [
				"/assets/book-shelf-two.PNG",
				"/assets/book-shelf-three.PNG",
				"/assets/book-shelf-one.PNG",
				"/assets/book-shelf-four.PNG",
				"/assets/book-shelf-five.PNG",
				"/assets/book-shelf-six.PNG",
			],
			wrightUp: {
				projectSummary:
					"BookShelf is a personal project where a user can find and save books to a digital book-shelf. Once saved to the shelf, users can update each book to include notes, a review, a rating, and the current read status of each book. Project is a single-page application using React to generate, and update the content of the application.",
				overview:
					"Project concept was to incorporate data pulled from an API into an application that lets users add, update and change the data once it has been added and saved by the user. Main functions currently include, searching the shelf for a book by title or author, sorting the books on the shelf by author, title or rating, and filtering the shelf based on read status, and or rating. Application is built with the base React JavaScript, with Axios library for API interactions. All menus, dropdowns and functions are custom built for application, with CSS being used for project styling.",
				mainChallenges: [
					"This project is the first application that I utilized React, using State and Effect to make the application responsive. All menus and drop-down components have been made custom, in place of using a library, to better reinforce my knowledge of React. I used Google books API to pull the data for each book displayed.",
				],
				commentsTakeaways:
					"I did not pre-plan the full functionality of this project, or outline a design before starting work on the project. This leads to each update in features causing a layout and style update. Without a base plan of the project, it has made the scaling of the project more difficult and time consuming, with a lot of time still needed to refactor the applications CSS file.",
				completionDate: "October, 2022",
			},
			link: {
				demo: "https://jonathan-evey.github.io/book-shelf/",
				code: "https://github.com/Jonathan-Evey/book-shelf",
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
				"This was an assignment from The Odin Project used to reinforce knowledge of JS modules and DOM manipulation.",
				"Assignment was to be able to create and save a Todo list. Each list needed to have a title, description, completion due date, and a priority rating. On each list users can add tasks that can be marked complete, or not.",
				"Functionality is controlled with JavaScript, utilizing local storage to save user data. Design and layout created with CSS.",
			],
			img: [
				"/assets/project-manager-six.PNG",
				"/assets/project-manager-three.PNG",
				"/assets/project-manager-one.PNG",
				"/assets/project-manager-two.PNG",
				"/assets/project-manager-four.PNG",
				"/assets/project-manager-five.PNG",
			],
			wrightUp: {
				projectSummary:
					"This project is the Todo List project from The Odin Project - JavaScript Course. Project application is to store and display Todo lists for a user. Each list has a title, description, completion due date and priority. Each list contains a sub-checklist, that you are able to add, edit, make complete or delete.The project is a single-page application that uses JavaScript to generate, and update the content of the application.",
				overview:
					"In place of a Todo list, I updated the application idea to a project manager dashboard. Users can add the project name, description, completion due date, and a project urgency. Once added to the dashboard, users can click on the project to open a full view of that project. From the full view users can add tasks for the project, mark tasks completed, and delete tasks. The project list is sortable by tasks on each project, project urgency, and by completion date. Users can edit the project details, and delete each project. When viewing the tasks, tasks can be filtered by all, open, and completed.",
				mainChallenges: [
					"Project was the first application I made that lets a user add, and update data that gets saved in local storage. That same data is used to generate the display for the user making heavy use of DOM manipulation.",
				],
				commentsTakeaways:
					"Currently is not fully responsive, and will not display properly on small mobile screens. The layout for sorting the projects is a bit confusing and could use a redesign if the application was fully deployed. Currently, the add project and add task pop up windows do not have a close button, and can only be closed with the esc key. When deleting a project or task there is not a confirmation for the user, leaving a higher chance for an accidental deletion. Tasks do not have an option to be updated.",

				completionDate:
					"July, 2022. Additional functionality updates October, 2022",
			},
			link: {
				demo: "https://jonathan-evey.github.io/Project-Manager-Dashboard/",
				code: "https://github.com/Jonathan-Evey/Project-Manager-Dashboard",
			},
		},
		{
			id: 2,
			title: "Restaurant Website",
			URL: "restaurant website",
			languages: ["JavaScript", "CSS", "WebPack"],
			description: [
				"This was an assignment from The Odin Project used to reinforce knowledge of JS modules and DOM manipulation.",
				"Assignment was to build a single page website using JavaScript to re-render DOM-elements. Site requirement was to have multiple pages, without each page having its own HTML index, that renders once a user selects that page from the main navigation.",
				"Website is built using JavaScript, and design and styling was created with CSS. Site was made responsive to accommodate both desktop and mobile views.",
			],
			wrightUp: {
				projectSummary:
					"The Restaurant Page project is from The Odin Project - JavaScript Course. Project is a multi-page website that uses JavaScript to generate the content of the website instead of a different HTML file for each page.",
				overview:
					"I approached this project by making a mockup of the site with just HTML and CSS, and then built out the functionality of the site with JavaScript. At this time I used the HTML files from the mockups, and made each file a template and stored them in a JavaScript module. Once the corresponding page is clicked from the main navigation, the template is inserted after the body element instead of generating each HTML element individually with JavaScript.",
				mainChallenges: [
					"This is the first project I made using WebPack, and JavaScript ES6 modules, to bundle a project's JavaScript files together, giving me the opportunity to learn how to import and export JS files or functions into a different file. I made use of CSS media queries, flex and grid to make the site responsive for mobile view. This was not part of the project's outline, but in a real use case for a restaurant site it would need to be responsive.",
				],
				commentsTakeaways:
					"CSS makes heavy use of individual element class names for styling making it more difficult to scale and update.",
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
				demo: "https://jonathan-evey.github.io/top-restaurant-page/",
				code: "https://github.com/Jonathan-Evey/top-restaurant-page",
			},
		},
	],
};

export default allProjects;
