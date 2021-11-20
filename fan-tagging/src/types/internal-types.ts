export type VideoListItem = {
    thumbnailUrl: string,
    videoId: number,
    duration: number,

    selected: boolean,
}

export type FanTagListItem = {
    videoId: number,
    fanTagId: number,
    text: string,
    start: number,
    end: number,

    inSelectedVideo: boolean,
    selected: boolean,
}

export type FanTaggingState = {
    videos: VideoListItem[],
    fanTags: FanTagListItem[],

    currentVideo: VideoListItem | undefined,
    currentFanTags: FanTagListItem[],
    selectedFanTagId: number | undefined,
}
