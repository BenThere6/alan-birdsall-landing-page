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

    return (
        <div>
            {/* Section Above Navigation */}
            <div className="sectionAboveNav">
                <div className="portraitContainer">
                    <img src="/assets/portrait.png" alt="Musician Portrait" />
                </div>
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
                        {/* "I Know That My Redeemer Lives" */}
                        <div className={`playerContainer ${expandedCard === 'redeemer' ? 'expanded' : ''}`}>
                            <div className="coverImageContainer">
                                <img src="/assets/i-know-that-my-redeemer-lives-cover-art.jpg" alt="Single Cover Art" />
                            </div>
                            <div className="songName">I Know That My Redeemer Lives</div>
                            {/* <div className="songArtists">Alan Birdsall</div> */}
                            <div className="featuredReleaseDate">November 8, 2024</div>
                            <audio id="audio-sample" controls>
                                <source src="/assets/i-know-that-my-redeemer-lives-sample.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <button className="readMoreButton" onClick={() => toggleExpand('redeemer')}>
                                {expandedCard === 'redeemer' ? 'Read Less' : 'Read More'}
                            </button>
                            {expandedCard === 'redeemer' && (
                                <div className="description">
                                    <p>The song “I Know That My Redeemer Lives” features the cherished lyrics penned by Samuel Medley (1738–1799) and original music composed by Alan Birdsall.</p>
                                    <p>Alan recalls the song’s creation: “One day, while sitting at the piano, I began playing a repeated G note. From there, the rest of the melody seemed to flow effortlessly.”</p>
                                    <p>Initially, Alan left out one of the verses to keep the song shorter, but he felt strongly that all the verses needed to be included. “That’s when I developed the compelling bridge,” he explains.</p>
                                    <p>Drawing from personal trials and an experience early in life that deepened his faith, Alan shares, “This song is a testament to my belief that Jesus Christ lives and will guide us through all of our challenges.”</p>
                                </div>
                            )}
                        </div>

                        {/* "Dream A Dream" */}
                        <div className="playerContainer">
                            <div className="coverImageContainer">
                                <img src="/assets/dreamadreamimage.jpg" alt="Dream A Dream Cover Art" />
                            </div>
                            <div className="songName">Dream A Dream</div>
                            {/* <div className="songArtists">Alan Birdsall</div> */}
                            <div className="featuredReleaseDate">December 13, 2024</div>
                            <audio id="audio-sample" controls>
                                <source src="/assets/dream-a-dream-sample.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <button className="readMoreButton" onClick={() => toggleExpand('dream')}>
                                {expandedCard === 'dream' ? 'Read Less' : 'Read More'}
                            </button>
                            {expandedCard === 'dream' && (
                                <div className="description">
                                    <p>Dream a Dream began as a deeply personal project, inspired by Billy Joel’s Lullaby. The first time I heard his song on the radio, I was so moved that I felt compelled to create my own lullaby, which quickly became a cherished bedtime song for my children.</p>
                                    <p>When I started recording Dream a Dream in the studio, I envisioned a simple arrangement with just piano and vocals. But as the process unfolded, I kept hearing additional layers of sound in my mind—first a cello, and then more instruments. Each time I returned to the studio, the song evolved, becoming richer and more intricate.</p>
                                    <p>The result is a lullaby that’s not only deeply personal but also a reflection of the love and care poured into its creation.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* Coming Soon Section */}
                    <div id="comingSoonSection">
                        <div className="sectionTitle">Coming Soon</div>
                        <div className="allReleases">
                            {/* "I Don't Wanna Let You Go" */}
                            <div className={`releaseContainer ${expandedCard === 'dontLetGo' ? 'expanded' : ''}`}>
                                {/* <div className="releaseType">SINGLE</div> */}
                                <div className="coverImageContainer">
                                    <img src="/assets/idontwannaletyougoimage.jpg" alt="I Don't Wanna Let You Go Cover Art" className="coverImage" />
                                </div>
                                <div className="songName">I Don't Wanna Let You Go</div>
                                <div className="estReleaseDate">January 10, 2025</div>
                                <button className="readMoreButton" onClick={() => toggleExpand('dontLetGo')}>
                                    {expandedCard === 'dontLetGo' ? 'Read Less' : 'Read More'}
                                </button>
                                {expandedCard === 'dontLetGo' && (
                                    <div className="description">
                                        <p>I Don’t Wanna Let You Go was born from a deeply meaningful dream I had shortly after my mother passed away. In the dream, I sang the words “I don’t wanna let you go” over and over to her. The melody you hear in the song today is exactly as it was in the dream—beautifully orchestrated and filled with emotion.</p>
                                        <p>The final verse reflects the moment my dad asked me to play my three-movement concerto for my mother. It was one of her favorite pieces and is included on this album, making this song a profound tribute to her memory and our shared love of music.</p>
                                    </div>
                                )}
                            </div>

                            {/* "Into the Light" Album Card */}
                            <div className="releaseContainer album">
                                <div className="albumBadge">Album</div>
                                {/* <div className="releaseType">ALBUM</div> */}
                                <div className="coverImageContainer">
                                    <img src="/assets/intothelightimage.jpg" alt="Into the Light Cover Art" className="coverImage" />
                                </div>
                                <div className="songName">Into the Light</div>
                                <div className="albumSubline">A Journey of Perseverance</div>
                                <div className="estReleaseDate">February 21, 2025</div>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* Contact Section */}
                    <div id="contactSection">
                        <div className="contactMessage">I'd love to hear from you! Click below to reach out.</div>
                        <div className="contactButtonContainer">
                            <a href="https://alanbirdsall.crd.co" target="_blank" className="contactButton" rel="noreferrer">
                                Contact Me
                            </a>
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