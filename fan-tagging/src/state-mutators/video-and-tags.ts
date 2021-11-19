import { FanTaggingState } from "../types/internal-types";

export function setCurrentVideoAndTag(state: FanTaggingState, videoId: number | undefined, fanTagId: number | undefined): FanTaggingState {

    if (!videoId) {
        videoId = state.fanTags.find(t => t.fanTagId === fanTagId)?.videoId;
    }
    else if (!fanTagId) {
        fanTagId = state.fanTags.find(t => t.videoId === videoId)?.fanTagId;
    }

    const selectedVideoId = state.videos.find(v => v.selected)?.videoId;
    const videos = selectedVideoId && selectedVideoId === videoId
        ? state.videos
        : state.videos.map(v => ({ ...v, selected: v.videoId === videoId }));

    const selectedFanTagId = state.fanTags.find(t => t.selected)?.fanTagId;
    const fanTags = selectedFanTagId && selectedFanTagId === fanTagId
        ? state.fanTags
        : state.fanTags.map(t => ({ ...t, inSelectedVideo: t.videoId === videoId, selected: t.fanTagId === fanTagId }));

    return { ...state, fanTags, videos }

}