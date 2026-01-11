import React from 'react';
import ReactPlayer from 'react-player';
import './responsive-Player.css';

const ResponsivePlayer2 = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url='https://res.cloudinary.com/logic-pill/video/upload/v1743688999/TurtleCutterv2_sbpxpg.mp4'
                playing={true}
                muted={true}
                controls={true} // Allow users to unmute
                width='100%'
                height='100%'
                
            />
        </div>
    )
}
export default ResponsivePlayer2;