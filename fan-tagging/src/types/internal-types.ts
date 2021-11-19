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

export function getTestState(): FanTaggingState {
    var videos = [
        {
            videoId: 12,
            url: "https://15sof-cdn-images-qa02.azureedge.net/clip-thumbnails/pmv_small_thumb_e133b329-ee14-48b0-935d-b26a37e54924.jpg?sv=2015-12-11&sr=b&sig=OmhWtBD3fjLzDEDjAwClCxi6sbL6faVmaNTBFZbml%2Fg%3D&se=3017-08-18T12:14:44Z&sp=r"
        } as VideoListItem,
        {
            videoId: 13,
            url: "https://15sof-cdn-images-qa02.azureedge.net/clip-thumbnails/pmv_small_thumb_e133b329-ee14-48b0-935d-b26a37e54924.jpg?sv=2015-12-11&sr=b&sig=OmhWtBD3fjLzDEDjAwClCxi6sbL6faVmaNTBFZbml%2Fg%3D&se=3017-08-18T12:14:44Z&sp=r"
        } as VideoListItem,
        {
            videoId: 14,
            url: "https://15sof-cdn-images-qa02.azureedge.net/clip-thumbnails/pmv_small_thumb_e133b329-ee14-48b0-935d-b26a37e54924.jpg?sv=2015-12-11&sr=b&sig=OmhWtBD3fjLzDEDjAwClCxi6sbL6faVmaNTBFZbml%2Fg%3D&se=3017-08-18T12:14:44Z&sp=r"
        } as VideoListItem,
        {
            videoId: 15,
            url: "https://15sof-cdn-images-qa02.azureedge.net/clip-thumbnails/pmv_small_thumb_e133b329-ee14-48b0-935d-b26a37e54924.jpg?sv=2015-12-11&sr=b&sig=OmhWtBD3fjLzDEDjAwClCxi6sbL6faVmaNTBFZbml%2Fg%3D&se=3017-08-18T12:14:44Z&sp=r"
        } as VideoListItem,
    ];
    var fanTags = [
        { fanTagId: 101, videoId: 12, text: "Test 101" } as FanTagListItem,
        { fanTagId: 102, videoId: 13, text: "Test 102" } as FanTagListItem,
        { fanTagId: 103, videoId: 13, text: "Test 103" } as FanTagListItem,
        { fanTagId: 104, videoId: 14, text: "Test 104", selected: true } as FanTagListItem,
        { fanTagId: 105, videoId: 14, text: "Test 105" } as FanTagListItem,
        { fanTagId: 106, videoId: 14, text: "Test 106" } as FanTagListItem,
        { fanTagId: 107, videoId: 15, text: "Test 107" } as FanTagListItem,
    ];
    return { fanTags, videos } as FanTaggingState;
}