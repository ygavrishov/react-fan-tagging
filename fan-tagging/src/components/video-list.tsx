import React, { FunctionComponent, memo, useEffect } from 'react';
import { VideoListItem } from '../types/internal-types';


type VideoListProps = {
    videos: VideoListItem[],
    videoSelected: (videoId: number) => void,
}

export const VideoList: FunctionComponent<VideoListProps> = memo(({ videos, videoSelected }: VideoListProps) => {
    useEffect(() => {
        console.log('VideoList render');
    });

    return <div>
        {videos.map(v => <div key={v.videoId}>
            <div
                style={{ backgroundColor: v.selected ? "orange" : "" }}
                onClick={() => videoSelected(v.videoId)}
            >
                <p>{v.videoId}</p>
                <img src={v.url} alt="" />
            </div>
        </div>)}
    </div>
});