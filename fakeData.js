// autox-
// https://i.ibb.co/2FCq3qn/auto-X-short.jpg
// https://i.ibb.co/LnfHs1t/autox-1.png
// https://i.ibb.co/H4ZWcxF/autox-2.png
// https://i.ibb.co/smhH4MG/autox-3.png

// world tour-
// https://i.ibb.co/3rtjLvZ/world-tour-short.jpg
// https://i.ibb.co/z5z18m7/world-tour-1.png
// https://i.ibb.co/M5jzN9P/world-tour-2.png
// https://i.ibb.co/Pj4TZfL/world-tour-3.png

// silver gym-
// https://i.ibb.co/GMbtGnp/silver-gym-short.jpg
// https://i.ibb.co/vkJbrNy/silver-gym-1.png
// https://i.ibb.co/k6S9ngL/silver-gym-2.png
// https://i.ibb.co/1Lgq7Gh/silver-gym-3.png

const data = [
    {
        id: 1,
        projectName: "autoX- The Online Bike Store",
        shortImg: 'https://i.ibb.co/2FCq3qn/auto-X-short.jpg',
        technologies: 'CSS, React, Node.js, Express, MongoDB, Bootstrap5, Heroku, Firebase,Authentication, Firebase Deploy.',
        liveSite: 'https://auto-x-work-12.web.app/',
        clientCode: 'https://github.com/khshakilahamed/auto-x-client-site-work-12',
        serverCode: 'https://github.com/khshakilahamed/auto-x-server-site-work-12',
        imgDetails1: {
            img: 'https://i.ibb.co/LnfHs1t/autox-1.png',
            details: ['This is the home page. Where a user can see the Navbar., Banner, Offered Brands, Bikes, Customer Reviews, and the Footer.', 'From the home page, a user can order a bike or can see the all bikes to click the Explore button on the navbar.', 'A user also can goes the Dashboard.', 'When a user goes to the Dashboard, then the user can see the My Orders, Make Payment, Review, and Logout.', 'Similarly, When an admin goes to the Dashboard, then the admin can see some nested routes like- Manage Orders, Manage Products, Add a product, Make Admin, and Logout.']
        },
        imgDetails2: {
            img: 'https://i.ibb.co/H4ZWcxF/autox-2.png',
            details: ['When a user wants to see all bikes, then the user easily can see the all bike to click on the explore.', 'Here, the user can find the search bar, through the search bar the user can search a bike', 'Also a user orders a bike from here.']
        },
        imgDetails3: {
            img: 'https://i.ibb.co/smhH4MG/autox-3.png',
            details: ['This is the Dashboard of an admin. A normal user can not enter here.', 'When an admin login, then the admin will be about to find out some nested out like- Manage Orders, Manage Products, Add a Product, Make Admin.', 'Manage orders- Through this route, the user can see the orders of all users and the admin can delete the order or can approve the order.']
        }
    },
    {
        id: 2,
        projectName: "WorldTourBD- The Travel Agency",
        shortImg: 'https://i.ibb.co/3rtjLvZ/world-tour-short.jpg',
        technologies: 'CSS, React, Node.js, Express, MongoDB, Bootstrap5, Heroku, Firebase,Authentication, Firebase Deploy.',
        liveSite: 'https://world-tour-bd-work-11.web.app/',
        clientCode: 'https://github.com/khshakilahamed/world-tour-bd-work-11',
        serverCode: 'https://github.com/khshakilahamed/world-tour-bd-work-11-server',
        imgDetails1: {
            img: 'https://i.ibb.co/z5z18m7/world-tour-1.png',
            details: ['This is the home page or landing page of this website', 'A user can see the Home and About on the navbar without login. A can be login when the user clicks on login button which is on the navbar.', 'When a user will be logged in, then the user can find some more routes like- My Orders, Manage All Orders, All New Service', 'On this page, the user can see the Services,']
        },
        imgDetails2: {
            img: 'https://i.ibb.co/M5jzN9P/world-tour-2.png',
            details: ['When a user wants to see details of a service, then the user can click on the see more button and goes to another page.', 'When the user arrived at the details page then the user can see the big picture, package tile, price of the package, description, and the contact section.']
        },
        imgDetails3: {
            img: 'https://i.ibb.co/Pj4TZfL/world-tour-3.png',
            details: ['The About page-', 'The user can see the short detail of the agency', 'The agency company commitment etc.'],
        }
    },
    {
        id: 3,
        projectName: "Silver GYM- The Gym Website",
        shortImg: 'https://i.ibb.co/GMbtGnp/silver-gym-short.jpg',
        technologies: 'React, CSS, Bootstrap5, Firebase Authentication, Firebase Deploy.',
        liveSite: 'https://silver-bd-gym-assignment-10.web.app/',
        clientCode: 'https://github.com/khshakilahamed/silver-bd-gym-work-10',
        imgDetails1: {
            img: 'https://i.ibb.co/vkJbrNy/silver-gym-1.png',
            details: ['First of all, when a user visits the website can see some major sections like- Benefits of Gym, Services, Packages, Trainers', 'If a user wants to see more details/ more services/ more package without login then the user will reach the login section. Cause these sections are private. The user needs to login then the user goes to those sections.']
        },
        imgDetails2: {
            img: 'https://i.ibb.co/k6S9ngL/silver-gym-2.png',
            details: ['The login page- The user can easily register here with email and password then easily can log in the website.', 'On the other hand, the can login with Google, Facebook and GitHub', 'After logging in, the user can see the logout button on the right side of the navbar. To click this button user gets to log out from the website.']
        },
        imgDetails3: {
            img: 'https://i.ibb.co/1Lgq7Gh/silver-gym-3.png',
            details: ['Now, the Blog page.', 'Here are some blogs about our health. To read these blogs, humans could be careful about their health and how could be healthy.'],
        }
    },
]