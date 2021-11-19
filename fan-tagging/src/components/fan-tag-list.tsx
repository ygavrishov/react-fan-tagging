import { FunctionComponent, memo, useEffect } from "react";
import { FanTagListItem } from "../types/internal-types";

type FanTagListProps = {
    fanTags: FanTagListItem[],
    selectFanTag: (fanTagId: number) => void,
    deleteFanTag: (fanTagId: number) => void,
}
export const FanTagList: FunctionComponent<FanTagListProps> = memo(({ fanTags, selectFanTag, deleteFanTag }: FanTagListProps) => {
    useEffect(() => {
        console.log('Fan Tag List render');
    });
    return <>
        <ul>
            {fanTags.map(t => <li key={t.fanTagId}
                style={{ backgroundColor: t.selected ? "orange" : (t.inSelectedVideo ? "grey" : "") }}>
                <span onClick={() => selectFanTag(t.fanTagId)}>{t.videoId}-{t.fanTagId}-{t.text}</span>
                <a href='/#'
                    style={{ margin: "5px" }} onClick={() => deleteFanTag(t.fanTagId)}>X</a>
            </li>)}
        </ul>
    </>
});