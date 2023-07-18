const allProjects = {
	mainProjects: [
		{
			id: 1,
			title: 'Client Website',
			URL: 'client-website',
			languages: [
				'Node.js',
				'express.js',
				'JavaScript',
				'SASS',
			],
			description: [
				'The website was created as a platform for an individual to showcase their diverse range of art styles and mediums.',
				"The website was built using pug templating with JavaScript for web page interactions. Express, in conjunction with Node.js, handles the page routing. The site's design was personally crafted, and SASS was employed for styling to ensure an appealing and cohesive visual aesthetic. The website is hosted using fly.io.",
				'Furthermore, the initial framework of the website allows for the potential addition of a backend using MongoDB. This would enable the site owner to incorporate a storefront that showcases available products, including details such as quantity, price, and descriptions.',
			],
			img: [
				'/assets/client-site-one.PNG',
				'/assets/client-site-two.PNG',
				'/assets/client-site-three.PNG',
				'/assets/client-site-four.PNG',
				'/assets/client-site-five.PNG',
				'/assets/client-site-six.PNG',
			],
			wrightUp: {
				projectSummary:
					'The website was developed to serve as a comprehensive platform for an individual artist to showcase their diverse range of art mediums and styles. Its primary purpose is to provide a convenient and visually appealing space to exhibit a large collection of their artworks.',
				overview:
					"This custom-designed website is tailored to meet the specific needs of the artist. The landing page offers a brief introduction to the artist, highlighting the different styles and mediums they work with. A dedicated gallery page allows for easy and quick browsing of the artist's various artworks. Additionally, a contact page is provided to enable seamless communication between visitors and the artist. The main design of the website was created by me, with updates and requests incorporated based on the artist's preferences, and SASS was utilized for the styling. The website's HTML files are rendered using pug templating, while JavaScript is employed to enhance user interactions and improve the overall user experience. Page routing is managed by Express in conjunction with Node.js. Hosting of the website is done through fly.io.",
				mainChallenges: [
					"One notable achievement of this project was the successful utilization of a templating engine to generate the HTML pages, coupled with express.js for efficient page routing. Additionally, this is my first time integrating SMTP2GO to enabled email delivery from the contact form to the artist's email address.",
				],
				commentsTakeaways:
					'During the development process, I encountered challenges stemming from incomplete component implementation, which required backtracking to conduct accessibility audits and updates. Moving forward, fully completing each component would mitigate those setbacks.',
				completionDate: 'June, 2023',
			},
			link: {
				demo: 'https://artbylynn.com/',
				code: 'https://github.com/Jonathan-Evey/top-inventory-application',
			},
		},
		{
			id: 2,
			title: 'Portfolio Website',
			URL: 'portfolio-website',
			languages: ['React', 'SASS', 'Figma', 'Firebase'],
			description: [
				'This is my personal website created to showcase my current skills and abilities by displaying the projects I have completed.',
				'The project is a static website built using React. I chose to use React because it allowed me to work with React Router, which handles page redirection, and Formik, which manages the interactions of the contact form.',
				"I utilized Figma to design the website's visual layout. For the implementation, I used React and JavaScript, along with SASS for site styling and layout. To deploy and host the website, I leveraged the capabilities of Firebase.",
			],
			img: [
				'/assets/personal-website-five.PNG',
				'/assets/personal-website-six.PNG',
				'/assets/personal-website-one.PNG',
				'/assets/personal-website-two.PNG',
				'/assets/personal-website-three.PNG',
				'/assets/personal-website-four.PNG',
			],
			wrightUp: {
				projectSummary:
					'My personal website serves as a platform to showcase my abilities by displaying the projects I have completed, while also providing a convenient means for people to get in touch with me.',
				overview:
					'The website was developed using React to gain additional experience with the React framework. This allowed me to explore and utilize React Router for seamless page redirection. Moreover, I employed Formik to handle contact form validation and form state management. Figma was used for the website design and mock-ups. SASS was chosen for its flexibility and used for efficient layout and styling. To deploy and host the website, I utilized Fireship and integrated Firestore to store messages submitted through the contact form.',
				mainChallenges: [
					'This project marked the first website I fully deployed and established a database interaction through Fireship. I also embraced SASS for the first time, striving to create more scalable code by employing reusable classes for specific styling changes and using component specific class names for more extensive styling requirements.',
				],
				commentsTakeaways:
					'Although a static site could have been built without React, I intentionally chose to utilize React to solidify my understanding of the framework. Through this project, I gained valuable experience in leveraging React Router, Formik, and SASS, further expanding my skills as a developer.',
				completionDate: 'October, 2022',
			},
			link: {
				demo: '',
				code: 'https://github.com/Jonathan-Evey/Main-Portfolio-Website',
			},
		},
		{
			id: 3,
			title: 'BookShelf',
			URL: 'bookshelf',
			languages: ['React', 'CSS', 'Axios'],
			description: [
				'The project is a versatile application for creating and managing a digital bookshelf. It enables users to search, sort, and filter the bookshelf by title, author, or rating. Additionally, users can easily add, view, and manage notes and reviews for each book, providing a comprehensive book management experience.',
				"React served as the core framework, enabling me to create reusable components and manage the application's state effectively. I utilized the Axios library to handle API requests,  integrating Google Books API to fetch book information. Additionally, CSS was used to style and enhance the user interface of the application.",
				'By implementing this project, I aimed to further my skills in React development while creating a practical application for managing a digital bookshelf.',
			],
			img: [
				'/assets/book-shelf-two.PNG',
				'/assets/book-shelf-three.PNG',
				'/assets/book-shelf-one.PNG',
				'/assets/book-shelf-four.PNG',
				'/assets/book-shelf-five.PNG',
				'/assets/book-shelf-six.PNG',
			],
			wrightUp: {
				projectSummary:
					'BookShelf is a single-page application designed to enable users to discover and save books to a digital bookshelf. It offers various functionalities, including adding, editing, and deleting notes; adding, editing, or deleting reviews; assigning and updating ratings; and tracking the read status of each book (unread, reading, and read).',
				overview:
					'The project aimed to integrate data from an API into an application that empowers users to manage and modify the saved book data. The application was developed using React JavaScript and leveraged the Axios library for seamless API interactions. All menus, dropdowns, and functions were custom-built to tailor the application to specific requirements, while CSS was utilized for visually appealing project styling.',
				mainChallenges: [
					'This project served as my introduction to building applications with React, allowing me to explore the implementation of state and effect hooks to make the application responsive based on the current state of the book objects. Creating custom menu and dropdown components instead of relying on existing libraries further solidified my understanding of React.',
				],
				commentsTakeaways:
					"One aspect I learned from this project is the importance of pre-planning and outlining the design before diving into the functionality. The lack of pre-planning made scaling the project more challenging and time-consuming, as each feature update required additional time for layout and style adjustments. There is still significant work required to refactor the application's CSS file, and future plans include implementing user authentication to allow users to log in and save their data securely.",
				completionDate: 'October, 2022',
			},
			link: {
				demo: 'https://jonathan-evey.github.io/book-shelf/',
				code: 'https://github.com/Jonathan-Evey/book-shelf',
			},
		},
	],
	smallProjects: [
		{
			id: 1,
			title: 'Project Manager',
			URL: 'project-manager',
			languages: ['JavaScript', 'CSS', 'WebPack'],
			description: [
				'This project served as an assignment in The Odin Project course, providing an opportunity to strengthen my understanding of JavaScript modules and DOM manipulation.',
				'The assignment entailed creating an application that allows users to create and save todo lists. Within each list, users can add tasks that can be marked as completed or not. Furthermore, each list was required to have a title, description, completion due date, and a priority rating.',
				'To achieve the desired functionality, JavaScript played a pivotal role. It facilitated the control of various actions within the application, while local storage was utilized to persist user data. Additionally, the design and layout of the application were crafted using CSS, ensuring a visually appealing and user-friendly interface.',
			],
			img: [
				'/assets/project-manager-six.PNG',
				'/assets/project-manager-three.PNG',
				'/assets/project-manager-one.PNG',
				'/assets/project-manager-two.PNG',
				'/assets/project-manager-four.PNG',
				'/assets/project-manager-five.PNG',
			],
			wrightUp: {
				projectSummary:
					'The Todo List project from The Odin Project - JavaScript Course is a comprehensive application designed to store and display user-generated todo lists. Each list consists of a title, description, completion due date, and priority level. Additionally, each list contains a sub-checklist where users can add, edit, mark as complete, or delete tasks.',
				overview:
					'This single-page application utilizes JavaScript to dynamically generate and update the content while CSS is used for styling. In a slight modification to the original concept, the application has been transformed into a project manager dashboard. Users can create projects with names, descriptions, completion due dates, and urgency levels. The dashboard allows users to view and interact with their projects, including adding tasks, marking tasks as completed, and deleting tasks. The project list can be sorted by total tasks, project urgency, and completion date. Users have the ability to edit project details and delete projects. The task view within each project provides filtering options such as displaying all tasks, open tasks, or completed tasks.',
				mainChallenges: [
					'One significant achievement of this project is the implementation of object-oriented programming principles to store and manage user-generated data. This application marks my first experience in creating an application that enables users to add and update data. JavaScript is extensively used to dynamically generate HTML elements for displaying user data. The application relies heavily on DOM manipulation to ensure a seamless user experience.',
				],
				commentsTakeaways:
					'While the project is functional, there are areas that require further improvement. The application is not fully responsive and may not display optimally on smaller screens. The layout for sorting projects could benefit from redesigning for improved clarity. The add project and add task pop-up windows lack a close button, and the absence of a confirmation prompt when deleting projects or tasks, may lead to accidental deletions. Additionally, the ability to update tasks is currently missing. These aspects provide opportunities for further development and enhancement of the application.',

				completionDate:
					'July, 2022. Additional functionality updates October, 2022',
			},
			link: {
				demo: 'https://jonathan-evey.github.io/Project-Manager-Dashboard/',
				code: 'https://github.com/Jonathan-Evey/Project-Manager-Dashboard',
			},
		},
		{
			id: 2,
			title: 'Restaurant Website',
			URL: 'restaurant website',
			languages: ['JavaScript', 'CSS', 'WebPack'],
			description: [
				'This project was assigned as part of The Odin Project to strengthen my understanding of JavaScript modules and DOM manipulation.',
				'The requirement of the assignment was to construct a multi-page website using a single HTML file and utilize JavaScript to dynamically update the DOM elements whenever a user selects a different page from the main navigation.',
				'For the implementation, JavaScript manages the rendering of the DOM elements based on user interactions. CSS was employed to design and style the website, ensuring an aesthetically pleasing and visually coherent experience. Additionally, the website was made responsive to provide optimal viewing on both desktop and mobile devices.',
			],
			wrightUp: {
				projectSummary:
					'The Restaurant Page project, part of The Odin Project - JavaScript Course, involves creating a multi-page website where JavaScript is used to generate each page dynamically instead of having separate HTML files for each page.',
				overview:
					"For this project, I initially created a mockup of the website using HTML and CSS. Then, I focused on implementing the site's functionality using JavaScript. I transformed each HTML page mockup into a template and stored them in a JavaScript module. When a corresponding page is selected from the main navigation, the template is inserted after the body element, eliminating the need to generate each HTML element individually with JavaScript.",
				mainChallenges: [
					"One notable achievement of this project was the utilization of WebPack and JavaScript ES6 modules to bundle the project's JavaScript files together. This allowed me to learn how to efficiently import and export JavaScript files and functions between different modules. To ensure responsiveness, I incorporated CSS media queries, flexbox, and grid to adapt the site for mobile views. While not explicitly outlined in the project, responsiveness is crucial for a real restaurant website.",
				],
				commentsTakeaways:
					'While working on the project, I noticed that the CSS heavily relied on individual element class names for styling, which could make scaling and updates challenging if needed. To enhance maintainability, it would be beneficial to explore more scalable CSS approaches, such as utilizing reusable components or adopting a CSS preprocessor like SASS.',
				completionDate:
					'June, 2022. Minor style updates October, 2022',
			},

			img: [
				'/assets/restaurant-page-one.PNG',
				'/assets/restaurant-page-two.PNG',
				'/assets/restaurant-page-three.PNG',
				'/assets/restaurant-page-four.PNG',
				'/assets/restaurant-page-five.PNG',
				'/assets/restaurant-page-six.PNG',
			],
			link: {
				demo: 'https://jonathan-evey.github.io/top-restaurant-page/',
				code: 'https://github.com/Jonathan-Evey/top-restaurant-page',
			},
		},
	],
};

export default allProjects;
