import { FunctionComponent, useEffect, useRef, useState } from "react"
import nouislider, { API, Options } from "nouislider"
import "nouislider/dist/nouislider.css";
import { FanTagListItem } from "../types/internal-types";

type SliderProps = {
    fanTags: FanTagListItem[],
    duration: number | undefined,
    selectedFanTagId: number | undefined,
    selectFanTag: (fanTagId: number) => void,
}

export const Slider: FunctionComponent<SliderProps> = (props: SliderProps) => {
    const sliderDiv = useRef<HTMLDivElement>(null);

    const [api, setApi] = useState<API | undefined>(undefined);
    useEffect(() => {
        console.log('Slider render');
    });

    useEffect(() => {
        const markers: number[] = [];
        const connect: boolean[] = [];
        connect.push(false);
        props.fanTags.forEach(t => {
            markers.push(t.start);
            connect.push(true);
            markers.push(t.end);
            connect.push(false);
        });

        setApi(instance => {
            instance?.destroy();
            if (sliderDiv.current) {
                if (markers.length > 0) {
                    const newInstance = nouislider.create(sliderDiv.current, {
                        start: markers,
                        connect: connect,
                        range: {
                            min: 0,
                            max: props.duration ?? 0
                        },
                        behaviour: "none",
                    } as Options);

                    return newInstance;
                }
                else {
                    return undefined;
                }
            }
        });
    }, [props.duration, props.fanTags])

    useEffect(() => {
        if (api && sliderDiv.current) {
            const connects = sliderDiv.current.querySelectorAll(".noUi-connects .noUi-connect");
            connects.forEach((element, key) => {
                const div = element as HTMLDivElement;
                const fanTag = props.fanTags[key];
                if (fanTag.fanTagId === props.selectedFanTagId)
                    div.classList.add('active');
                else
                    div.classList.remove('active');
                div.onclick = () => {
                    props.selectFanTag(fanTag.fanTagId);
                };
            });
        }
    }, [api, props, props.fanTags, props.selectedFanTagId]);

    return <div>
        <div ref={sliderDiv}
        >
            <span>{props.fanTags.map(t => t.text).join()}</span>
        </div>
    </div>
}