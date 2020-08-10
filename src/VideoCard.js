import React from 'react';
import './VideoCard.css';

function VideoCard({ thumbnailUrl, channelImageUrl, postedDate, title, channelName, noOfViews, }) {
    // BEM naming convention for CSS
    return (
        <div className='videoCard'>
            <h1>Video Card</h1>
        </div>
    )
}

export default VideoCard;
