import { FunctionComponent, useEffect } from "react";

type EditorProps = {

}
export const Editor: FunctionComponent<EditorProps> = (props: EditorProps) =>{
    useEffect(() =>{
        console.log('Editor render');
    });

    return <h1>Editor</h1>
}