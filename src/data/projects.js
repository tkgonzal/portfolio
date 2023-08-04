import echoBoxDemoImg from "../assets/projects/echobox-demo-img.png"
import billyDemoImg from "../assets/projects/billy-demo-img.png"
import shiritoriDemoImg from "../assets/projects/shiritori-demo-img.png"

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
        description: "A backlog manager for tracking user progress of media consumption and collection.",
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
            "Python"
        ]
    },
    {
        id: 3,
        title: "Shiritori",
        subtitle: "An English variant of the classic Japanese word game",
        description: `A C++ program implementing an English variant of the 
        Japanese word game Shiritori, wherein players take turns saying a word that
        starts with the letter of the last word said. If a player fails to say a 
        real word that conforms to this rule on time, they're eliminated. The 
        last player standing is the winner`,
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
    }
];

export default projects;