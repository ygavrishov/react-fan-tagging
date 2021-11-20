import { FunctionComponent, useEffect } from "react"
import { VideoListItem } from "../types/internal-types";

type VideoProps = {
    video: VideoListItem | undefined
}

export const Video: FunctionComponent<VideoProps> = (props: VideoProps) => {
    useEffect(() => {
        console.log('Video render');
    });
    return (
        <div>
            <img
                style={{ height: "400px" }}
                src={props.video?.thumbnailUrl} alt="" />
        </div>
    );
}