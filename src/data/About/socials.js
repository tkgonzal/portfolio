import linkedInImg from "../../assets/socials/linkedin.svg";
import gitHubImg from "../../assets/socials/square-github.svg";

// An array of social media links to display to the user on the About page
// Each socialData object contains the following:
//   -src {string} The file path for the image to display for the social media
//   -alt {string} The name of the social media to display (used for img alt)
const socialsData = [
    {
        src: linkedInImg,
        alt: "LinkedIn",
        href: "https://www.linkedin.com/in/traven-gonzales-318a96175/"
    },
    {
        src: gitHubImg,
        alt: "GitHub",
        href: "https://github.com/tkgonzal"
    }
];

export default socialsData;