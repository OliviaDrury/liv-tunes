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
                    <div className="player-display">
                        <div id="player-album-art">
                            <img src="dumb-funk.png" alt="song cover art" />
                        </div>
                        <div className="player-buttons">
                            <button id="previous" className="previous" aria-label="Previous">
                                <FaBackward />
                            </button>
                            <button id="pause" className="pause" aria-label="Pause">
                                <FaPause />
                            </button>
                            <button id="play" className="play" aria-label="Play">
                                <FaPlay />
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
                <div className="parallel-lines">
                        <div />
                        <div />
                    </div>
                    <h1 className="fcc-title">Playlist</h1>
                    <div className="parallel-lines">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <ul id="playlist-songs"></ul>
            </div>
        </div>
    );
};

export default MusicPlayer;
