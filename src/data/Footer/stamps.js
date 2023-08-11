import futabaAoaImg from "../../assets/stamps/dizzy-lights-futaba-aoa.gif"
import lbpImg from "../../assets/stamps/sth-lbp.gif"
import gear5Img from "../../assets/stamps/gear-5.gif"

// A collection of stamps (gifs with a sort of stamp border, that were popular
// in the era of websites like DeviantArt) to display in the footer
// Each stamp object in the array has the following members:
//      -src {string} A string indicating a filepath for the stamp gif
//      -alt {string} An alt to use for the stamp
//      -title {string} A title to use for the stamp    
const stamps = [
    {
        src: futabaAoaImg,
        alt: "Futaba Sakura's All out Attack animation from Persona 5 Royal",
        title: "A stamp of Futaba's AoA by tumblr user dizzy-lights"
    },
    {
        src: lbpImg,
        alt: "Single art from JPEGMAFIA and Danny Brown's collab albun'",
        title: "PEGGY and Danny"
    },
    {
        src: gear5Img,
        alt: "A gif of Luffy from One Piece in Gear 5 laughing",
        title: "Gear 5 Luffy"
    }
];

export default stamps;