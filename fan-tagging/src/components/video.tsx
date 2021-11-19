import { FunctionComponent, useEffect } from "react"

type VideoProps = {

}

export const Video: FunctionComponent<VideoProps> = (props: VideoProps) =>{
    useEffect(() =>{
        console.log('Video render');
    });
    return <h1>Video</h1>
}