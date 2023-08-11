import doubleTrioImg from "../../assets/albums/double-trio.jpg";
import whitePonyImg from "../../assets/albums/white-pony.jpg";
import psychokineticLoveSongsImg 
    from "../../assets/albums/psychokinetic-love-songs.jpg";
import blackMessiahImg from "../../assets/albums/black-messiah.jpg";

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
        imgSrc: doubleTrioImg,
        title: "Double Trio",
        artist: "By Storm",
        href: "https://injuryreserve.bandcamp.com/track/double-trio"
    },
    {
        id: 1,
        imgSrc: whitePonyImg,
        title: "White Pony",
        artist: "Deftones",
        href: "https://www.youtube.com/playlist?list=PLC80P4gsPr-bLGUNpAdxytEsA5y8PUsbL"
    },
    {
        id: 2,
        imgSrc: psychokineticLoveSongsImg,
        title: "Psychokinetic Love Songs",
        artist: "Hey, Ily!",
        href: "https://heyilyband.bandcamp.com/album/psychokinetic-love-songs"
    },
    {
        id: 3,
        imgSrc: blackMessiahImg,
        title: "The Black Messiah",
        artist: "D'Angelo and The Vanguard",
        href: "https://www.youtube.com/playlist?list=PLDlzaWMepRBfViKfEfUwg_DZuQF6A4e6l"
    }
];

export default albums;