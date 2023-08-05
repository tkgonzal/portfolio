import echoBoxDemoImg from "../assets/projects/echobox-demo-img.png";
import billyDemoImg from "../assets/projects/billy-demo-img.png";
import shiritoriDemoImg from "../assets/projects/shiritori-demo-img.png";
import os141DemoImg from "../assets/projects/141os-demo-img.png";
import pathfinderToolsDemoImg from "../assets/projects/pathfinder-tools-demo-img.png";

const projects = [
    {
        id: 1,
        title: "EchoBox",
        subtitle: "A playlist aggregator",
        description: `An app that allows the user to listen to their Spotify
            playlists and custom playlists made of their own local audio 
            files in one place`,
        demoImg: echoBoxDemoImg,
        links: [
            {
                text: "GitHub",
                href: "https://github.com/missile720/music-player"
            },
        ],
        details: [
            "Implemented the primary UI for the library and playlists",
            "Set up and developed a good chunk of the main context for managing the state of the app's library and player",
            "Added mobile/screen size responsivity",
            "Incorporated the primary packages for playing audio into the app",
            "Implemented equalizer and volume control logic",
            "Integrated most of the custom player and audio control logic with the UI",
            "Debugged and tweaked miscellaneous components all throughout the app to improve the UI/UX",
            "Designed logo image and favicon"
        ],
        techStack: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js"
        ]
    },
    {
        id: 2,
        title: "Billy",
        subtitle: "A backlog manager",
        description: `A backlog manager for tracking user progress of 
            media consumption and collection.`,
        demoImg: billyDemoImg,
        links: [
            {
                text: "GitHub",
                href: "https://github.com/tkgonzal/billy"
            },
        ],
        details: [
            "Designed a multi-media backlog organizer in Python for individualized self-recording of media consumption progres (e.g. reading books, watching movies)",
            "Implemented a GUI with tools from the tkinter library to improve program's usability",
            "Streamlined process of documenting progress in different media, greatly improving management of media consumption"
        ],
        techStack: [
            "Python",
            "tkinter"
        ]
    },
    {
        id: 5,
        title: "Pathfinder Tools",
        subtitle: "Tools to Make Game Mastery Easy",
        description: `A website providing users tools to assist in playing the game
            Pathfinder 2e. A current WIP, currently only has a tool for encounter
            calculation`,
        demoImg: pathfinderToolsDemoImg,
        links: [
            {
                text: "Site Host",
                href: "https://zippy-centaur-b2c838.netlify.app/"
            },
            {
                text: "GitHub",
                href: "https://github.com/tkgonzal/pathfinder-tools-module-3-final-project-traven-gonzales-jordan-dinis"
            },
        ],
        details: [
            "Designed and created a landing page for the site to better ease users into utilizing it",
            "Constructed and implemented an Encounter Calculator tool for the app, using a variation of the Knapsack algorithm to calculate all possible enemy compositions given a set of constraints for an encounter",
            "Implemented app using React.js for the state and logic management of the Encounter Calculator tool",
            "Integrated React-Router into the app for ease of linkage between the landing page and the Encounter Calculator",
            "Designed site logo, favicon, and enemy danger icons on Encounter Calculator"
        ],
        techStack: [
            "JavaScript",
            "React.js",
            "React-Router"
        ]
    },
    {
        id: 3,
        title: "Shiritori",
        subtitle: "An English variant of the Japanese word game",
        description: `A command line implementation of an English variant of the 
            Japanese word game Shiritori, wherein players take turns saying a word that
            starts with the letter of the last word said. If a player fails to say a 
            real word that conforms to this rule on time, they're eliminated. The 
            last player standing is the winner.`,
        demoImg: shiritoriDemoImg,
        links: [
            {
                text: "GitHub",
                href: "https://github.com/tkgonzal/shiritori"
            }
        ],
        details: [
            "Implemented a command line program that runs an English variant of the Japanese word game Shiritori",
            "Utilized polymorphism and the binary search algorithm to set up and maintain game structure, demonstrating an understanding of data structure and algortihm concepts through application"
        ],
        techStack: [
            "C++"
        ]
    },
    {
        id: 4,
        title: "141 OS",
        subtitle: "A simple operating system simulator",
        description: `A rudimentary OS simulator meant to demonstrate an 
            asynchronous, multi-threaded solution to the readers-writers
            problem. App launches using a command line prompt with args
            specifying a set of USER files to consider at runtime, and
            a specified amount of disks and printers to consider for the
            simulation. Built for Final Project for UCI's CS 141: Concepts in
            Programming Languages course.`,
        demoImg: os141DemoImg,
        links: [
            {
                text: "Demo Video",
                href: "https://www.youtube.com/watch?v=E5h5v-00auQ"
            }
        ],
        details: [
            "Implemented logic to process a set of USER commands to read, write, and print in system of limited disks and printers",
            "Built logic to handle commands asynchronously using a multi-threaded approach such that all disks and printers are being used if possible",
            "Designed a GUI using the Java Swing library to better visualize how the program processes User commands"
        ],
        techStack: [
            "Java", "Java Swing"
        ]
    }
];

export default projects;