import React, { useState, useEffect, useRef } from 'react';
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
    const formRef = useRef(); // Ref for the iframe

    // Toggle the expanded card
    const toggleExpand = (card) => {
        setExpandedCard(expandedCard === card ? null : card);
    };

    // Dynamic height adjustment for the Google Form iframe
    useEffect(() => {
        const handleFormMessage = (event) => {
            if (event.origin === 'https://docs.google.com') {
                const newHeight = event.data['height'];
                if (newHeight && formRef.current) {
                    formRef.current.style.height = `${newHeight}px`;
                }
            }
        };

        window.addEventListener('message', handleFormMessage);
        return () => {
            window.removeEventListener('message', handleFormMessage);
        };
    }, []);

    // Card data to keep things consistent and concise
    const cardData = [
        {
            id: 'intoTheLight',
            title: 'Into the Light: A Journey of Perseverance',
            date: 'March 21, 2025',
            imgSrc: '/assets/intothelightimage.jpg',
            description: 'A Journey of Perseverance',
            isAlbum: true,
        },
        {
            id: 'redeemer',
            title: 'I Know That My Redeemer Lives',
            date: 'November 8, 2024',
            imgSrc: '/assets/i-know-that-my-redeemer-lives-cover-art.jpg',
            audioSrc: '/assets/i-know-that-my-redeemer-lives-sample.mp3',
            description: `The song “I Know That My Redeemer Lives” features the cherished lyrics penned by Samuel Medley (1738–1799) and original music composed by Alan Birdsall.`,
        },
        {
            id: 'dream',
            title: 'Dream A Dream',
            date: 'December 13, 2024',
            imgSrc: '/assets/dreamadreamimage.jpg',
            audioSrc: '/assets/dreamadream.mp3',
            description: `Dream a Dream began as a deeply personal project, inspired by Billy Joel’s Lullaby.`,
        },
        {
            id: 'dontLetGo',
            title: "I Don't Wanna Let You Go",
            date: 'January 10, 2025',
            imgSrc: '/assets/idontwannaletyougoimage.jpg',
            audioSrc: '/assets/idontwannaletyougo.mp3',
            description: `I Don’t Wanna Let You Go was born from a deeply meaningful dream I had shortly after my mother passed away.`,
        },
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
                    {/* <li><a href="#comingSoonSection" className="navItem">Coming Soon</a></li> */}
                    <li><a href="#contactSection" className="navItem">Contact</a></li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="mainContainer">
                <div className="mainContent">
                    {/* OUT NOW Section */}
                    <h2 className="sectionHeader">OUT NOW!</h2>
                    <div id="featuredSection">
                        {cardData.map((card) => (
                            <div key={card.id} className={`playerContainer ${card.isAlbum ? 'albumCard' : ''}`}>
                                {card.isAlbum && <div className="albumBadge">New Album</div>}
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
                                {!card.isAlbum && (
                                    <button className="readMoreButton" onClick={() => toggleExpand(card.id)}>
                                        {expandedCard === card.id ? 'Read Less' : 'Read More'}
                                    </button>
                                )}
                                {expandedCard === card.id && (
                                    <div className="description">
                                        <p>{card.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* COMING SOON Section */}
                    {/* <h2 id="comingSoonSection" className="sectionHeader">COMING SOON</h2> */}
                    {/* <div></div> */}

                    {/* Contact Section */}
                    <div id="contactSection" className="playerContainer">
                        <div className="coverImageContainer">
                            <iframe
                                ref={formRef}
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfJoHyShgZrYy-S6VH9tXy3fcVSAsc9o8XV2ZEIJzPD_ZbGMw/viewform?embedded=true"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                title="Contact Form"
                                style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                            >
                                Loading…
                            </iframe>
                        </div>
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