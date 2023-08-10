import "./LyricsMarquee.css"

function LyricsMarquee({ lyrics }) {
    const processedLyrics = lyrics.map(lyric =>
        `${lyric.toUpperCase()} • `
    )

    return (
        <div className="lyrics-marquee">
            <div className="lyrics-marquee--inner">
                
            </div>
            <p>
                {processedLyrics}
            </p>
        </div>
    )
}

export default LyricsMarquee