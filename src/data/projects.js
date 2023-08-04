import echoBoxDemoImg from "../assets/projects/echobox-demo-img.png"

const projects = [
    {
        id: 1,
        title: "EchoBox",
        subtitle: "A playlist aggregator",
        description: `An app that allows the user to listen to their Spotify
            playlists and playlists made of their own local audio files in one
            place`,
        demoImg: echoBoxDemoImg,
        links: [
            {
                text: "GitHub",
                href: "https://github.com/missile720/music-player"
            }
        ],
        details: [
            "Implemented the primary UI for the library and playlists",
            "Set up and developed a good chunk of the main context for managing the state of the app",
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
];

export default projects;