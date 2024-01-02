import React from 'react';
import './player.css';

const MusicPlayer: React.FC = () => {
    return (
        <div className="container">
            <div className="player">
                <div className="player-bar">
                   gkjgkjgkjgkjg
                </div>
                <div className="player-content">
                    <div id="player-album-art">
                        <img alt="song cover art" />
                    </div>
                    <div className="player-display">
                        {/* ... */}
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
