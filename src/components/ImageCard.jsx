import React from 'react';

class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.images.urls.regular}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}

export default ImageCard;
