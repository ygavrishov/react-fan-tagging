import { FunctionComponent, useCallback, useEffect, useState } from "react"
import { FanTaggingState } from "../types/internal-types";
import { Editor } from "./editor";
import { FanTagList } from "./fan-tag-list";
import { VideoList } from "./video-list";
import styled from 'styled-components'
import { getTestState } from "../types/test-data";
import { deleteFanTag, isNextFanTagButtonEnabled, isPrevFanTagButtonEnabled, moveToNextFanTag, moveToPrevFanTag, setCurrentVideoAndTag } from "../state-mutators/video-and-tags";
import { FanTagNavigationProps } from "./fan-tag-navigation-block";

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

    const selectFanTagFunc = useCallback((fanTagId: number) => {
        console.log(`select fan tag: ${fanTagId}`);
        setFanTaggingState(state => setCurrentVideoAndTag(state, undefined, fanTagId));
    }, []);

    const selectVideoFunc = useCallback((videoId: number) => {
        console.log(`select video: ${videoId}`);
        setFanTaggingState(state => setCurrentVideoAndTag(state, videoId, undefined));
    }, []);

    const deleteFanTagFunc = useCallback((fanTagId: number) => {
        console.log(`delete fan tag: ${fanTagId}`);
        setFanTaggingState(state => deleteFanTag(state, fanTagId));
    }, []);

    const moveToPrevTagFunc = useCallback(() => {
        console.log(`move to prev`);
        setFanTaggingState(state => moveToPrevFanTag(state));
    }, []);

    const moveToNextTagFunc = useCallback(() => {
        console.log(`move to next`);
        setFanTaggingState(state => moveToNextFanTag(state));
    }, []);

    const navBlockProps = {
        moveToNext: moveToNextTagFunc,
        moveToPrev: moveToPrevTagFunc,
        nextEnabled: isNextFanTagButtonEnabled(fanTaggingState),
        prevEnabled: isPrevFanTagButtonEnabled(fanTaggingState),
    } as FanTagNavigationProps;

    useEffect(() => {
        console.log('Fan Tagging Root render');
    });

    return (
        <MainArea>
            <VideoList videos={fanTaggingState.videos} videoSelected={selectVideoFunc} />
            <Editor
                video={fanTaggingState.currentVideo}
                fanTags={fanTaggingState.currentFanTags}
                selectedFanTagId={fanTaggingState.selectedFanTagId}
                selectFanTag={selectFanTagFunc}
                navigationProps={navBlockProps}
            />
            <FanTagList
                fanTags={fanTaggingState.fanTags}
                selectFanTag={selectFanTagFunc}
                deleteFanTag={deleteFanTagFunc} />
        </MainArea>
    );
}