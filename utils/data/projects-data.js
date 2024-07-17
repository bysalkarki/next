import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Tour and Travel Aggregator Site - Bookmundi",
    description:
      "I contributed to the development of Bookmundi, a comprehensive tour and travel aggregator site. My work involved backend development, including booking functionalities and chat features. I utilized a range of technologies to build and integrate features, ensuring smooth user experiences and efficient data management. The project required detailed documentation, coding, and integration into the existing product.",
    tools: [
      "NestJS",
      "Docker",
      "MySQL",
      "MongoDB",
      "Redis",
      "PHP",
      "Node.js",
      "Stripe",
      "Cronjob'",
    ],
    role: "Software Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 2,
    name: "Cargo Management System",
    description:
      "My team developed a comprehensive Cargo Management System using Laravel for the backend and MySQL for the database. We implemented Redis for caching and session management. The system includes features such as real-time tracking, inventory management, and automated notifications. We also integrated role-based access control, reporting tools, and an intuitive user interface.",
    tools: ["Laravel", "MySQL", "Redis", "HTML", "CSS", "JavaScript'"],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 3,
    name: "Newspaper Management",
    description:
      "My team and I developed a newspaper management dashboard application. As a backend developer, I was responsible for integrating the frontend template using Laravel and developing the API. I handled all the core functionalities of the application, ensuring seamless communication between the frontend and backend. We utilized Laravel's robust features to implement role-based access control, user authentication, and efficient data management. The API was designed to be secure and scalable, supporting all necessary CRUD operations and integrating third-party services as required.",
    tools: ["laravel", "livewire", "mongoDb", "Mysql", "Git'"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
