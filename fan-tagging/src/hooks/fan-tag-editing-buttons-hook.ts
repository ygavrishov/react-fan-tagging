import { Dispatch, SetStateAction, useCallback } from "react";
import { FanTagEditingButtonsProps } from "../components/fan-tag-editing-buttons";
import { completeFanTagEditing } from "../state-mutators/video-and-tags";
import { FanTaggingState } from "../types/internal-types";

export function useFanTagEditingButtons(fanTaggingState: FanTaggingState, setFanTaggingState: Dispatch<SetStateAction<FanTaggingState>>): FanTagEditingButtonsProps {

    const updateButtonClicked = useCallback(() => {
        completeFanTagEditing(fanTaggingState);
    }, [fanTaggingState]);

    const props = {
        updateButtonVisible: true,
        updateButtonEnabled: fanTaggingState.hasChanges,
        updateButtonClicked: updateButtonClicked,
    } as FanTagEditingButtonsProps;

    return props;

}