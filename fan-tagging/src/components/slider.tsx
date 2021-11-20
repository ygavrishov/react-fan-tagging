import { FunctionComponent, useEffect, useRef, useState } from "react"
import nouislider, { API, Options } from "nouislider"
import "nouislider/dist/nouislider.css";

type SliderProps = {

}

export const Slider: FunctionComponent<SliderProps> = (props: SliderProps) => {
    const sliderDiv = useRef<HTMLDivElement>(null);

    const [api, setApi] = useState<API | undefined>(undefined);
    useEffect(() => {
        console.log('Slider render');
        if (sliderDiv.current && !api) {
            setApi(nouislider.create(sliderDiv.current, {
                start: [20, 80],
                connect: true,
                range: {
                    'min': 0,
                    'max': 100
                }
            } as Options));
        }
    }, [api]);

    return <div>
        <div ref={sliderDiv}
        >
        </div>
    </div>
}