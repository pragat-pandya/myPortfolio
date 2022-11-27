/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pragat's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pragat Hathidara Portfolio",
    type: "website",
    url: "http://pragat-pandya.github.io",
  },
};

//Home Page
const greeting = {
  title: "Pragat Pandya",
  logo_name: "Pragat Pandya",
  nickname: "web_nomad",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/12cs6vfOLTOyTTcqXuT510MStD90W2EsO0U6jt1x-wzE/edit?usp=share_link",
  portfolio_repository: "https://github.com/pragat-pandya/masterPortfolio",
  githubProfile: "https://github.com/pragat-pandya",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/pragat-pandya",
  // linkedin: "https://www.linkedin.com/in/pragat-pandya/",
  // gmail: "pragat.pandya@gmail.com",
  // facebook: "https://www.facebook.com/pragat.pandya.10/",
  // twitter: "https://twitter.com/pandya_pragat",
  // instagram: "https://www.instagram.com/_web_nomad_._/"

  {
    name: "Github",
    link: "https://github.com/pragat-pandya",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pragat-pandya/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pragat.pandya@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/pandya_pragat",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/pragat.pandya.10/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_web_nomad_._/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analysis & Visualization",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable and training ready data-sets",
        "⚡ Experience of working with Pandas, Numpy, Plotly, matplotlib etc.",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "metplotlib",
          fontAwesomeClassname: "logos:matplotlib",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux & Bootstrap",
        "⚡ Developing Android applications using Kotlin and Java",
        "⚡ Creating application backend in Node, Express, Django & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/pragat_pandya",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/pragat_pandya",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shree Shantilal Shah Government Engineering College.",
      subtitle: "B.E. in Information and Technology",
      logo_path: "ss_logo.png",
      alt_name: "S.S.E.C, Bhavnagar",
      duration: "2017 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Blockchains, DBMS, OS, COA, AI, ML, Computer Vision etc.",
        "⚡ Apart from this, I have done courses on Discrete Mathematics, Data Science and Linux Kernel Development.",
      ],
      website_link: "http://www.ssgec.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Science",
      subtitle: "-IBM SkillsBuild",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.skillsbuild.skillsnetwork.site/certificates/c54b4b3d3a9f4d01bb0e45d816ed7110",
      alt_name: "IBM SkillsBuild",
      color_code: "#1F70C199",
    },
    {
      title: "Algorithms on Graphs",
      subtitle: "- University of California San Diego",
      logo_path: "UCsan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9PVWTWNAYXQY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      alt_name: "UC, San Diego",
      color_code: "#00000099",
    },
    {
      title: "CS50: Intro to Computer Science",
      subtitle: "- David Malan",
      logo_path: "harvard.png",
      certificate_link:
        "https://courses.edx.org/certificates/368f0d123ffa4f168ce43cd77195fbe3",
      alt_name: "Harvard",
      color_code: "#0C9D5899",
    },
    {
      title: "Learning how to learn",
      subtitle: "- Barbara Oakley",
      logo_path: "mcmaster.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/36WFF6ENK29B?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link",
      alt_name: "McMaster University",
      color_code: "#1F70C199",
    },
    {
      title: "Algorithmic Toolbox",
      subtitle: "- University of California San Diego",
      logo_path: "UCsan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/E3HAF8CQ3WBL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      alt_name: "UC, San Diego",
      color_code: "#D83B0199",
    },
    {
      title: "Shell Scripting",
      subtitle: "- Jason Cannon",
      logo_path: "udemy.png",
      certificate_link: "https://www.udemy.com/certificate/UC-4YJ8N8FZ/",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Intorduction to Linux Kernel Development",
      subtitle: "- The Linux Foundation",
      logo_path: "linux.jpg",
      certificate_link:
        "https://www.credly.com/badges/5a510db4-9658-45af-bc2a-b65bed4e17ef/linked_in_profile",
      alt_name: "The Linux Foundation",
      color_code: "#0C9D5899",
    },
    {
      title: "Number Theory & Cryptography",
      subtitle: "- University of California San Diego",
      logo_path: "UCsan.png",
      certificate_link:
        "https://coursera.org/share/84237960bfd2d1fb26811361b1716ce8",
      alt_name: "UC, San Diego",
      color_code: "#D83B0199",
    },
    {
      title: "Discrete Mathematics for Computer Sciecne",
      subtitle: "- University of California San Diego",
      logo_path: "UCsan.png",
      certificate_link:
        "https://coursera.org/share/f2a85991f339ff0a72567669a3d31911",
      alt_name: "UC, San Diego",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups and small businesses as Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Web Developer. I love organising events and that is why I am also involved with some opensource communities as a coach.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Actively Looking for work!",
          company: "",
          company_url: "",
          logo_path: "hire.jpg",
          duration: "PRESENT",
          location: "",
          description: "Please consider this portal as my resume!",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full-Stack Intern",
          company: "Optic Liting Pvt., Ltd.,",
          company_url: "https://www.opticliting.com/",
          logo_path: "optic.png",
          duration: "June 2022 - August 2022",
          location: "Ahmedabad, Gujarat",
          description:
            "I have worked on the creating a manufacturing cost estimation software dedicated for the internal use.",
          color: "#ee3c26",
        },
        {
          title: "Python Intern",
          company: "Robotronlab",
          company_url: "http://robotronlab.com/",
          logo_path: "robotron.jpg",
          duration: "Nov 2020 - January 2021",
          location: "Work From Home",
          description:
            "This is a Robotics company, I worked on creation of many customized robotics kits suitable for training children.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "PyCon India Content Team Member 2021",
          company: "Google",
          company_url: "https://in.pycon.org/2021/",
          logo_path: "pycon.jpg",
          duration: "2021",
          location: "Remote",
          description:
            "Produced various type of text content for the PyConIndia 2020, online event.",
          color: "#4285F4",
        },
        {
          title: "Django Girls Workshop Coach- 2019",
          company: "Django Girls Foundation",
          company_url: "https://djangogirls.org/en/gandhinagar/#coach",
          logo_path: "dj.png",
          duration: "2019",
          location: "Gandhinagar, Gujarat",
          description:
            "Coached a group of 5 attendees to learn Web Development using Django and Python",
          color: "#4285F4",
        },
        {
          title: "Django Girls Workshop Coach- 2019",
          company: "Django Girls Foundation",
          company_url: "https://djangogirls.org/en/bhavnagar2/#coach",
          logo_path: "dj.png",
          duration: "2019",
          location: "Bhavnagar, Gujarat",
          description:
            "Coached a group of 5 attendees to learn Web Development using Django and Python",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Driven projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I plan on doing research and pulishing my own publications in future...",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "psp.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with AI/ML, Django, Node, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "contact",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "T.A.-Palitana, Dist.-Bhavnagar, Gujarat -364270",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/3fei1euY6y6PEiMe9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8160705706",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
