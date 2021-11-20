import { Dispatch, SetStateAction, useCallback } from "react";
import { FanTagEditingButtonsProps } from "../components/fan-tag-editing-buttons";
import { cancelFanTagEditing, completeFanTagEditing } from "../state-mutators/video-and-tags";
import { FanTaggingState } from "../types/internal-types";

export function useFanTagEditingButtons(fanTaggingState: FanTaggingState, setFanTaggingState: Dispatch<SetStateAction<FanTaggingState>>): FanTagEditingButtonsProps {

    const updateButtonClicked = useCallback(() => {
        setFanTaggingState(state => completeFanTagEditing(state));
    }, [setFanTaggingState]);

    const cancelButtonClicked = useCallback(() => {
        setFanTaggingState(state => cancelFanTagEditing(state));
    }, [setFanTaggingState]);

    const props = {
        updateButtonVisible: true,
        updateButtonEnabled: fanTaggingState.hasChanges,
        updateButtonClicked: updateButtonClicked,
        cancelButtonVisible: fanTaggingState.hasChanges,
        cancelButtonClicked: cancelButtonClicked,
    } as FanTagEditingButtonsProps;

    return props;

}