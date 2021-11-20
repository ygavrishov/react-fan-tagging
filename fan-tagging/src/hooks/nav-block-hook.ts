import { Dispatch, SetStateAction, useCallback } from "react";
import { FanTagNavigationProps } from "../components/fan-tag-navigation-block";
import { isNextFanTagButtonEnabled, isPrevFanTagButtonEnabled, moveToNextFanTag, moveToPrevFanTag } from "../state-mutators/video-and-tags";
import { FanTaggingState } from "../types/internal-types";

export function useNavBlock(fanTaggingState: FanTaggingState, setFanTaggingState: Dispatch<SetStateAction<FanTaggingState>>): FanTagNavigationProps {
    const moveToPrevTagFunc = useCallback(() => {
        console.log(`move to prev`);
        setFanTaggingState(state => moveToPrevFanTag(state));
    }, [setFanTaggingState]);

    const moveToNextTagFunc = useCallback(() => {
        console.log(`move to next`);
        setFanTaggingState(state => moveToNextFanTag(state));
    }, [setFanTaggingState]);

    const navBlockProps = {
        moveToNext: moveToNextTagFunc,
        moveToPrev: moveToPrevTagFunc,
        nextEnabled: isNextFanTagButtonEnabled(fanTaggingState),
        prevEnabled: isPrevFanTagButtonEnabled(fanTaggingState),
    } as FanTagNavigationProps;

    return navBlockProps;
}