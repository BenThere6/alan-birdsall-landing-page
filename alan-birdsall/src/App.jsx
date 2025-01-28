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
            id: 'redeemer',
            title: 'I Know That My Redeemer Lives',
            date: 'November 8, 2024',
            imgSrc: '/assets/i-know-that-my-redeemer-lives-cover-art.jpg',
            audioSrc: '/assets/i-know-that-my-redeemer-lives-sample.mp3',
            description: `The song “I Know That My Redeemer Lives” features the cherished lyrics penned by Samuel Medley (1738–1799) and original music composed by Alan Birdsall. Alan recalls the song’s creation: “One day, while sitting at the piano, I began playing a repeated G note. From there, the rest of the melody seemed to flow effortlessly.” Initially, Alan left out one of the verses to keep the song shorter, but he felt strongly that all the verses needed to be included. “That’s when I developed the compelling bridge,” he explains. Drawing from personal trials and an experience early in life that deepened his faith, Alan shares, “This song is a testament to my belief that Jesus Christ lives and will guide us through all of our challenges.”`,
            platformLinks: {
                spotify: 'https://open.spotify.com/album/0gvyScn4P7ElQdqgdlAFxR?referral=labelaffiliate&utm_source=1100lzZhi3L7&utm_medium=Indie_CDBaby&utm_campaign=labelaffiliate',
                appleMusic: 'https://music.apple.com/us/album/i-know-that-my-redeemer-lives-single/1773563999',
                amazon: 'https://music.amazon.com/albums/B0DJYKQ3RK?tag=fndcmpgns-20',
                pandora: 'https://www.pandora.com/artist/alan-birdsall/i-know-that-my-redeemer-lives/AL4glqtll95hbhX?%24ios_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A40218575&%24android_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A40218575&~channel=Partner%20Catalog%20Search%20API&_branch_match_id=1211384103698160503&utm_source=Partner%20Catalog%20Search%20API&_branch_referrer=H4sIAAAAAAAAA61Py2rDQAz8ms1tndQP%2BgBTTEqgkEOgl96MbCvexfLuVqvE9JJv77q0%2FYKCDiNpNDMyIiE%2BbbcB3OAZMgghI%2Bum7bPKywHjJD60F6barERVNCo%2FpFqWJfs96f2cJsBio6yAwOnO8hCBKPVWT84vWgyInj8144A4I2uyV4xp3xzLkT6E6LEynXnfJF%2FrY5tYYQ3SBhBT%2F3hdy78EHfRTFBjx27K7zKo4iJ%2FQqeKlOSZaucvvHqr7ahVM1%2Bzt8I%2Bit96Ac0j1KT3ukFW%2B24MA%2BTGhNwTuTQLN6XVzYzwjs3Vj27FfInK9N%2Bxn%2FAKFzD1cewEAAA%3D%3D',
                deezer: 'https://www.deezer.com/us/album/656337151',
            },
        },
        {
            id: 'dream',
            title: 'Dream A Dream',
            date: 'December 13, 2024',
            imgSrc: '/assets/dreamadreamimage.jpg',
            audioSrc: '/assets/dreamadream.mp3',
            description: `Dream a Dream began as a deeply personal project, inspired by Billy Joel’s Lullaby. The first time I heard his song on the radio, I was so moved that I felt compelled to create my own lullaby, which quickly became a cherished bedtime song for my children. When I started recording Dream a Dream in the studio, I envisioned a simple arrangement with just piano and vocals. But as the process unfolded, I kept hearing additional layers of sound in my mind—first a cello, and then more instruments. Each time I returned to the studio, the song evolved, becoming richer and more intricate.`,
            platformLinks: {
                spotify: 'https://open.spotify.com/album/05Q7WMdAQprcwXZQ7V7nSX?referral=labelaffiliate&utm_source=1011lA8jMyPd&utm_medium=Indie_CDBaby&utm_campaign=labelaffiliate',
                appleMusic: 'https://music.apple.com/us/album/dream-a-dream-single/1779207233',
                amazon: 'https://music.amazon.com/albums/B0DMQTLDR6?tag=fndcmpgns-20',
                pandora: 'https://www.pandora.com/artist/alan-birdsall-childrens/dream-a-dream/ALjZkgvmZKJ4Vr4?%24ios_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A41224247&%24android_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A41224247&~channel=Partner%20Catalog%20Search%20API&_branch_match_id=1211384103698160503&utm_source=Partner%20Catalog%20Search%20API&_branch_referrer=H4sIAAAAAAAAA61PwWrDMAz9GveWZHMMg0EYoaOwtofCYIdeghJrsRfHNrLb3PrtU8q2LxgI3pP0pCeZnGN6rqoIXgeCEmIsnfVT9SKk0pimHGJ3IdeYVSjqVsgdx7Is5e%2FIEGauAGWb8koc%2BKK3pBM4VwzGOk3oE3cYYS6guCPn7fHrPI3X%2BXzYqw9SG3a0IXUaMa4ndBGyaX5crurPu4dhShlGvJv1l1nUuxwm9KJ%2BbY8sU49SKqme1oU8TcHqf1x6Gwx4j6458cseSciHLWRwYWT2jkCDYdKe3jY3wk8ksn7segpLQmq2hsKM3whETS91AQAA',
                deezer: 'https://www.deezer.com/us/album/669393191',
            },
        },
        {
            id: 'dontLetGo',
            title: "I Don't Wanna Let You Go",
            date: 'January 10, 2025',
            imgSrc: '/assets/idontwannaletyougoimage.jpg',
            audioSrc: '/assets/idontwannaletyougo.mp3',
            description: `I Don’t Wanna Let You Go was born from a deeply meaningful dream I had shortly after my mother passed away. In the dream, I sang the words “I don’t wanna let you go” over and over to her. The melody you hear in the song today is exactly as it was in the dream—beautifully orchestrated and filled with emotion. The final verse reflects the moment my dad asked me to play my three-movement concerto for my mother. It was one of her favorite pieces and is included on this album, making this song a profound tribute to her memory and our shared love of music.`,
            platformLinks: {
                spotify: 'https://open.spotify.com/album/1OzDcjPWbpRlB0FZJN0F4x?referral=labelaffiliate&utm_source=1101lA98q7pi&utm_medium=Indie_CDBaby&utm_campaign=labelaffiliate',
                appleMusic: '',
                amazon: 'https://music.amazon.com/albums/B0DRXYHHLX?tag=fndcmpgns-20',
                pandora: 'https://www.pandora.com/artist/alan-birdsall/i-dont-wanna-let-you-go/ALvcjX3gK2rXtdw?%24ios_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A42703333&%24android_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A42703333&~channel=Partner%20Catalog%20Search%20API&_height=1080&_width=1920&_branch_match_id=1406172085282280792&utm_source=Partner%20Catalog%20Search%20API&_branch_referrer=H4sIAAAAAAAAA62PzWrDMAzHnya5JU2Twj4glLBRGOuh0EtvQYnV2ItrG1mt2aXPPmVse4IJHf76%2FEmaOcTn1SqAU56ghBBKa9y82mb1RmGc2Yf%2BSrbVS2PWdFm9E08plb8jo79IBohN5EVYcMVgSEWwVmJTKO%2B4SOAcFBa5%2BPTXYvJS6fa38ePUTO81nVilXIjGx14hhuWEPgDr9ody2%2FyxBxjnyDDhN2y4XrJmx35GlzWv3V7aNvVD1YgtC2WavFH%2FuPQ%2BankFbXuQlx1SVlcvwGD9JOqIQKMW0R3e8l6jmTS36%2BqxyvtklJDXT3WV3wnPSGTc1A%2FkU0Rqj3AGMl9oVowVjgEAAA%3D%3D',
                deezer: 'https://www.deezer.com/us/album/688386041',
            },
        },
        {
            id: 'intoTheLight',
            title: 'Into the Light: A Journey of Perseverance',
            date: 'March 21, 2025',
            imgSrc: '/assets/intothelightimage.jpg',
            description: 'A Journey of Perseverance',
            isAlbum: true,
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
                    <li><a href="#comingSoonSection" className="navItem">Coming Soon</a></li>
                    <li><a href="#contactSection" className="navItem">Contact</a></li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="mainContainer">
                <div className="mainContent">
                    {/* OUT NOW Section */}
                    <h2 className="sectionHeader">OUT NOW!</h2>
                    <div id="featuredSection">
                        {cardData.slice(0, 3).map((card) => (
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

                                <div className="platformLinks">
                                    {card.platformLinks && (
                                        <div className="platformButtons">
                                            {card.platformLinks.spotify && (
                                                <a href={card.platformLinks.spotify} target="_blank" rel="noreferrer" className="platformButton">
                                                    <FontAwesomeIcon icon={faSpotify} className="platformIcon" /> Spotify
                                                </a>
                                            )}
                                            {card.platformLinks.appleMusic && (
                                                <a href={card.platformLinks.appleMusic} target="_blank" rel="noreferrer" className="platformButton">
                                                    <FontAwesomeIcon icon={faApple} className="platformIcon" /> Apple Music
                                                </a>
                                            )}
                                            {card.platformLinks.amazon && (
                                                <a href={card.platformLinks.amazon} target="_blank" rel="noreferrer" className="platformButton">
                                                    <FontAwesomeIcon icon={faAmazon} className="platformIcon" /> Amazon
                                                </a>
                                            )}
                                            {card.platformLinks.pandora && (
                                                <a href={card.platformLinks.pandora} target="_blank" rel="noreferrer" className="platformButton">
                                                    Pandora
                                                </a>
                                            )}
                                            {card.platformLinks.deezer && (
                                                <a href={card.platformLinks.deezer} target="_blank" rel="noreferrer" className="platformButton">
                                                    Deezer
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

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

                    {/* COMING SOON Section */}
                    <h2 id="comingSoonSection" className="sectionHeader">COMING SOON</h2>
                    <div>
                        {cardData.slice(3).map((card) => (
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

                    {/* Contact Section */}
                    {/* <h2 id="contactSection" className="sectionHeader">Contact</h2> */}
                    <div id="contactSection" className="playerContainer">
                        {/* <div className="songName">Get in Touch</div> */}
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