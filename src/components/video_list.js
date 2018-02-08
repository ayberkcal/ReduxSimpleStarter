import React, { Component } from "react";
import VideoListItem from "./video_list_item";

class VideoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            videoItems : []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            videoItems: nextProps.videos.map((video) => {
                return (
                    <VideoListItem
                        onVideoSelect={nextProps.onVideoSelect}
                        key={video.etag}
                        video={video}
                    />
                );
            })
        });
    }

    render(){
        if(this.state.videoItems.length == 0){
            return <div>Loading...</div>
        }

        return(
            <ul className="col-md-4 list-group">
                {this.state.videoItems}
            </ul>
        );
    }
}

export default VideoList;
