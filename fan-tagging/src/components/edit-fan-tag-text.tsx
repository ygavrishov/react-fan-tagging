import { FunctionComponent, useEffect, useState } from "react";
import { FanTagListItem } from "../types/internal-types";

export type EditFanTagTextProps = {
    fanTags: FanTagListItem[],
    onChange: (fanTagId: number, text: string) => void,
}

export type EditFanTagTextItemProps = {
    text: string,
    fanTagId: number,
    index: number | undefined,
    onChange: (fanTagId: number, text: string) => void,
}

const EditFanTagTextItem: FunctionComponent<EditFanTagTextItemProps> = (props: EditFanTagTextItemProps) => {
    useEffect(() => {
        console.log('Edit Fan Tag Text Item rendering...', props);
    });
    const [text, setText] = useState<string>(props.text);
    return (
        <div>
            <div>Fan Tag Text{props.index ? ` ${props.index}` : ""}:</div>
            <textarea
                value={text}
                onChange={e => {
                    setText(e.target.value);
                    props.onChange(props.fanTagId, text);
                }} />
        </div>
    );
};

export const EditFanTagText: FunctionComponent<EditFanTagTextProps> = (props: EditFanTagTextProps) => {
    useEffect(() => {
        console.log('Edit Fan Tag Text rendering...', props);
    });
    return (
        <div>
            {props.fanTags.map((t, index) => (
                <EditFanTagTextItem
                    key={t.fanTagId}
                    text={t.text}
                    fanTagId={t.fanTagId}
                    index={props.fanTags.length > 1 ? index + 1 : undefined}
                    onChange={props.onChange}
                />
            ))}
        </div>
    );
}