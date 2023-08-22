import spranneImg from "../../assets/gallery/spranne.png"
import kingImg from "../../assets/gallery/king.png"
import chunksImg from "../../assets/gallery/chunks.png"
import azifImg from "../../assets/gallery/azif.png"

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
    },
    {
        src: chunksImg,
        alt: "A Ysoki rogue from a Pathfinder 2e campaign"
    },
    {
        src: azifImg,
        alt: "A tiefling bard from a DND 5e campaign"
    },
];

export default doodles;