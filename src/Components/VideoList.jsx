import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map(video => (
        <>
            <VideoItem
                onVideoSelect={onVideoSelect}
                key={video.id.videoId}
                video={video}
            />
        </>
    ));

    return (
        <Grid container spacing={10} style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ paddingTop: "20px" }}>Similar Videos:</h2>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;