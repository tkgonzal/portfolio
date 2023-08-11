import Topsters from "../components/Interests/Topsters.jsx"
import Gallery from "../components/Interests/Gallery.jsx"

import albums from "../data/Interests/albums.js"
import doodles from "../data/Interests/doodles.js"

import keebImg from "../assets/keeb-daily-driver.jpg"

import "./Interests.css"

/**
 * @returns {ReactComponent} A page full of my interests. Sort of an offshoot
 * of the About page, but with more casual informatino about me. Used to 
 * tell more about myself and display a bit more of my frontend chops.
 */
function Interests() {
    return (
        <>
            <h1>A Few More my Most Favourite Things</h1>
            <p className="interests--blurb">
                I'm a worldly guy with some worldly tastes. Take a quick
                peep at some things I like.
            </p>


            <h2 className="interests--header">Music</h2>
            <p className="interests--blurb">
                Music is probably the thing I'm most invested in. I try to
                listen to a lot of music but my favourite genres are Hip-Hop 
                and Midwest Emo. Some of my favourite artists include JPEGMAFIA,
                mom jeans., 100 Gecs, and D'Angelo. Check out my current 
                rotation (it's interactive!): 
            </p>
            <Topsters
                albums={albums}
            />

            <h2 className="interests--header">Art</h2>
            <p className="interests--blurb">
                In my free time I'm a hobby artist, though nowadays I tend to 
                appreciate art more often than make it. Here's a very minimal
                gallery of some recent pieces I've made.
            </p>
            <Gallery 
                doodles={doodles}
            />

            <h2 className="interests--header">Custom Keyboards</h2>
            <p className="interests--blurb">
                During the pandemic, I got into the hobby of custom mechanical
                keyboards because I didn't have enough expensive hobbies to 
                drain my wallet. I've built quite a few boards since getting 
                into the hobby but my current daily driver is a:
            </p>
            <div className="interests--keeb-details">
                <div className="interests--keeb-info">
                    <h3 className="interests--subheader">QK60</h3>
                    <ul className="interests--bullet-points">
                        <li>QwertyKeys 60 in HHKB</li>
                        <li>CanonKeys Neapolitan Switches</li>
                        <ul>
                            <li>Lubed with Tribosys 3203</li>
                            <li>Filmed with Deskeys Film</li>
                        </ul>
                        <li>AEBoards Staebies V2.1 Stabilizers</li>
                        <ul>
                            <li>Lubed with Krytox 205g0</li>
                            <li>Wires lubed with Dielectric Grease</li>
                        </ul>
                        <li>Cherry Spellbook Keycaps</li>
                    </ul>
                </div>
                
                <img
                    className="."
                    src={keebImg} 
                    alt="A QK60 in HHKB"
                    title="The keeb in question"
                />
            </div>
        </>
    )
}

export default Interests