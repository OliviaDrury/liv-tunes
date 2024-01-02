import React from 'react';
import './player.css';
import { FaBackward, FaPause, FaPlay, FaForward } from "react-icons/fa";

const MusicPlayer: React.FC = () => {
    return (
        <div className="container">
            <div className="player">
                <div className="player-bar">
                    <div className="parallel-lines">
                        <div />
                        <div />
                    </div>
                    <h1 className="fcc-title">Liv Tunes</h1>
                    <div className="parallel-lines">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="player-content">
                    <div id="player-album-art">
                        <img alt="song cover art" />
                    </div>
                    <div className="player-display">
                        <div className="player-buttons">
                            <button id="previous" className="previous" aria-label="Previous">
                            <FaBackward/>
                            </button>
                            <button id="pause" className="pause" aria-label="Pause">
                            <FaPause/>
                            </button>
                            <button id="play" className="play" aria-label="Play">
                            <FaPlay/>
                            </button>
                            <button id="next" className="next" aria-label="Next">
                            <FaForward />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="playlist">
                <div className="playlist-bar">
                    <p> here i am !!!</p>
                </div>
                <ul id="playlist-songs"></ul>
            </div>
        </div>
    );
};

export default MusicPlayer;
