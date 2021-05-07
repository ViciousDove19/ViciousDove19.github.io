// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import pythonIcon from "./images/python.svg"
//import businessIcon from "./images/business.svg"
import photoshopIcon from "./images/photoshop.svg"
////import LinkedInIcon from "./images/linkedIn.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"



//image files
import MoM from './images/mom.png'
import deer from './images/deer.png'
import nightwonder from './images/nightwonder.jpg'
import dystopia from './images/dystopia.jpg'



export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Chinmay.",
  headerTagline: [
    //Line 1 For Header
    "Building products,",
    //Line 2 For Header
    "Crafting experiences.",
    //Line 3 For Header
    "Understanding ourselves.",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a third year student currently pursuing a dual degree in Engineering Design at IIT Madras.",

  //Contact Email
  contactEmail: "rautchinmay19@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Maze of Malazzar - Pixel Art Game", //Project Title - Add Your Project Title Here
      para:
        "A pixel game made with Godot Engine for a horror game jam.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        MoM,
      //Project URL - Add Your Project Url Here
      url: "https://viciousdove19.itch.io/the-maze-of-malazzar",
    },
    {
      title: "Chase & Capture - Multiplayer Board Game", //Project Title - Add Your Project Title Here
      para:
        "A multiplayer board game based on Scotland Yard and set in IIT Madras. Made with Godot Game Engine and Azure Virtual Machine for cloud computing.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        deer,
      //Project URL - Add Your Project Url Here
      url: "https://play.google.com/store/apps/details?id=org.godotengine.scotlandyard",
    },
    {
      title: "Energy Sector in India - Case Study", //Project Title - Add Your Project Title Here
      para:
        "Detailed case study on the energy sector of India and possible business opportunities.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        dystopia,
      //Project URL - Add Your Project Url Here
      url: "https://dystopianfuturemovies.com/",
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm currently pursuing a dual degree in Engineering Design at IIT Madras. I love learning about new technologies and applying them to add value in society. Being passionate about entrepreneurship, I often find myself figuring out product-market fit for various ideas, fictional or non-fictional.",
  aboutParaTwo:
    "Outside of work, I enjoy watching anime, listening to podcasts, reading books and playing video games. I often try my hand at creating art to express my ideas, be it sketching, writing, painting or even game development. Some of my favourite creations include Attack on Titan, Monster, Mushishi, Silicon Valley, Breaking Bad, The Last of Us, God of War, Harry Potter, The Hobbit, Agatha Christie's mysteries, Murakami's magical realism, and Stephen King's horror novels. Clearly, I'm a pop-culture buff. I also love cycling and running, especially with a good song or podcast on!",
  aboutParaThree:
    "I believe experiences are much more valuable than materialistic pleasures. My idea of happiness is reading a cozy mystery with my dog by my side while it's raining outside.",
  aboutImage:
    nightwonder,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: jsIcon,
      para:
        "I've used JavaScript, HTML and CSS immensely to create meaningful web experiences. I'm skilled in libraries like React, Vue, and three.js.",
    },
    {
      img: pythonIcon,
      para:
        "Python is my go-to programming language. I'm skilled in Django for backend operations and integrating database systems in the framework. I'm familiar with ML and CV libraries like tensorflow, opencv and scikit-learn.",
    },
    {
      img: photoshopIcon,
      para:
        "I've knowledge of Adobe's design tools like Photoshop, Illustrator, After Effects and XD. I'm also familiar with 3D softwares like Blender, Unity and Fusion 360.",
    },
    {
      img: cssIcon,
      para:
        "I'm well versed with various project management tools and techniques and have applied them through my positions of responsibilty at IITM. I possess business development skills learnt through reading voraciously and interacting with leaders.",
    },
    {
      img: designIcon,
      para:
        "I've been practicing data-driven User reasearch and UX design to find product-market fit. I'm aware of the cognitve science tools to understand and define customer needs.",
    },    
    {
      img: codeIcon,
      para:
        "I have explored and implemented technologies like Cloud computing, Game development and Vitual reality. I'm currently learning more about Blockchain and Computer Vision and their role in Healthcare.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Connect With Me",
  promotionPara:
    "If you have a project in mind where I could help or want to contribute to any of my projects, do reach out. I believe the world could be changed if the right people come together. Looking forward to an exciting conversation.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { 
      img: githubIcon,
      url: "https://github.com/ViciousDove19" 
    },
    {
      img: cssIcon,
      url: "https://www.linkedin.com/in/chinmay-raut-09307a15a/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/viciousdove19",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/rautchinmay19/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
