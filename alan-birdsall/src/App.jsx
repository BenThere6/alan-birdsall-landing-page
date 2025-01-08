import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faSpotify,
    faApple,
    faAmazon,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function App() {
    // State to track which card is expanded
    const [expandedCard, setExpandedCard] = useState(null);

    // Toggle the expanded card
    const toggleExpand = (card) => {
        setExpandedCard(expandedCard === card ? null : card);
    };

    // Card data to keep things consistent and concise
    const cardData = [
        {
            id: 'redeemer',
            title: 'I Know That My Redeemer Lives',
            date: 'November 8, 2024',
            imgSrc: '/assets/i-know-that-my-redeemer-lives-cover-art.jpg',
            audioSrc: '/assets/i-know-that-my-redeemer-lives-sample.mp3',
            description: `The song “I Know That My Redeemer Lives” features the cherished lyrics penned by Samuel Medley (1738–1799) and original music composed by Alan Birdsall. Alan recalls the song’s creation: “One day, while sitting at the piano, I began playing a repeated G note. From there, the rest of the melody seemed to flow effortlessly.” Initially, Alan left out one of the verses to keep the song shorter, but he felt strongly that all the verses needed to be included. “That’s when I developed the compelling bridge,” he explains. Drawing from personal trials and an experience early in life that deepened his faith, Alan shares, “This song is a testament to my belief that Jesus Christ lives and will guide us through all of our challenges.”`
        },
        {
            id: 'dream',
            title: 'Dream A Dream',
            date: 'December 13, 2024',
            imgSrc: '/assets/dreamadreamimage.jpg',
            audioSrc: '/assets/dream-a-dream-sample.mp3',
            description: `Dream a Dream began as a deeply personal project, inspired by Billy Joel’s Lullaby. The first time I heard his song on the radio, I was so moved that I felt compelled to create my own lullaby, which quickly became a cherished bedtime song for my children. When I started recording Dream a Dream in the studio, I envisioned a simple arrangement with just piano and vocals. But as the process unfolded, I kept hearing additional layers of sound in my mind—first a cello, and then more instruments. Each time I returned to the studio, the song evolved, becoming richer and more intricate.`
        },
        {
            id: 'dontLetGo',
            title: "I Don't Wanna Let You Go",
            date: 'January 10, 2025',
            imgSrc: '/assets/idontwannaletyougoimage.jpg',
            description: `I Don’t Wanna Let You Go was born from a deeply meaningful dream I had shortly after my mother passed away. In the dream, I sang the words “I don’t wanna let you go” over and over to her. The melody you hear in the song today is exactly as it was in the dream—beautifully orchestrated and filled with emotion. The final verse reflects the moment my dad asked me to play my three-movement concerto for my mother. It was one of her favorite pieces and is included on this album, making this song a profound tribute to her memory and our shared love of music.`
        },
        {
            id: 'intoTheLight',
            title: 'Into the Light: A Journey of Perseverance',
            date: 'February 21, 2025',
            imgSrc: '/assets/intothelightimage.jpg',
            description: 'A Journey of Perseverance'
        }
    ];

    return (
        <div>
            {/* Section Above Navigation */}
            <div className="sectionAboveNav">
                <div className="logoContainer">
                    <img src="/assets/logo.png" alt="Alan Birdsall Logo" />
                </div>
            </div>

            {/* Navigation */}
            <nav>
                <ul className="navContainer">
                    <li><a href="#featuredSection" className="navItem">Featured</a></li>
                    <li><a href="#comingSoonSection" className="navItem">Coming Soon</a></li>
                    <li><a href="#contactSection" className="navItem">Contact</a></li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="mainContainer">
                <div className="mainContent">
                    {/* Featured Section */}
                    <div id="featuredSection">
                        {cardData.map((card) => (
                            <div key={card.id} className="playerContainer">
                                <div className="coverImageContainer">
                                    <img src={card.imgSrc} alt={`${card.title} Cover Art`} />
                                </div>
                                <div className="songName">{card.title}</div>
                                <div className="featuredReleaseDate">{card.date}</div>
                                {card.audioSrc && (
                                    <audio id="audio-sample" controls>
                                        <source src={card.audioSrc} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                )}
                                <button className="readMoreButton" onClick={() => toggleExpand(card.id)}>
                                    {expandedCard === card.id ? 'Read Less' : 'Read More'}
                                </button>
                                {expandedCard === card.id && (
                                    <div className="description">
                                        <p>{card.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div id="contactSection">
                        <h2>Contact Me</h2>
                        <form
                            action="https://formspree.io/f/your-form-id"
                            method="POST"
                            className="contactForm"
                        >
                            <div className="formGroup">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required placeholder="Your Name" />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required placeholder="Your Email" />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required placeholder="Your Message"></textarea>
                            </div>
                            <div className="contactButtonContainer">
                                <button type="submit" className="contactButton">Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer>
                <div className="copyrightLine">&copy; 2024 Alan Birdsall. All rights reserved.</div>
                <div className="socials">
                    <h3>Follow</h3>
                    <a href="https://www.facebook.com/alanbirdsallentertainment" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/alan.birdsall/profilecard/?igsh=dm9rZ2ppeXdheWtj" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="platforms">
                    <h3>Listen on</h3>
                    <a href="https://open.spotify.com/artist/7cXjutpwrsrwuJyqys7jFv" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faSpotify} />
                    </a>
                    <a href="https://music.apple.com/us/artist/alan-birdsall/80849268" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faApple} />
                    </a>
                    <a href="https://amazon.com/music/player/artists/B001OZVVFS/alan-birdsall" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faAmazon} />
                    </a>
                    <a href="https://www.youtube.com/@AlanBirdsall" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;