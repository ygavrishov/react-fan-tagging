import { FunctionComponent, useCallback, useEffect, useState } from "react"
import { FanTaggingState, getTestState } from "../types/internal-types";
import { Editor } from "./editor";
import { FanTagList } from "./fan-tag-list";
import { VideoList } from "./video-list";
import styled from 'styled-components'

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
        setFanTaggingState(state => {
            const fanTags = state.fanTags.map(t => ({ ...t, selected: t.fanTagId === fanTagId }));
            return { ...state, fanTags }
        })
    }, []);

    useEffect(() =>{
        console.log('Fan Tagging Root render');
    });

    return (
        <MainArea>
            <VideoList videos={fanTaggingState.videos} />
            <Editor />
            <FanTagList fanTags={fanTaggingState.fanTags} selectFanTag={selectFanTag} />
        </MainArea>
    );
}