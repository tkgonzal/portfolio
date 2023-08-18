import "./Credits.css"

/**
 * @returns {ReactComoponent} Credits for assets used for the site
 */
function Credits() {
    return (
        <>
            <h1>Thank You for the Heart</h1>
            <p>
                This portfolio was all coded by me, and a majority
                of the assets were also made by yours truly, but for
                the few things I didn't make, I'd like to give credit
                and thanks.
            </p>

            <h2 className="credits--header">Background Image</h2>
            <p className="credits--blurb">
                The image used for the background is a repeating tile of a cloudy, starry night
                from tumblr user <a
                    target="_blank"
                    href="https://www.tumblr.com/pleeping/47045018500">pleeping</a>.
            </p>

            <h2 className="credits--header">About</h2>
            <p className="credits--blurb">
                My portrait on the about page was made on a <a
                    href="https://picrew.me/en/image_maker/1322863"
                    target="_blank"
                >Picrew</a> made by tumblr user pepperjackets.
            </p>

            <h2 className="credits--header">Interests</h2>
            <p className="credits--blurb">
                The design for the display of my current music
                rotation is based on <a href="https://topsters.org/" target="_blank">Topsters</a>,
                a popular music sharing format online. All album images are taken either
                from <a href="https://www.discogs.com/" target="_blank">Discogs</a>, if the album
                links to a YouTube playlist, or <a href="https://bandcamp.com/" target="_blank">Bandcamp</a>, if
                the album links to a Bandcamp page.
            </p>

            <h2 className="credits--header">Footer</h2>
            <ul className="credits--blurb">
                <li>
                    The stamp of Persona 5's Futaba's All Out Attack animation
                    is pulled from Tumblr user <a 
                        href="https://www.tumblr.com/dizzy-lights/724850595343876096/i-promised-so-i-shall-deliver-the-other-phantom"
                        target="_blank"
                    >dizzy-light</a>'s blog.
                </li>
            </ul>
        </>
    )
}

export default Credits

