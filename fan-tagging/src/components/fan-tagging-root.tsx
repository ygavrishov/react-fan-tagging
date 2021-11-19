import { FunctionComponent, useCallback, useEffect, useState } from "react"
import { FanTaggingState } from "../types/internal-types";
import { Editor } from "./editor";
import { FanTagList } from "./fan-tag-list";
import { VideoList } from "./video-list";
import styled from 'styled-components'
import { getTestState } from "../types/test-data";
import { setCurrentVideoAndTag } from "../state-mutators/video-and-tags";

const MainArea = styled.div`
    margin-left:20px;
    margin-right:20px;
    display:flex;
    justify-content: space-between;
`;

type FanTaggingProps = {

}

export const FanTaggingRoot: FunctionComponent<FanTaggingProps> = (props: FanTaggingProps) => {
    const [fanTaggingState, setFanTaggingState] = useState<FanTaggingState>(getTestState());

    const selectFanTag = useCallback((fanTagId: number) => {
        console.log(`select fan tag: ${fanTagId}`);
        setFanTaggingState(state => setCurrentVideoAndTag(state, undefined, fanTagId));
    }, []);

    const selectVideo = useCallback((videoId: number) => {
        console.log(`select video: ${videoId}`);
        setFanTaggingState(state => setCurrentVideoAndTag(state, videoId, undefined));
    }, []);

    const buttonClick = useCallback(() => {
        console.log('button pressed.');
    }, []);

    useEffect(() => {
        console.log('Fan Tagging Root render');
    });

    return (
        <MainArea>
            <VideoList videos={fanTaggingState.videos} videoSelected={selectVideo} />
            <Editor buttonClick={buttonClick} />
            <FanTagList fanTags={fanTaggingState.fanTags} selectFanTag={selectFanTag} />
        </MainArea>
    );
}