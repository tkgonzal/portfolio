import anthologyImg from "../../assets/albums/anthology.JPG";
import aGreatChaosImg from "../../assets/albums/a-great-chaos.JPG";
import getGoodImg from "../../assets/albums/get-good.JPG";
import diamondEyesImg from "../../assets/albums/diamond-eyes.JPG";

// Albums to display for the topster element
// Each album object is structured with the following members:
//  -id {Number} A number to specify for id (as if the data was from a db)
//  -imgSrc {string} The filepath for the album's art
//  -title {string} The name of the album
//  -artist {string} The artist(s) who made the album
//  -href {string} A link to where the user could listen to the album
const albums = [
    {
        id: 0,
        imgSrc: anthologyImg,
        title: "Anthology",
        artist: "Worst Party Ever",
        href: "https://worstpartyever.bandcamp.com/album/anthology"
    },
    {
        id: 1,
        imgSrc: aGreatChaosImg,
        title: "A Great Chaos",
        artist: "Ken Carson",
        href: "https://www.youtube.com/playlist?list=OLAK5uy_kCutGLcSeZMu2sdx2_a1PXHbUp7-mXHN8"
    },
    {
        id: 2,
        imgSrc: getGoodImg,
        title: "Get Good",
        artist: "Good Game",
        href: "https://goodgameband.bandcamp.com/album/get-good"
    },
    {
        id: 3,
        imgSrc: diamondEyesImg,
        title: "Diamond Eyes",
        artist: "Deftones",
        href: "https://www.youtube.com/playlist?list=OLAK5uy_kxPAqEp09ckqnr4Qje4tkzgz-xbYqVJw4"
    }
];

export default albums;