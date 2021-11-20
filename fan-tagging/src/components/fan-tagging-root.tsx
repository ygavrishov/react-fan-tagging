import { FunctionComponent, useCallback, useEffect, useState } from "react"
import { FanTaggingState } from "../types/internal-types";
import { Editor } from "./editor";
import { FanTagList } from "./fan-tag-list";
import { VideoList } from "./video-list";
import styled from 'styled-components'
import { getTestState } from "../types/test-data";
import { deleteFanTag, setCurrentVideoAndTag } from "../state-mutators/video-and-tags";
import { useNavBlock } from "../hooks/nav-block-hook";
import { useFanTagText } from "../hooks/edit-fan-tag-text-hook";
import { useFanTagEditingButtons } from "../hooks/fan-tag-editing-buttons-hook";

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

    useEffect(() => {
        console.log('Fan Tagging Root render', fanTaggingState);
    });

    return (
        <MainArea>
            <VideoList videos={fanTaggingState.videos} videoSelected={selectVideoFunc} />
            <Editor
                video={fanTaggingState.currentVideo}
                fanTags={fanTaggingState.currentFanTags}
                selectedFanTagId={fanTaggingState.selectedFanTagId}
                selectFanTag={selectFanTagFunc}
                navigationProps={useNavBlock(fanTaggingState, setFanTaggingState)}
                editTextProps={useFanTagText(fanTaggingState, setFanTaggingState)}
                editingButtonsProps={useFanTagEditingButtons(fanTaggingState, setFanTaggingState)}
            />
            <FanTagList
                fanTags={fanTaggingState.fanTags}
                selectFanTag={selectFanTagFunc}
                deleteFanTag={deleteFanTagFunc} />
        </MainArea>
    );
}