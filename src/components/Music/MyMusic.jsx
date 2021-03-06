import React from "react";

function PlayButton(props) {
    const className = props.isMusicPlaying ? 'play active' : 'play';
    return <a onClick={props.onClick} href="#" title="Play audio" className={className} />;
}

export default PlayButton;