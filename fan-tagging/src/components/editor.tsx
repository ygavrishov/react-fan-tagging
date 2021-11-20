import { FunctionComponent, memo, useEffect } from "react";
import { Slider } from "./slider";
import styled from 'styled-components'

const MainArea = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin:20px;
`;


type EditorProps = {
    buttonClick: () => void,
}
export const Editor: FunctionComponent<EditorProps> = memo((props: EditorProps) => {
    useEffect(() => {
        console.log('Editor render');
    });

    return (
        <MainArea>
            <h1 style={{backgroundColor:"lightcoral"}}>Editor</h1>
            <Slider />
            {/* <button title="Press me" onClick={props.buttonClick} /> */}
        </MainArea>
    );
});