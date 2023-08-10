import { useEffect, useRef } from "react"

import "./TopButton.css"

const ONE_REM_IN_PX = 16
const THREE_REM_IN_PX = 48
const STARTING_BOTTOM_POSITION_IN_REM = -3

function TopButton() {
    const topButtonRef = useRef(null)

    // Scroll event handler to make the TopButton exhibit sticky behaviour
    // Implemented as an event handler as an exercise in utilizing useRef
    const updateTopDisplay = () => {
        // Brings TopBottom into view by adjusting the bottom based on where
        // the user has scrolled
        const newBottom = Math.min(window.scrollY - THREE_REM_IN_PX, 
            ONE_REM_IN_PX) // Chooses bottom in px
        const newBottomInRem = newBottom / ONE_REM_IN_PX;
        
        topButtonRef.current.style.bottom = `${newBottomInRem}rem`
    }

    useEffect(() => {
        topButtonRef.current.style.bottom = `${STARTING_BOTTOM_POSITION_IN_REM}rem`

        window.addEventListener("scroll", updateTopDisplay)

        return () => window.removeEventListener("scroll", updateTopDisplay)
    }, [])

    return (
        <a className="top-btn" href="#" ref={topButtonRef}>
            Top
        </a>
    )
}

export default TopButton