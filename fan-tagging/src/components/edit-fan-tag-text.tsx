import { FunctionComponent, useEffect } from "react";
import { FanTagListItem } from "../types/internal-types";

export type EditFanTagTextProps = {
    fanTags: FanTagListItem[],
    onChange: (fanTagId: number, text: string) => void,
}

export const EditFanTagText: FunctionComponent<EditFanTagTextProps> = (props: EditFanTagTextProps) => {
    useEffect(() => {
        console.log('Edit Fan Tag Text rendering...', props);
    });
    return (
        <div>
            {props.fanTags.map((fanTag, index) => (
                <div key={fanTag.fanTagId}>
                    <div>Fan Tag Text{props.fanTags.length > 1 ? ` ${index + 1}` : ''}:</div>
                    <textarea onChange={e => props.onChange(fanTag.fanTagId, e.target.value)}
                        value={fanTag.text}>

                    </textarea>
                </div>
            ))}
        </div>
    );
}