import { useRef, useEffect } from "react"

import "./LyricsMarquee.css"

const LYRIC_TIME_INCREMENT_IN_SEC = 15

/**
 * The marquee element feels like a staple of early web development but is
 * currently deprecated. This component is meant to emulate it using CSS
 * animation.
 * @param {Object} props A props object consisting of:
 * -lyrics {string[]} An array of lyrics to display in the marquee 
 * @returns {ReactElement}
 */
function LyricsMarquee({ lyrics }) {
    const marquee1Ref = useRef(null)
    const marquee2Ref = useRef(null)

    const processedLyrics = lyrics.map(lyric => ` • ${lyric.toUpperCase()}`)
    
    // Add animation style to marquee content
    useEffect(() => {
        if (marquee1Ref.current && marquee2Ref.current) {
            const animationTime = processedLyrics.length * 
                LYRIC_TIME_INCREMENT_IN_SEC
            const animationStyle = `marquee ${animationTime}s linear infinite`

            marquee1Ref.current.style.animation = animationStyle
            marquee2Ref.current.style.animation = animationStyle
        }
    }, [marquee1Ref.current, marquee2Ref.current])

    return (
        <div className="lyrics-marquee">
            <p ref={marquee1Ref}>
                {processedLyrics}
            </p>
            {/* A second paragraph with the lyrics is made to trail the
                original lyrics such that when the animation is about to end
                and reset, the illusion of a seamless loop is made */}
            <p ref={marquee2Ref}>
                {processedLyrics}
            </p>
        </div>
    )
}

export default LyricsMarquee