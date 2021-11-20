import { FanTaggingState, FanTagListItem } from "../types/internal-types";

export function setCurrentVideoAndTag(state: FanTaggingState, videoId: number | undefined, fanTagId: number | undefined): FanTaggingState {

    if (!videoId) {
        videoId = state.fanTags.find(t => t.fanTagId === fanTagId)?.videoId;
    }
    else if (!fanTagId) {
        fanTagId = state.fanTags.find(t => t.videoId === videoId)?.fanTagId;
    }

    const prevVideoId = state.videos.find(v => v.selected)?.videoId;
    const videos = prevVideoId && prevVideoId === videoId
        ? state.videos
        : state.videos.map(v => ({ ...v, selected: v.videoId === videoId }));

    const prevFanTagId = state.fanTags.find(t => t.selected)?.fanTagId;
    const fanTags = prevFanTagId && prevFanTagId === fanTagId
        ? state.fanTags
        : state.fanTags.map(t => ({ ...t, inSelectedVideo: t.videoId === videoId, selected: t.fanTagId === fanTagId }));

    const currentVideo = videos.find(v => v.selected);
    const currentFanTags = prevVideoId && prevVideoId === videoId
        ? state.currentFanTags
        : fanTags.filter(t => t.videoId === videoId);

    const selectedFanTagId = fanTagId;

    return { ...state, fanTags, videos, currentVideo, currentFanTags, selectedFanTagId, hasChanges: false }
}

export function deleteFanTag(state: FanTaggingState, fanTagId: number): FanTaggingState {
    const deletedTag = state.fanTags.find(t => t.fanTagId === fanTagId);
    const currentFanTags = !deletedTag?.inSelectedVideo
        ? state.currentFanTags
        : state.currentFanTags.filter(t => t.fanTagId !== fanTagId);

    const selectedFanTagId = state.selectedFanTagId === fanTagId
        ? undefined
        : state.selectedFanTagId;

    const fanTags = state.fanTags.filter(t => t.fanTagId !== fanTagId);
    return { ...state, fanTags, currentFanTags, selectedFanTagId }
}

export function moveToNextFanTag(state: FanTaggingState): FanTaggingState {
    const index = state.currentFanTags.findIndex(t => t.selected);
    const nextFanTag = state.currentFanTags[index + 1];
    if (nextFanTag) {
        const selectedFanTagId = nextFanTag.fanTagId;
        const fanTags = state.fanTags.map(t => ({ ...t, selected: t.fanTagId === selectedFanTagId }));
        const currentFanTags = state.currentFanTags.map(t => ({ ...t, selected: t.fanTagId === selectedFanTagId }));
        return { ...state, fanTags, currentFanTags, selectedFanTagId, hasChanges: false }
    }
    else {
        return state;
    }
}

export function moveToPrevFanTag(state: FanTaggingState): FanTaggingState {
    const index = state.currentFanTags.findIndex(t => t.selected);

    if (index > 0) {
        const selectedFanTagId = state.currentFanTags[index - 1].fanTagId;
        const fanTags = state.fanTags.map(t => ({ ...t, selected: t.fanTagId === selectedFanTagId }));
        const currentFanTags = state.currentFanTags.map(t => ({ ...t, selected: t.fanTagId === selectedFanTagId }));
        return { ...state, fanTags, currentFanTags, selectedFanTagId, hasChanges: false }
    }
    else {
        return state;
    }
}

export function isNextFanTagButtonEnabled(state: FanTaggingState): boolean {
    const index = state.currentFanTags.findIndex(t => t.selected);
    const nextFanTag = state.currentFanTags[index + 1];
    return Boolean(nextFanTag);
}

export function isPrevFanTagButtonEnabled(state: FanTaggingState): boolean {
    const index = state.currentFanTags.findIndex(t => t.selected);
    return index > 0;
}

export function editSelectedFanTagText(state: FanTaggingState, fanTagId: number, text: string): FanTaggingState {
    let editingTag = state.editingFanTags.find(t => t.fanTagId === fanTagId);
    let editingFanTags: FanTagListItem[];
    if (!editingTag) {
        editingTag = { fanTagId, text } as FanTagListItem;
        editingFanTags = [...state.editingFanTags, editingTag];
    }
    else {
        editingFanTags = [...state.editingFanTags];
    }
    return { ...state, hasChanges: true, editingFanTags };
}

export function completeFanTagEditing(state: FanTaggingState): FanTaggingState {
    state.editingFanTags.forEach(t => {
        const editingFanTag = state.fanTags.find(t1 => t1.fanTagId === t.fanTagId);
        if (editingFanTag) {
            if (t.text)
                editingFanTag.text = t.text;
        }
    });

    //update fan tag lists
    const fanTags = state.fanTags.map(t => ({ ...t }));
    const currentFanTags = state.currentFanTags.map(t => ({ ...t }));

    return { ...state, fanTags, currentFanTags, hasChanges: false, editingFanTags: [] };
}

export function cancelFanTagEditing(state: FanTaggingState): FanTaggingState {
    return { ...state, hasChanges: false, editingFanTags: [] };
}