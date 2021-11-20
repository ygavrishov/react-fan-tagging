import { FunctionComponent } from "react"

export type FanTagEditingButtonsProps = {
    updateButtonVisible: boolean,
    updateButtonEnabled: boolean,
    updateButtonClicked: () => void,
}

export const FanTagEditingButtons: FunctionComponent<FanTagEditingButtonsProps> = (props: FanTagEditingButtonsProps) => {
    return (
        <div>
            {props.updateButtonVisible ? (
                <button disabled={!props.updateButtonEnabled}>Update Tag</button>
            ) : undefined}
        </div>
    );
}
