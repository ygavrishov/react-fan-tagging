import { FunctionComponent, useEffect } from "react"

type SliderProps = {

}

export const Slider: FunctionComponent<SliderProps> = (props: SliderProps) => {
    useEffect(() =>{
        console.log('Slider render');
    });
    return <h1>Slider</h1>
}