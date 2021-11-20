import { FunctionComponent, memo, useEffect } from "react";
import { Slider } from "./slider";
import styled from 'styled-components'
import { Video } from "./video";
import { FanTagListItem, VideoListItem } from "../types/internal-types";
import { FanTagNavigationBlock, FanTagNavigationProps } from "./fan-tag-navigation-block";

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
    selectFanTag: (fanTagId: number) => void,
    navigationProps: FanTagNavigationProps,
}
export const Editor: FunctionComponent<EditorProps> = memo((props: EditorProps) => {
    useEffect(() => {
        console.log('Editor render');
    });

    return (
        <MainArea>
            <h1 style={{ backgroundColor: "lightcoral" }}>Editor</h1>
            {props.video ?
                (<>
                    <Video video={props.video} />
                    <Slider
                        fanTags={props.fanTags}
                        duration={props.video?.duration}
                        selectedFanTagId={props.selectedFanTagId}
                        selectFanTag={props.selectFanTag}
                    />
                    <FanTagNavigationBlock
                        {...props.navigationProps}
                    />
                </>) : undefined}
        </MainArea>
    );
});