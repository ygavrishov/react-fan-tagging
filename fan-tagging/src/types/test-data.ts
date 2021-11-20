import { FanTaggingState, FanTagListItem, VideoListItem } from "./internal-types";

const threeMinutes = 180 * 1000;

export function getTestState(): FanTaggingState {
    var videos = [] as VideoListItem[];
    for (let i = 0; i < 1000; i++) {
        videos.push({
            videoId: i + 12,
            thumbnailUrl: "https://15sof-cdn-images-qa02.azureedge.net/clip-thumbnails/pmv_small_thumb_e133b329-ee14-48b0-935d-b26a37e54924.jpg?sv=2015-12-11&sr=b&sig=OmhWtBD3fjLzDEDjAwClCxi6sbL6faVmaNTBFZbml%2Fg%3D&se=3017-08-18T12:14:44Z&sp=r",
            duration: threeMinutes,
        } as VideoListItem);
    }
    var fanTags = [
        { fanTagId: 101, videoId: 12, text: "Test 101", start: 10 * 1000, end: 20 * 1000 } as FanTagListItem,
        { fanTagId: 102, videoId: 13, text: "Test 102", start: 30 * 1000, end: 40 * 1000 } as FanTagListItem,
        { fanTagId: 103, videoId: 13, text: "Test 103", start: 50 * 1000, end: 60 * 1000 } as FanTagListItem,
        { fanTagId: 104, videoId: 14, text: "Test 104", start: 70 * 1000, end: 80 * 1000, selected: true } as FanTagListItem,
        { fanTagId: 105, videoId: 14, text: "Test 105", start: 90 * 1000, end: 100 * 1000 } as FanTagListItem,
        { fanTagId: 106, videoId: 14, text: "Test 106", start: 110 * 1000, end: 120 * 1000 } as FanTagListItem,
        { fanTagId: 107, videoId: 15, text: "Test 107", start: 130 * 1000, end: 145 * 1000 } as FanTagListItem,
    ];
    for (let i = 0; i < 1000; i++) {
        const fanTagId = fanTags.length + 200;
        fanTags.push({
            fanTagId: fanTagId,
            videoId: i + 12 + 7,
            text: `Test ${fanTagId}`,
            start: (35 * 1000 + i * 100) % threeMinutes,
            end: (40 * 1000 + i * 100) % threeMinutes,
        } as FanTagListItem);
    }
    return {
        fanTags,
        videos,
        currentFanTags: [],
        editingFanTags: [],
        hasChanges: false,
        currentVideo: undefined,
        selectedFanTagId: undefined,
    } as FanTaggingState;
}