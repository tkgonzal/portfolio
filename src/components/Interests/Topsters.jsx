import "./Topsters.css"

function Topsters({ albums }) {
    const COLS = 2 // Denotes the amount of albums per row of the Topster
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