import React from 'react'
import './MainContainer.css';
import VideoCard from './VideoCard';

const MainContainer = () => {
    return (
        <div className='mainContainer'>
            <VideoCard channelImageUrl="https://yt3.ggpht.com/-crg9KClpyDg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuck_BER3yDFLj1Qe9cVqkf5OQcMzLQ/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg" postedDate="3 Days ago" noOfViews="5.2M Views" channelName="Youtube thumbnail" title="Test Video" thumbnailUrl="https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new-1068x510.jpg"/>
            <VideoCard channelImageUrl="https://yt3.ggpht.com/-crg9KClpyDg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuck_BER3yDFLj1Qe9cVqkf5OQcMzLQ/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg" postedDate="3 Days ago" noOfViews="5.2M Views" channelName="Youtube thumbnail" title="Test Video" thumbnailUrl="https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new-1068x510.jpg"/>
            <VideoCard/>
            <VideoCard/>
        </div>
    )
}

export default MainContainer;
