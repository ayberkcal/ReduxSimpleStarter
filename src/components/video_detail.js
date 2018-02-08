import React, { Component } from "react";

class VideoDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            video:props.video
        }
    };

    componentWillReceiveProps(nextProps){
        this.setState({video: nextProps.video});
    }

    render(){
        if(!this.state.video){
            return <div>Loading...</div>
        }

        const videoId = this.state.video.id.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        return(
          <div className="video-detail col-md-8">
              <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={videoUrl}></iframe>
              </div>
              <div className="details">
                  <div>{this.state.video.snippet.title}</div>
                  <div>{this.state.video.snippet.description}</div>
              </div>
          </div>
        );
    }
}

export default VideoDetail;