import { FunctionComponent } from "react";
import styled from 'styled-components'

const NavButton = styled.button`
    margin: 5px;
`;

export type FanTagNavigationProps = {
    moveToPrev: () => void,
    moveToNext: () => void,
    nextEnabled: boolean,
    prevEnabled: boolean,
};

export const FanTagNavigationBlock: FunctionComponent<FanTagNavigationProps> = (props: FanTagNavigationProps) => {
    return (
        <div style={{ margin: "20px" }}>
            <NavButton
                onClick={() => props.moveToPrev()}
                disabled={!props.prevEnabled}
            >PREV</NavButton>
            <NavButton
                onClick={() => props.moveToNext()}
                disabled={!props.nextEnabled}
            >NEXT</NavButton>
        </div>);
}