import "./Socials.css"

/**
 * A component that displays several image links to specified social
 * media
 * @param {Object} props A props object containing
 * -socialsData {Object[]} An array of data of social media to link to which
 * includes members for
 *  -src {string} The file path for the image to display for the social media
 *  -alt {string} The name of the social media to display (used for img alt)
 * @returns {ReactElement}
 */
function Socials({ socialsData }) {
    const socialsLi = socialsData.map(social => 
        <li
            key={social.src}
        >
            <a
                href={social.href}
                target="_blank"
            >
                <img
                    src={social.src}
                    alt={social.alt}
                />
            </a>
        </li>    
    )

    return (
        <div className="socials-row">
            <h2>Socials:</h2>
            <ul>
                {socialsLi}
            </ul>
        </div>
    )
}

export default Socials