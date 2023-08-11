import "./Topsters.css"

/**
 * Based on the Topsters, a popular format for people to share sets of 
 * albums they enjoy, this is an interactive Topsters that displays my
 * current rotation of music and 
 * @param {Object} props A props object containing
 * -albums {Object[]} Am array of albums objects with the structure of
 *      -id {Number} A number to specify for id (as if the data was from a db)
 *      -imgSrc {string} The filepath for the album's art
 *      -title {string} The name of the album
 *      -artist {string} The artist(s) who made the album
 *      -href {string} A link to where the user could listen to the album
 * @returns {ReactElement}
 */
function Topsters({ albums }) {
    // Denotes the amount of albums per row of the Topster, calculated such that
    // the topsters will arrange the albums like a cube if possible
    const COLS = Math.ceil(Math.sqrt(albums.length)) 
    const GAP_SZ = .5  // In rem

    const albumSizing = {
        width: `calc((100% - ${GAP_SZ}rem) / ${COLS})`
    }

    const albumImgs = albums.map(album => 
        <a 
            href={album.href}
            target="_blank"
            key={album.id}
            style={albumSizing}
        >
            <img
                src={album.imgSrc}
                title={`${album.artist} - ${album.title}`}
                alt={`Album cover for ${albums.title} by ${album.arrist}`}
                href={album.href}
            />
        </a>
    )

    const albumTitles = albums.map(album => 
        <li key={album.id}>
            <a
                href={album.href}
                target="_blank"
                title={`Click to see album!`}
            >
                {`${album.artist} - ${album.title}`}
            </a>
        </li>
    )

    return (
        <div 
            className="topsters"
            title="Interactive topsters for my current rotation"
        >
            <div className="topsters--album-imgs">
                {albumImgs}
            </div>

            <ul className="topsters--album-titles">
                {albumTitles}
            </ul>
        </div>
    )
}

export default Topsters