import { useRef, useEffect } from "react"

import "./LyricsMarquee.css"

const LYRIC_TIME_INCREMENT_IN_SEC = 15

function LyricsMarquee({ lyrics }) {
    const marquee1Ref = useRef(null)
    const marquee2Ref = useRef(null)

    const processedLyrics = lyrics.map(lyric => ` • ${lyric.toUpperCase()}`)
    
    useEffect(() => {
        if (marquee1Ref.current && marquee2Ref.current) {
            const animationTime = processedLyrics.length * LYRIC_TIME_INCREMENT_IN_SEC
            const animationStyle = `marquee ${animationTime}s linear infinite`

            marquee1Ref.current.style.animation = animationStyle
            marquee2Ref.current.style.animation = animationStyle

            // marquee2Ref.current.style.animationDelay = `${animationTime}s`
        }
    }, [marquee1Ref.current, marquee2Ref])

    return (
        <div className="lyrics-marquee">
            <p ref={marquee1Ref}>
                {processedLyrics}
            </p>
            <p ref={marquee2Ref}>
                {processedLyrics}
            </p>
        </div>
    )
}

export default LyricsMarquee