import { Dispatch, SetStateAction, useCallback } from "react";
import { EditFanTagTextProps } from "../components/edit-fan-tag-text";
import { editSelectedFanTagText } from "../state-mutators/video-and-tags";
import { FanTaggingState } from "../types/internal-types";

export function useFanTagText(fanTaggingState: FanTaggingState, setFanTaggingState: Dispatch<SetStateAction<FanTaggingState>>): EditFanTagTextProps {

    const onChange = useCallback((fanTagId: number, text: string)=>{
        console.log('text changed');
        
        editSelectedFanTagText(fanTaggingState, text);
    }, [fanTaggingState]);
    
    const props = {
        fanTags: fanTaggingState.currentFanTags.filter(t => t.selected),
        onChange: onChange,
    } as EditFanTagTextProps;

    return props;

}