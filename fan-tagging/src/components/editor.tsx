import { FunctionComponent, memo, useEffect } from "react";
import { Slider } from "./slider";
import styled from 'styled-components'
import { Video } from "./video";
import { FanTagListItem, VideoListItem } from "../types/internal-types";

const MainArea = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin:20px;
`;


type EditorProps = {
    video: VideoListItem | undefined,
    fanTags: FanTagListItem[],
    selectedFanTagId: number | undefined,
    buttonClick: () => void,
    selectFanTag: (fanTagId: number) => void,
}
export const Editor: FunctionComponent<EditorProps> = memo((props: EditorProps) => {
    useEffect(() => {
        console.log('Editor render');
    });

    return (
        <MainArea>
            <h1 style={{ backgroundColor: "lightcoral" }}>Editor</h1>
            <Video video={props.video} />
            <Slider
                fanTags={props.fanTags}
                duration={props.video?.duration}
                selectedFanTagId={props.selectedFanTagId}
                selectFanTag = {props.selectFanTag}
            />
            {/* <button title="Press me" onClick={props.buttonClick} /> */}
        </MainArea>
    );
});