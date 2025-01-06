import React from 'react';
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
            <div className="playerContainer">
              <div className="coverImageContainer">
                <img src="/assets/i-know-that-my-redeemer-lives-cover-art.jpg" alt="Single Cover Art" />
              </div>
              <div className="songName">I Know That My Redeemer Lives</div>
              <div className="songArtists">Alan Birdsall</div>
              <div className="featuredReleaseDate">November 8, 2024</div>
              <audio id="audio-sample" controls>
                <source src="/assets/i-know-that-my-redeemer-lives-sample.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* "Dream A Dream" */}
            <div className="playerContainer">
              <div className="coverImageContainer">
                <img src="/assets/dream-a-dream-cover-art.jpg" alt="Dream A Dream Cover Art" />
              </div>
              <div className="songName">Dream A Dream</div>
              <div className="songArtists">Alan Birdsall</div>
              <div className="featuredReleaseDate">December 13, 2024</div>
              <audio id="audio-sample" controls>
                <source src="/assets/dream-a-dream-sample.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <div className="divider"></div>

          {/* Coming Soon Section */}
          <div id="comingSoonSection">
            <div className="sectionTitle">Coming Soon</div>
            <div className="allReleases">
              <div className="releaseContainer">
                <div className="releaseType">SINGLE</div>
                <div className="coverImageContainer">
                  <img src="/assets/comingSoonTemplate.jpg" alt="Coming Soon Cover Image" className="coverImage" />
                </div>
                <div className="songName">I Don't Wanna Let You Go</div>
                <div className="estReleaseDate">January 10, 2025</div>
              </div>

              <div className="releaseContainer">
                <div className="releaseType">ALBUM</div>
                <div className="coverImageContainer">
                  <img src="/assets/comingSoonTemplate.jpg" alt="Coming Soon Cover Image" className="coverImage" />
                </div>
                <div className="songName">Into the Light</div>
                <div className="albumSubline">A Journey of Perseverance</div> {/* Added Subline */}
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