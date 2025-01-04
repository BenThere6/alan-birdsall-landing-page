import React from 'react';
import './style.css';

function App() {
  return (
    <div>
      <div className="sectionAboveNav">
        <div className="portraitContainer">
          <img src="/assets/portrait.png" alt="Musician Portrait" />
        </div>
        <div className="logoContainer">
          <img src="/assets/logo.png" alt="Alan Birdsall Logo" />
        </div>
      </div>

      <nav>
        <ul className="navContainer">
          <li><a href="#featuredSection" className="navItem">Featured</a></li>
          <li><a href="#comingSoonSection" className="navItem">Coming Soon</a></li>
          <li><a href="#contactSection" className="navItem">Contact</a></li>
        </ul>
      </nav>

      <div className="mainContainer">
        <div className="mainContent">
          <div id="featuredSection">
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

            <div className="releaseContainer">
                <div className="releaseType">SINGLE</div>
                <div className="coverImageContainer">
                  <img src="/assets/comingSoonTemplate.jpg" alt="Coming Soon Cover Image" />
                </div>
                <div className="songName">Dream A Dream</div>
                <div className="estReleaseDate">December 13, 2024</div>
              </div>
          </div>

          <div className="divider"></div>

          <div id="comingSoonSection">
            <div className="sectionTitle">Coming Soon</div>
            <div className="allReleases">
              
              <div className="releaseContainer">
                <div className="releaseType">SINGLE</div>
                <div className="coverImageContainer">
                  <img src="/assets/comingSoonTemplate.jpg" alt="Coming Soon Cover Image" />
                </div>
                <div className="songName">Into the Light</div>
                <div className="estReleaseDate">January 10, 2025</div>
              </div>

              <div className="releaseContainer">
                <div className="releaseType">ALBUM</div>
                <div className="coverImageContainer">
                  <img src="/assets/comingSoonTemplate.jpg" alt="Coming Soon Cover Image" />
                </div>
                <div className="songName">Into the Light</div>
                <div className="estReleaseDate">February 21, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="copyrightLine">&copy; 2024 Alan Birdsall. All rights reserved.</div>
        <div className="socials">
          <h3>Follow</h3>
          <a href="https://www.facebook.com/alanbirdsallentertainment" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/alan.birdsall/profilecard/?igsh=dm9rZ2ppeXdheWtj" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
