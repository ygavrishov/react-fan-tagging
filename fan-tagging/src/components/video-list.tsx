import React, { FunctionComponent, useEffect } from 'react';
import { VideoListItem } from '../types/internal-types';


type VideoListProps = {
    videos: VideoListItem[],
}

export const VideoList: FunctionComponent<VideoListProps> = ({ videos }: VideoListProps) => {
    useEffect(() =>{
        console.log('VideoList render');
    });
    
    return <div>
        {videos.map(v => <div>
            <p>{v.videoId}</p>
            <img src={v.url} alt="" />
        </div>)}
    </div>
}