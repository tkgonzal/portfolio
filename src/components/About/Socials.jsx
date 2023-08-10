import "./Socials.css"

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