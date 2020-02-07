import React from "react";
class PhotoThumb extends React.Component {

    handleViewClick = () => {
        this.props.showImageDetails(this.props.photo.id);
    }

    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.filename}`;
        return (
            <div className="photoBox" onClick={this.handleViewClick}>
                <figure>
                    <img src={imgURL} className="photoThumb" alt={this.props.photo.title} title={this.props.photo.title} />
                </figure>
                <div>
                    <h3>{this.props.photo.title}</h3>
                    <p>{this.props.photo.location.city}, {this.props.photo.location.country}</p>
                    <button onClick={this.handleViewClick}>View</button>
                    <button >❤</button>
                </div>
            </div>
        );
    }
}
export default PhotoThumb