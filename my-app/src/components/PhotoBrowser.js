import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
class PhotoBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPhoto: 1};
    }

    showImageDetails = (id) => {
        this.setState({ currentPhoto: id });
    }

    render() {
        return (
            <section className="container">
                <PhotoList photos={this.props.photos}/>
                <EditPhotoDetails photos={this.props.photos} currentPhoto={this.state.currentPhoto} showImageDetails={this.showImageDetails}/>
            </section>
        );
    }
}
export default PhotoBrowser;