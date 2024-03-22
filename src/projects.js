import QuizImage from './assets/img/08-web-apis-challenge-demo.gif'
import ApiImage from './assets/img/05-third-party-apis-homework-demo.gif'
import ConsoleImg from './assets/img/nyt.png'
import PasswordGenImg from './assets/img/05-javascript-challenge-demo.png'
import WeatherImg from './assets/img/weather-dashboard-screenshot.png'
import CurrencyImg from './assets/img/image.png'
import SuiteStay from './assets/img/suitstay.png'
import boostrapPortfolio from './assets/img/bootstrapPortfolio.png'
import reactPortfolio from './assets/img/reactPortfolio.png'
import malvernui from './assets/img/malvernui.png'
export const projects = [
    {
      "id": 1,
      "title": "Quiz Challenge",
      "deployedLink": "https://khubaibshah786.github.io/Code_Quiz",
      "githubLink": "https://github.com/khubaibshah786/Code_Quiz",
      "screenshot": QuizImage,
      "description": "I created a dynamic quiz application using HTML, CSS, and JavaScript. The quiz features a countdown timer, and users can answer a series of questions with multiple choices. The timer stops when either the time runs out or all questions are answered. For each question, the application displays the question title along with a set of choices. After selecting an answer, the application provides immediate feedback by appending a message below the question, indicating whether the chosen answer was correct or incorrect. I also implemented a feature to display the end of the quiz once all questions have been answered. To enhance the user experience, I ensured that the quiz progresses smoothly, updating the content dynamically without reloading the entire page."
    },
    {
      "id": 2,
      "title": "Daily Planner",
      "deployedLink": "https://khubaibshah786.github.io/Daily_Planner",
      "githubLink": "https://github.com/khubaibshah786/Daily_Planner",
      "screenshot": ApiImage,
      "description": "I created a dynamic daily planner using HTML, CSS, and JavaScript. The planner displays time blocks from 9 AM to 5 PM, allowing users to schedule events and tasks for each hour. The time blocks are color-coded to indicate whether an hour is in the past, present, or future. To enhance user experience, I utilized the Day.js library to handle date and time operations. The current date is prominently displayed at the top of the page. Each time block consists of an hour indicator, a textarea for entering event details, and a save button with an icon."
    },
    {
      "id": 3,
      "title": "Console Finance",
      "deployedLink": "https://khubaibshah786.github.io/Console-Finances",
      "githubLink": "https://github.com/khubaibshah786/Console-Finances",
      "screenshot": ConsoleImg,
      "description": "Hello there! this is the Console finances project, I was provided with a Dataset containing Dates and Profit/losses. I had to show my ability to console log the data based on different acceptance criteria. Also adding in comments to show exactly what everything does and why i have choosen that particular method into solving the challenge."
    },
    {
      "id": 4,
      "title": "Password Generator",
      "deployedLink": "https://khubaibshah786.github.io/Password_Generator",
      "githubLink": "https://github.com/khubaibshah786/Password_Generator",
      "screenshot": PasswordGenImg,
      "description": "This web-based Password Generator application allows users to create strong and secure passwords tailored to their specific criteria. The application provides a clean and user-friendly interface that dynamically updates as users select their preferences for password length and character types."
    },
    {
      "id": 5,
      "title": "Weather Dashboard",
      "deployedLink": "https://khubaibshah786.github.io/Weather_Dashboard",
      "githubLink": "https://github.com/khubaibshah786/Weather_Dashboard",
      "screenshot": WeatherImg,
      "description": "We have created a weather application that allows users to search for the current weather by searhing a city name and a 5-day forecast for any location. "
    },
    {
      "id": 6,
      "title": "Currency Converter (Project 1)",
      "deployedLink": "https://khubaibshah786.github.io/Currency_Compass",
      "githubLink": "https://github.com/khubaibshah786/Currency_Compass",
      "screenshot": CurrencyImg,
      "description": "As a team we have created a currency conversion application. We wanted a simple and intuitive application to convert from standard currencies and also crypto currencies. As a user interested in international finance, I want a currency conversion app that not only facilitates quick and accurate conversions but also provides me with the ability to convert between fiat and crypto currencies. This integrated feature will help me make informed decisions based on both financial data regardless of where my money is held."
    },
    {
      "id": 7,
      "title": "React Profolio",
      "deployedLink": "https://cool-mandazi-9ab0bd.netlify.app/",
      "githubLink": "https://github.com/khubaibshah786/React_Portfolio",
      "screenshot": reactPortfolio,
      "description": "This portfolio is a showcase of the projects I completed during my journey as a front-end developer. Designed with React, it offers a glimpse into my skills, creativity, and dedication to crafting engaging web applications. I created this portfolio with the intention of presenting my capabilities as a front-end developer. Each project featured here is a testament to my learning and growth throughout my front-end developer course. From dynamic navigation using React Router to polished UI components, every aspect of this portfolio reflects my commitment to excellence in web development."
    },
    {
      "id": 8,
      "title": "SuitStay (Project 2)",
      "deployedLink": "https://deploy-preview-46--suitestay.netlify.app",
      "githubLink": "https://github.com/khubaibshah786/Currency_Compass",
      "screenshot": SuiteStay,
      "description": "Welcome to SuiteStay. Its a one stop WebApplication for quickly performing reservation of Hotel Rooms and search the places nearby. We have implemented an elegant design for users for seamless booking experience s. By integrating advanced filters and personalized recommendations, it ensures that users can easily find, book their Room easily."
    },
    {
      "id": 9,
      "title": "Boostrap Portfolio",
      "deployedLink": "https://khubaibshah786.github.io/Bootstrap-Portfolio",
      "githubLink": "https://github.com/khubaibshah786/Bootstrap-Portfolio",
      "screenshot": boostrapPortfolio,
      "description": "This Challenege is based around Bootstrap and how it makes life easier by not having to write your own code and use libraries to help. bootstrap makes it easier to allow the front end to look visually better. I have implemented various Bootstrap components to create sections like the navigation bar, hero section (jumbotron), work section with Bootstrap cards, skills section, about/contact section, and a footer. This site is completley Responsive and i have also factored in individuals who use screen readers by applying HTML semantics to each section that require it."
    },
    {
      "id": 10,
      "title": "Malvern Autos Admin (Personal Project currently in build phase)",
      "deployedLink": "https://malvernautos.netlify.app/",
      "youtubeLink": "https://www.youtube.com/watch?v=sq6nUj52KS4",
      "githubLink": "https://github.com/khubaibshah/malvern-admin-ui",
      "screenshot": malvernui,
      "description": "I created this project to develop a user-friendly web application that facilitates online bookings for car repairs. It aimed to streamline the process of scheduling appointments and managing repair services for vehicle owners. The project utilized modern web development technologies such as Vue.js for the frontend, Laravel and Node.js for the backend, and MySql as the database. The application featured an intuitive interface where users could easily select their desired repair services, choose appointment times, and make payments securely. Throughout the development process, I have focused on delivering a seamless user experience while ensuring the reliability and scalability of the application."
    }
    
  ]
  
  export default projects;