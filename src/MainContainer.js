import React from 'react'
import './MainContainer.css';
import VideoCard from './VideoCard';

const MainContainer = () => {
    return (
        <div className='mainContainer'>
            <h1>MainContainer</h1>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    )
}

export default MainContainer;
