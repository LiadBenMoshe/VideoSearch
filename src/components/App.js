import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { video: [], videoSelect: null, term: null };

  componentDidMount() {
    this.onTermSubmit("ducks");
  }

  onTermSubmit = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      video: result.data.items,
      term: term,
      videoSelect: result.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    console.log("from the app ", video);
    this.setState({ videoSelect: video });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui fluid container">
          <SearchBar onSubmitSearch={this.onTermSubmit} />
        </div>
        <div style={{ marginBottom: "50px" }} className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails
                terms={this.state.term}
                video={this.state.videoSelect}
              />
            </div>
            <div className="five wide column">
              <div className="ui container" style={{ marginTop: "10px" }}>
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.video}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
