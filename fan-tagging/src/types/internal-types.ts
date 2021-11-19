export type VideoListItem = {
    url: string,
    videoId: number,
    selected: boolean,
}
export type FanTagListItem = {
    videoId: number,
    fanTagId: number,
    text: string,
    inSelectedVideo: boolean,
    selected: boolean,
}

export type FanTaggingState = {
    videos: VideoListItem[],
    fanTags: FanTagListItem[],
}

