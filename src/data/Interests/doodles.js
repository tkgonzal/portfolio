import spranneImg from "../../assets/gallery/spranne.PNG"
import kingImg from "../../assets/gallery/king.png"

// A collection of doodles I've made to display in the Interest page's Gallery
// Each doodle object contains:
//   -src {string} A string specifying the file path to the doodle
//   -alt {string} The text to use as the alt and title of the image
const doodles = [
    {
        src: spranneImg,
        alt: "A drawing of Sprig and Anne from 'Amphibia' listening to music"
    },
    {
        src: kingImg,
        alt: "A drawing of King from 'The Owl House' saying 'Ayo!'"
    }
];

export default doodles;