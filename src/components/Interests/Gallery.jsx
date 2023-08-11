import "./Gallery.css"

/**
 * @param {Object} props A props object containing
 * -doodles {Object[]} An array of doodle objects which are structured with
 * the following members:
 *      -src {string} A string specifying the file path to the doodle
 *      -alt {string} The text to use as the alt and title of the image
 * @returns {ReactElement} A component displaying all of the doodles
 */
function Gallery({ doodles }) {
    const doodleImgs = doodles.map(doodle => 
        <img 
            key={doodle.src}
            src={doodle.src}
            alt={doodle.alt}
            title={doodle.alt}
        />
    )

    return (
        <div className="gallery">
            {doodleImgs}
        </div>
    )
}

export default Gallery