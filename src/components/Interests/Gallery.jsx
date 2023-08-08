import "./Gallery.css"

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