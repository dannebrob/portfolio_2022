import elin from "../../assets/images/elinsGlada.webp";
import airBean from "../../assets/images/airBean.webp";
import mariasNaprapat from "../../assets/images/mariasNaprapat.webp";
import portfolio from "../../assets/images/portfolio.webp";
import shareMe from "../../assets/images/shareMe.webp";
import interactivecreditcard from "../../assets/images/interactivecreditcard.webp";

const Cards = [
  {
    id: 1,
    image: interactivecreditcard,
    title: "Interactive credit card payment",
    preamble: "My solution on the Frontend Mentor Challenge",
    text: "On this project I had to be on my toes with the CSS. To get the text on the right places on the credit cards was a bit tricky. Also, I had to learn about forms in React and how to validate the inputs.",
    github: "https://github.com/dannebrob/interactive-card-details",
    webpage: "https://interactivecreditcard.netlify.app/",
    tags: ["React", "TailWindCSS", "Forms"],
  },
  {
    id: 2,
    image: shareMe,
    title: "Full-Stack social media site",
    preamble: "My take on a social media site, similar to Pinterest",
    text: "The social media site with Sanity.io as backend and React as front-end. A great project with a lot problem-solving. This was a great challenge for me. This project was originally created by JavaScript Mastery on YouTube but it had some flaws that I had to correct to make it work in the end. I just loved that it has login with Google, a neat feature that was fun to implement. (fun fact: google changed how the api worked mid-development so I had to solve the problem). ",
    github: "https://github.com/dannebrob/full_stack_social_media_app",
    webpage: "https://thesharemeapp.netlify.app/",
    tags: ["React", "TailWindCSS", "Sanity.io", "React Router", "Google Login"],
  },
  {
    id: 3,
    image: airBean,
    title: "AirBean React Project",
    preamble:
      "A coffee ordering app. The final project of a React and Redux course. With drone delivery.",
    text: "This was the final big project in the React course, by Folkuniverisitetet and ZooCom. It summed up most of the course syllabus. The project was a great hands-on project with React, Redux, React Router and API calls. A lot of focus was also on problem-solving and decision-making, since the rules of the project were not predefined. After the project, I feel that lots of the concepts of React and Redux were solidified and tested my ability to find my own solutions.",
    github: "https://github.com/dannebrob/7-Slutexaminationen-React-YH/",
    tags: ["React", "Redux", "React Router", "API"],
  },
  {
    id: 4,
    image: elin,
    title: "Elins Glada Ekologiska Kor",
    preamble:
      "Wordpress theme, built from the ground up. Made for a local business.",
    text: "A big project, built closely with the business owner. First, I made a mockup in Figma and after feedback from the client, we found a design that was appealing and easy to use for the end-user. A big challenge for me to make a WordPress theme from scratch that would work with all possible plugins and other add-ons that could be used in the future. To organize the input from my client and upcoming tasks I used a Trello board, a great tool for visualization.",
    github: "https://github.com/dannebrob/elins2.0-wordpress-theme",
    webpage: "https://www.elinsgladaekologiskakor.se/",
    tags: ["Wordpress", "CSS", "PHP", "Mobile-first", "Image Optimizing"],
  },
  {
    id: 5,
    image: mariasNaprapat,
    title: "Marias Naprapatklinik",
    preamble: "A website made for a client, built with AtroJs ",
    text: "This project was built for a client that didn't get launched in the end, but I had a blast making it and thought I got to add some nice features like Observer API for example. I liked working with a new tool like Astro since it forced me to learn new ways to solve problems but was still the same old Javascript I enjoy writing.",
    github: "https://github.com/dannebrob/Astro_multipage",
    webpage: "https://naprapat-pre.netlify.app/",
    tags: ["Javascript", "AstroJS", "CSS", "Mobile-first", "Image Optimizing"],
  },
  {
    id: 6,
    image: portfolio,
    title: "Portfolio - v1",
    preamble: "My porfolio built wtith React.",
    text: "A great hobby project that really had no boundaries. I wanted to build it with react since I liked the component based way to build the site. I wanted to use the React Context API for state management, since I had used Redux before and wanted to try it out. This will most certainly be a project that I keep on working with, since there's a lot of features I would love to add.",
    github: "https://github.com/dannebrob/portfolio_2022",
    webpage: "http://danielbroback.se/",
    tags: ["React", "Context API", "Mobile-first"],
  },
];

export { Cards };
