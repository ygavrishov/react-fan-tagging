import { FunctionComponent, useEffect } from "react";
import { FanTagListItem } from "../types/internal-types";

type FanTagListProps = {
    fanTags: FanTagListItem[],
    selectFanTag: (fanTagId: number) => void,
}
export const FanTagList: FunctionComponent<FanTagListProps> = ({ fanTags, selectFanTag }: FanTagListProps) => {
    useEffect(() =>{
        console.log('Fan Tag List render');
    });
    return <>
        <ul>
            {fanTags.map(t => <li
                onClick={() => selectFanTag(t.fanTagId)}
                style={{ backgroundColor: t.selected ? "orange" : "" }}>
                {t.videoId}-{t.fanTagId}-{t.text}
            </li>)}
        </ul>
    </>
}