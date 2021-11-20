import { FunctionComponent, useEffect } from "react"

export type FanTagEditingButtonsProps = {
    updateButtonVisible: boolean,
    updateButtonEnabled: boolean,
    updateButtonClicked: () => void,

    cancelButtonVisible: boolean,
    cancelButtonClicked: () => void,
}

export const FanTagEditingButtons: FunctionComponent<FanTagEditingButtonsProps> = (props: FanTagEditingButtonsProps) => {
    useEffect(() => {
        console.log('Editing Button Block rendering...', props);
    }, [props]);
    return (
        <div>
            {props.updateButtonVisible ? (
                <button
                    disabled={!props.updateButtonEnabled}
                    onClick={() => props.updateButtonClicked()}
                >Update Tag</button>
            ) : undefined}
            {props.cancelButtonVisible ? (
                <button
                    onClick={() => props.cancelButtonClicked()}
                >Cancel</button>
            ) : undefined}
        </div>
    );
}
