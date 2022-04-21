import './App.css';
import youtube from './API/youtube';
import { Grid } from '@mui/material';
import SearchBar from "./Components/SearchBar"
import { useState } from 'react';
import VideoDetail from './Components/VideoDetail';
import VideoList from './Components/VideoList';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({id:{}, snippet:{}});

  return (
    <div className="App">
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12} style={{ marginTop: "15px"}} >
              <SearchBar onSubmit={handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  async function handleSubmit(searchTerm) {
    const apiKey = process.env.REACT_APP_GOOGLE_APIKEY;
    const {data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: apiKey,
        q: searchTerm
      }
    })
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
