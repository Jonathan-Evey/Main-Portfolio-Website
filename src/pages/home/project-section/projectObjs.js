const allProjects = {
	mainProjects: [
		{
			id: 1,
			title: "Personal Website",
			URL: "personal-website",
			languages: ["React", "SASS", "Figma", "Firebase"],
			description: [
				"This is my personal website made to showcase my current skills and abilities by displaying projects I have completed.",
				"Project is a static website made using React to give me the opportunity to work with React Router to handle page redirection, and Formik to handle the contact form interactions.",
				"Technologies utilized in this project are Figma, used to create the design, React/Javascript with SASS for site layout, styling and functions, with Firebase used to deploy and host.",
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
					"My personal website was made to be a place to showcase my abilities by displaying the projects that I have completed, and be a convenient resource for someone to get in contact with me.",
				overview:
					"Website was made using React as a way to get additional experience with the React framework. This opened up the opportunity to work with React Router for handling page redirection, and Formlik to handle the contact form validation, and form state. I designed the site using Figma to create the design and mock-ups, and I used SASS for the layout and styling of the website. Site was deployed and hosted using Fireship and uses Firestore to store the messages submitted from the contact form.",
				mainChallenges: [
					"First website that I have fully deployed, and set up a database that interacts with a website, through Fireship. I used SASS for the first time in this project, and worked on making my SASS/CSS more scalable by using reusable classes that handle one styling change, and using more individual class names when a larger amount of styling is needed.",
				],
				commentsTakeaways:
					"Website is a static site and did not need to be built with React, but I chose to do so to reinforce my knowledge of React.",
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
				"This is a personal project that I made to reinforce my working knowledge of React.",
				"Project is an application where a user can save books to a digital book-shelf. Main features include, searching the bookshelf by title or author, sorting shelf by author, title or rating, filtering the shelf based on read status, and or rating, and adding or viewing notes and reviews on each book.",
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
					"BookShelf is a single-page application where a user can find and save books to a digital book-shelf. Once saved to the shelf, users can update each book in the following ways: add, edit, and delete notes, add, edit or delete a review, add and update a rating, and show the current read status of each book unread, reading and read.",
				overview:
					"Project concept was to incorporate data pulled from an API into an application that lets users add, update and change the data once it has been added and saved by the user. Application is built with React JavaScript, and uses the Axios library for API interactions. All menus, dropdowns and functions are custom built for application, with CSS being used for project styling.",
				mainChallenges: [
					"This project is the first application that I made utilizing React, and using State and Effect to make the application responsive based on the current state of the book objects. Menu and drop-down components were all made custom, in place of using a library, to better reinforce my knowledge of React.",
				],
				commentsTakeaways:
					"I did not spend the time to pre-plan this project, or outline a design, before starting to work on the functionality of the project. By not pre-planning the project, it has made the scaling of the project more difficult and time consuming, and has led to each update in features causing extra time being spent to update the layout and style. There is a lot of time still needed to refactor the applications CSS file and the project still needs to have user authentication added to allow users to log in and save their data.",
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
				"This project was an assignment from The Odin Project course used to reinforce knowledge of JavaScript modules and DOM manipulation.",
				"Assignment was to make an application where a user can create and save todo lists.  On each list users can add tasks that can be shown as completed, or not. Each list needed to have a title, description, completion due date, and a priority rating.",
				"Functionality is controlled with JavaScript, utilizing local storage to save user data. Design and layout was created with CSS.",
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
					"This project is the Todo List project from The Odin Project - JavaScript Course. Project application is to store and display todo lists added by the user. Each list has a title, description, completion due date and a priority. Each list contains a sub-checklist, that you are able to add, edit, make complete or delete.",
				overview:
					"This project is a single-page application that uses JavaScript to generate, and update the content of the application, with CSS used for styling. In place of a todo list, I updated the application idea to a project manager dashboard. Users can add a project with a name, description, completion due date, and an urgency level. Once added to the dashboard, users can click on the project to open a full view of that project. From the full view, users can add tasks for each project, mark tasks as completed, and delete tasks. The project list is sortable by total tasks on each project, project urgency, and by completion date. Users can edit the project details, and delete each project. When viewing the tasks on each project, tasks can be filtered by all, open, and completed.",
				mainChallenges: [
					"This project uses objects to store the data that is added by the user and was the first application I made that lets a user add, and update data. JavaScript was used to create the HTML elements that display the data added by the user. Application makes heavy use of DOM manipulation to update what is currently being displayed to the user.",
				],
				commentsTakeaways:
					"Currently the project is not fully responsive, and will not display properly on small mobile screens. The layout for sorting the projects is a bit confusing and could use a redesign if the application was to be fully deployed. Currently, the add project and add task pop up windows do not have a close button, and can only be closed with the esc key, and when deleting a project or task there is no confirmation for the user, leaving a higher chance for an accidental deletion. Tasks do not have an option to be updated.",

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
				"This project was an assignment from The Odin Project used to reinforce knowledge of JavaScript modules and DOM manipulation.",
				"Assignment requirement was to build a multi-page website using only one HTML file and use JavaScript to re-render the DOM-elements once a user selects a new page from the main navigation.",
				"Website is built using JavaScript, with CSS used for the design and stylin. Site was made responsive to accommodate both desktop and mobile views.",
			],
			wrightUp: {
				projectSummary:
					"The Restaurant Page project is from The Odin Project - JavaScript Course. Project is a multi-page website that uses JavaScript to generate each page of the website instead of a different HTML file for each page.",
				overview:
					"I approached this project by making a mockup of the site with just HTML and CSS, and then built out the functionality of the site with JavaScript. At the time I made each HTML page  mockup into a template and stored them in a JavaScript module. Once the corresponding page is clicked from the main navigation, the template is inserted after the body element instead of generating each HTML element individually with JavaScript.",
				mainChallenges: [
					"This is the first project I made using WebPack, and JavaScript ES6 modules, to bundle a project's JavaScript files together, giving me the opportunity to learn how to import and export JavaScript files and functions into other files. I made use of CSS media queries, flex and grid to make the site responsive for mobile view. This was not part of the project's outline, but in a real use case for a restaurant site it would need to be responsive.",
				],
				commentsTakeaways:
					"CSS makes heavy use of individual element class names for styling making it more difficult to scale and update if needed.",
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
