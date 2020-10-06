import { nanoid } from 'nanoid';
import pdf from '../images/PeterTrinhResume.pdf';

// HEAD DATA
export const headData = {
  title: 'Peter Trinh', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Peter Trinh',
  subtitle: "I'm a software engineer & minimalist.",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I graduated from the University of Alaska Anchorage with a Bachelor of Science in Computer Science with a minor in Computer Systems Engineering.',
  paragraphTwo: 'Post-graduation I have been employed as a software engineer at a SAAS company and as a system analyst at a non-profit organization.',
  paragraphThree: 'Outside of work, I am interested in psychology, finance, science, hiking, and minimalism.',
  resume: pdf, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RilkeSchule.jpg',
    title: 'Field Trip Permission Slip Appplication',
    info:
      'A web application that allows teachers to create field trip forms that parents can sign off on.',
    info2: 'Technologies involved: ASP.NET MVC, C#, SQL Front-end: Bootstrap, HTML / CSS',
    url: '',
    repo: 'https://github.com/Wakahisa/Rilke-Schule-Student-Management-MVC-asp.Net', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Ionia.jpg',
    title: 'Equilibria',
    info:
      'A website idea created by a client that allows users to see movie reviews by their favorite critics, celebrities, and friends. The website is suppose to act as a nexus point to existing medias such as Youtube, Netflix, Hulu, and Amazon to allow users to view movies from one access point.',
    info2: 'Technologies involved: .NET Core, C#, LINQ, SQL Front-end: JavaScript, HTML / CSS',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'Ionia.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'peterphantrinh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/peterptrinh/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Wakahisa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
