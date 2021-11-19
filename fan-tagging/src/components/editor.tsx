import { FunctionComponent, memo, useEffect } from "react";

type EditorProps = {
    buttonClick: () => void,
}
export const Editor: FunctionComponent<EditorProps> = memo((props: EditorProps) => {
    useEffect(() => {
        console.log('Editor render');
    });

    return <>
        <h1>Editor</h1>
        <button title="Press me" onClick={props.buttonClick} />
    </>
});